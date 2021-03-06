<template>
  <v-card class="tile flat" height="100%">
    <v-window v-model="onboarding" vertical>
      <v-window-item>
        <person-info :person="form" @on-unlock="unlockReferee"></person-info>
      </v-window-item>

      <v-window-item>
        <referrers :items="items" @on-back-button="onBackButton"></referrers>
      </v-window-item>
    </v-window>

    <v-card-text>
      <password-prompt
        :show="showPasswordPrompt"
        @on-close="showPasswordPrompt = false"
        @on-confirm="handleConfirmPassword"
      >
      </password-prompt>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { ApiService } from "@/services/apiService";
import { Person } from "@/types/index";

export default defineComponent({
  name: "Profile",

  components: {
    PasswordPrompt: () => import("./password-prompt.vue"),
    PersonInfo: () => import("./person-info.vue"),
    Referrers: () => import("./referrers.vue")
  },

  beforeRouteUpdate(to, from, next) {
    // if route navigating away from referrer window due to back button
    if (from.query._referrer === "referrer") {
      this.onboarding = 0;
    }
    next();
  },

  setup() {
    const onboarding = ref(0);
    const showPasswordPrompt = ref(false);

    const items = ref([] as Person[]);
    const apiService = new ApiService();

    const getPeople = async (): Promise<void> => {
      const response = await apiService.getPeople();
      items.value = response;
    };
    getPeople();

    const form = ref({
      firstName: "John",
      lastName: "Doe",
      contactEmail: "john@doe.com",
      avatarPath: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
    });

    function next() {
      if (onboarding.value == 1) {
        onboarding.value = 0;
      } else {
        showPasswordPrompt.value = true;
      }
    }

    function unlockReferee() {
      showPasswordPrompt.value = true;
    }

    function onBackButton() {
      onboarding.value = 0;

      // if user navigated away using drawer routes
      // and then came back, he will see referrer window due to keep-alive
      // so only go one step back if route query has referrer
      // can't use hash because scroll-to-top-fab removes hash
      if (this.$route.query._referrer === "referrer") {
        this.$router.back();
      }
    }

    function handleConfirmPassword() {
      showPasswordPrompt.value = false;
      onboarding.value = 1;

      // create a history for back button
      this.$router.push({ query: { _referrer: "referrer" } });
    }

    return {
      onboarding,
      items,
      form,
      showPasswordPrompt,
      handleConfirmPassword,
      next,
      unlockReferee,
      onBackButton
    };
  }
});
</script>

<style>
.theme--light.v-label {
  color: #c1a357 !important;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #c1a357 !important;
}
.profile input {
  color: #f6f6f6 !important;
}
</style>
