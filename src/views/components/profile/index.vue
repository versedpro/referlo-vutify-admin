<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-text class="primary">
          <v-flex class="mb-4">
            <v-btn depressed @click="openAvatarPicker" class="transparent pa-0" height="100%">
              <v-avatar color="secondary darken-2" size="108">
                <v-avatar size="96" class="mx-4" color="primary lighten-1">
                  <img :src="form.avatarPath" alt="Avatar" />
                </v-avatar>
              </v-avatar>
              <!-- <div class="v-avatar" style="height: 36px; min-width: 36px; width: 36px;"><img src="https://avatars.githubusercontent.com/u/13101802" alt="name"></div> -->
            </v-btn>
          </v-flex>
          <v-text-field class="profile" v-model="form.firstName" label="FirstName"></v-text-field>
          <v-text-field class="profile" v-model="form.lastName" label="Last Name"></v-text-field>
          <v-text-field class="profile" v-model="form.contactEmail" label="Email Address"></v-text-field>
        </v-card-text>
        <v-card-actions class="primary" v-if="!seeInfo">
          <!-- <v-btn outlined rounded class="ma-2" color="secondary darken-2" dark to="/profile2">
            Accept
            <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
          </v-btn> -->
          <!-- <v-btn color="gold" class="ma-2" @click="showInfo">See</v-btn> -->
          <v-row justify="center">
            <v-dialog v-model="accessConfirmDialog" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="gold ma-2 text--gold" dark v-bind="attrs" v-on="on">SeeInfo</v-btn>
              </template>
              <v-card>
                <v-form ref="formPassword" lazy-validation>
                  <v-card-title class="headline text--gold">{{ $t("login.confirmPassword") }}</v-card-title>
                  <v-card-text>
                    <v-text-field
                      v-model="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :label="$t('login.password')"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      name="password"
                      required
                      autocomplete="current-password"
                      :rules="rules"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="accessConfirmDialog = false">
                      Cancel
                    </v-btn>
                    <v-btn color="green darken-1" text @click="confirmPassword">Confirm</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card-actions>
      </v-card>
      <profile-second v-if="seeInfo"></profile-second>
    </v-layout>
    <avatar-picker
      v-model="showAvatarPicker"
      :current-avatar="form.avatarPath"
      @selected="selectAvatar"
    ></avatar-picker>
    <!-- <panel-group-item title="Shoppings" icon="mdi-cart" color="green" :value="13600" /> -->
  </v-container>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_referrer_list";

import { defineComponent, ref } from "@vue/composition-api";

import AvatarPicker from "./avatar-picker.vue";
// import PanelGroupItem from "./home/PanelGroupItem.vue";

export default defineComponent({
  name: "Profile",
  components: {
    // PanelGroupItem,
    AvatarPicker,
    ProfileSecond: () => import("../profile2.vue")
  },

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
      avatarPath: "img/avatars/customer-support.png"
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
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
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
.profile input{
  color: #f6f6f6 !important;
}
</style>
