/* eslint-disable vue/valid-v-slot */
<template>
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

    <v-card-actions class="gold primary--text justify-space-between">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-card-actions>

    <v-window v-model="onboarding" vertical>
      <v-window-item>
        <v-alert>test1</v-alert>
      </v-window-item>
      <v-window-item>
        <v-alert>test2</v-alert>
        <referrers items="Items"></referrers>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "./json-data";
import AvatarPicker from "./avatar-picker.vue";
// import Referrers from "./referrers.vue";

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
      onboarding.value = 1;
    }

    function prev() {
      onboarding.value = 0;
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
