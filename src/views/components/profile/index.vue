<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-text class="primary">
          <v-flex class="mb-4">
            <v-btn depressed @click="openAvatarPicker" class="transparent pa-0" height="100%">
              <!-- <v-icon>
        mdi-pencil
      </v-icon> -->
            <v-avatar color="secondary darken-2" size="108">
            <v-avatar size="96" class="mx-4" color="primary lighten-1">
              <img :src="form.avatarPath" alt="Avatar" />
            </v-avatar>
            </v-avatar>
            <!-- <div class="v-avatar" style="height: 36px; min-width: 36px; width: 36px;"><img src="https://avatars.githubusercontent.com/u/13101802" alt="name"></div> -->
            </v-btn>
          </v-flex>
          <v-text-field v-model="form.firstName" label="FirstName"></v-text-field>
          <v-text-field v-model="form.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="form.contactEmail" label="Email Address"></v-text-field>
        </v-card-text>
        <v-card-actions class="primary">
          <v-btn outlined rounded class="ma-2" color="secondary darken-2" dark to="/profile2">
            Accept
            <v-icon dark right>
              mdi-checkbox-marked-circle
            </v-icon>
          </v-btn>
          <!-- <v-btn color="primary" :loading="loading" @click.native="update"> -->
        </v-card-actions>
      </v-card>
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
    AvatarPicker
  },

  setup() {
    const items = ref(Items);
    const showAvatarPicker = ref(false);
    const loading = ref(false);
    const avatarPicker = ref(AvatarPicker);

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

    return {
      showAvatarPicker,
      items,
      loading,
      form,
      openAvatarPicker,
      selectAvatar,
      avatarPicker
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
.theme--light.v-input input, .theme--light.v-input textarea {
    color: #f6f6f6 !important;
}
</style>
