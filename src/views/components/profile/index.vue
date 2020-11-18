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

    <v-expansion-panels class="mb-16" v-model="openedPanel" accordion flat tile>
      <v-expansion-panel>
        <v-expansion-panel-header class="gold primary--text">
          <template v-slot:default="{ open }">
            {{ $t("profile.referrers") }}
            <span v-if="open"> Opened </span>
          </template>
          <template v-slot:actions>
            <v-icon color="primary"> mdi-lock </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <referrers :items="Items"></referrers>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "./json-data";
import AvatarPicker from "./avatar-picker.vue";

export default defineComponent({
  name: "Profile",

  components: {
    Referrers: () => import("./referrers.vue")
  },

  setup() {
    const showAvatarPicker = ref(false);
    const loading = ref(false);
    const avatarPicker = ref(AvatarPicker);
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
      }
    }

    const rules = ref([
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters"
    ]);

    const openedPanel = ref([]);

    return {
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
      openedPanel
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
