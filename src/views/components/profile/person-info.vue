<template>
  <v-card flat tile>
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
          <img :src="person.avatarPath" alt="Avatar" />
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
      <v-chip class="text-h6" color="transparent" text-color="primary">
        <v-icon left> mdi-currency-usd-circle-outline </v-icon>
        10000
      </v-chip>

      <v-spacer></v-spacer>

      <v-chip class="text-h6" color="transparent" text-color="primary">
        <v-icon left> mdi-currency-usd-circle-outline </v-icon>
        10000
      </v-chip>
    </v-card-actions>

    <v-card-title class="justify-center pt-12"> My Referees </v-card-title>
    <v-card-text class="py-0 text-center">
      <v-btn
        depressed
        text
        height="128px"
        width="128px"
        color="primary lighten-2"
        @click="handleUnlock"
      >
        <v-icon size="128px">mdi-lock-outline</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text class="mt-0 py-0 text-center"> Click to unlock </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import { Items } from "./json-data";

export default defineComponent({
  name: "PersonInfo",

  props: {
    person: Object
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
      contactEmail: "john@doe.com"
    });

    function openAvatarPicker() {
      showAvatarPicker.value = true;
      console.log("hello");
    }

    function selectAvatar(avatarPath) {
      console.log(avatarPath);
      this.form.avatarPath = avatarPath;
    }

    function next() {
      if (onboarding.value == 1) {
        onboarding.value = 0;
      } else {
        showPasswordPrompt.value = true;
      }
    }

    function prev() {
      onboarding.value = 0;
      // if user navigated away using drawer routes
      // and then came back, he will see referrer window due to keep-alive
      // so only go one step back if route hash has referrer
      if (this.$route.hash === "#referrer") {
        this.$router.back();
      }
    }

    function handleUnlock() {
      this.$emit("on-unlock");
    }

    function handleConfirmPassword() {
      showPasswordPrompt.value = false;
      onboarding.value = 1;

      // create a history for back button
      this.$router.push({ hash: "#referrer" });
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
      next,
      prev,
      handleUnlock
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
