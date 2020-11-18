/* eslint-disable vue/valid-v-slot */
<template>
  <v-card class="tile flat" height="100%">
    <v-system-bar class="gold--text" absolute color="transparent">
      <span class="pl-2">{{ $t("profile.memberSince") }}</span>
      <span class="ml-1">2020</span>
    </v-system-bar>

    <v-card-text class="pt-16 text-center primary">
      <v-btn
        fab
        depressed
        color="gold"
        @click="openAvatarPicker"
        class="transparent pa-0"
        width="128"
        height="128"
      >
        <v-avatar size="120" class="mx-4" color="primary lighten-1">
          <img :src="form.avatarPath" alt="Avatar" />
        </v-avatar>
      </v-btn>
      <v-card-title class="gold--text justify-center">Joe Bloxx</v-card-title>
      <v-card-subtitle class="gold--text justify-center">12345678</v-card-subtitle>
      <v-text-field class="profile" v-model="form.lastName" label="Last Name"></v-text-field>
      <v-text-field
        class="profile"
        v-model="form.contactEmail"
        label="Email Address"
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="gold primary--text">
      <span>Referrers</span>
      <v-spacer></v-spacer>

      <v-btn class="mr-2 text--primary" icon @click="next">
        <v-icon>{{ lockIcon }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-window v-model="onboarding" vertical>
      <v-window-item>
        <v-alert class="rounded-0" height="25vh">Locked</v-alert>
      </v-window-item>
      <v-window-item>
        <referrers :items="Items"></referrers>
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
import { defineComponent, ref, computed } from "@vue/composition-api";
import { Items } from "./json-data";

export default defineComponent({
  name: "Profile",

  components: {
    PasswordPrompt: () => import("./password-prompt.vue"),
    Referrers: () => import("./referrers.vue")
  },

  setup() {
    const onboarding = ref(0);
    const showAvatarPicker = ref(false);
    const showPasswordPrompt = ref(false);

    const lockIcon = computed(() => {
      return onboarding.value != 0 ? "mdi-lock-open-outline" : "mdi-lock";
    });

    const form = ref({
      firstName: "John",
      lastName: "Doe",
      contactEmail: "john@doe.com",
      avatarPath: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
    });

    function openAvatarPicker() {
      this.showAvatarPicker = true;
      console.log("hello");
    }

    function selectAvatar(avatarPath) {
      this.form.avatarPath = avatarPath;
    }

    function next() {
      if (onboarding.value == 1) {
        onboarding.value = 0;
      } else {
        showPasswordPrompt.value = true;
      }
    }

    function handleConfirmPassword() {
      showPasswordPrompt.value = false;
      onboarding.value = 1;
    }

    return {
      onboarding,
      showAvatarPicker,
      Items,
      lockIcon,
      form,
      openAvatarPicker,
      selectAvatar,
      showPasswordPrompt,
      handleConfirmPassword,
      next
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
