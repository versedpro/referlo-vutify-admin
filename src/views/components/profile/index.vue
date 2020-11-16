<template>
  <v-card>
    <v-list-item>
      <v-list-item-avatar size="128" color="gold">
        <v-img class="pa-2" alt="xx" :src="form.avatarPath"></v-img>
      </v-list-item-avatar>

      <v-list-item-content class="ma-0">
        <v-list-item-title class="primary--text">ABB</v-list-item-title>
        <v-list-item-title class="primary--text">ABB</v-list-item-title>
        <!-- <v-list-item-subtitle class="gold--text">
              <span>{{ $t("home.memberSince") }}</span>
              <span class="ml-1">{{ person.memberSince }}</span>
            </v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>

    <v-card-action>
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

      <h1>ddd</h1>
    </v-card-action>

    <v-card-text>
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

      <v-text-field class="profile" v-model="form.firstName" label="FirstName"></v-text-field>
      <v-text-field class="profile" v-model="form.lastName" label="Last Name"></v-text-field>
      <v-text-field
        class="profile"
        v-model="form.contactEmail"
        label="Email Address"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_referrer_list";

import { defineComponent, ref } from "@vue/composition-api";

import AvatarPicker from "./avatar-picker.vue";
// import PanelGroupItem from "./home/PanelGroupItem.vue";

export default defineComponent({
  name: "Profile",
  // components: {
  //   // PanelGroupItem,
  //   AvatarPicker,
  //   ProfileSecond: () => import("../profile2.vue")
  // },

  setup() {
    const items = ref(Items);
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
      }
    }

    const rules = ref([
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters"
    ]);

    return {
      showAvatarPicker,
      items,
      loading,
      form,
      openAvatarPicker,
      selectAvatar,
      avatarPicker,
      seeInfo,
      password,
      accessConfirmDialog,
      showPassword,
      confirmPassword,
      formPassword,
      rules
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
