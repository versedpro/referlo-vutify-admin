/* eslint-disable vue/valid-v-slot */
<template>
  <v-card>
    <v-window v-model="step">
      <v-window-item :value="1">
          <v-card class="primary tile flat">
    <v-system-bar class="gold--text" absolute color="transparent">
      <span class="pl-2">{{ $t("profile.memberSince") }}</span>
      <span class="ml-1">2020</span>
    </v-system-bar>

    <v-card-text class="pt-16 text-center">
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
          </v-card>
      </v-window-item>

      <v-window-item :value="2">
        <v-card>
          <referrers></referrers>
        </v-card>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 3" color="primary" depressed @click="step++"> Next </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "./json-data";
import AvatarPicker from "./avatar-picker.vue";
import Referrers from "./referrers.vue";

export default defineComponent({
  name: "Profile",
  step: 1,

  components: {
    Referrers: () => import("./referrers.vue")
  },

    Referrersted: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    }
  },
  setup() {
    const onboarding = ref(0);
    const showAvatarPicker = ref(false);
    const loading = ref(false);
    const avatarPicker = ref(AvatarPicker);
    const seeInfo = ref(false);
    const accessConfirmDialog = ref(false);
    const showPassword = ref(false);
    const password = ref("");
    const formPassword = ref(null);

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

    async function confirmPassword() {
      if (!formPassword.value.validate()) return;
      const phone = this.$store.getters.phone;
      await this.$store.dispatch("ConfirmAccess", {
        phone: phone,
        password: this.password
      });
      this.seeInfo = this.$store.state.user.confirmPassword;
      if (this.seeInfo) {
        this.accessConfirmDialog = false;
        this.next();
      }
    }

    const rules = ref([
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters"
    ]);

    const openedPanel = ref([]);

    function next() {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    }

    function prev() {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
      this.seeInfo = false;
    }

    return {
      onboarding,
      showAvatarPicker,
      Items,
      loading,
      form,
      openAvatarPicker,
      selectAvatar,
      avatarPicker,
      password,
      showPassword,
      confirmPassword,
      formPassword,
      rules,
      openedPanel,
      next,
      prev,
      seeInfo,
      accessConfirmDialog
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
