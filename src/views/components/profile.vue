<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-text>
          <v-flex class="mb-4">
            <v-avatar size="96" class="mr-4">
              <img src="/img/static/avatar/a1.jpg" alt="Avatar" />
            </v-avatar>
            <v-btn @click="openAvatarPicker">Change Avatar</v-btn>
          </v-flex>
          <v-text-field v-model="form.firstName" label="FirstName"></v-text-field>
          <v-text-field v-model="form.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="form.contactEmail" label="Email Address"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn color="primary" :loading="loading" @click.native="update"> -->
          <v-btn color="primary">
            <v-icon left dark>check</v-icon>
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <!-- <avatar-picker
      v-model="showAvatarPicker"
      :current-avatar="form.avatar"
      @selected="selectAvatar"
    ></avatar-picker> -->
  </v-container>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_referrer_list";

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Profile",

  setup() {
    const items = ref(Items);
    const showAvatarPicker = ref(false);
    const loading = ref(false);

    const form = ref({
      firstName: "John",
      lastName: "Doe",
      contactEmail: "john@doe.com",
      avatar: "MALE_CAUCASIAN_BLOND_BEARD"
    });

    return {
      showAvatarPicker,
      items,
      loading,
      form
    };
  }
});
</script>
