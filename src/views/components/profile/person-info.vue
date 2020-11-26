<template>
  <v-card flat tile>
    <v-card-text class="pt-8 text-center primary">
      <avatar :path="person.avatarPath" @on-change="avatarChanged"></avatar>
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
        <v-icon left> mdi-human-queue </v-icon>
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
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "PersonInfo",

  props: {
    person: Object
  },
  components: {
    Avatar: () => import("./avatar.vue")
  },
  setup() {
    const form = ref({
      firstName: "John",
      lastName: "Doe",
      contactEmail: "john@doe.com",
      avatar: ""
    });

    function avatarChanged(file) {
      form.value.avatar = file;
    }

    function handleUnlock() {
      this.$emit("on-unlock");
    }

    return {
      form,
      handleUnlock,
      avatarChanged
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
