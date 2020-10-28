<template>
  <v-card class="d-inline-block mr-12 pt-12" tile width="650px" height="100vh">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-img
            class="mt-4"
            :src="imageSource"
            contain
            position="center center"
            aspect-ratio="1"
            height="110px"
          ></v-img>
          <v-card-title class="my-6 display-1 font-weight-bold justify-center">Log in</v-card-title>

          <!-- <v-form class="mt-0 px-12" ref="form" @submit.prevent="handleLogin"> -->
          <v-form class="mt-0 px-12" ref="form">
            <v-card-subtitle class="py-0">Username</v-card-subtitle>
            <v-card-actions>
              <v-text-field
                dense
                solo
                rounded
                flat
                single-line
                name="username"
                background-color="#fffcc8"
                v-model="username"
                value="Input text"
                label="lblUsername"
              ></v-text-field>
            </v-card-actions>

            <v-card-subtitle class="py-0">Password</v-card-subtitle>
            <v-card-actions>
              <v-text-field
                dense
                solo
                rounded
                flat
                single-line
                background-color="#fffcc8"
                name="password"
                v-model="password"
                value="Input text"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                label="lblPassword"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-card-actions>

            <v-card-actions class="px-7">
              <v-btn
                rounded
                block
                type="submit"
                class="orange darken-3 white--text subtitle-1 mt-0 text-capitalize"
                :loading="loading"
                >{{ btnTextLogin }}</v-btn
              >
            </v-card-actions>
          </v-form>

          <v-card-actions class="justify-center">
            <v-checkbox
              v-model="KeepmeloggediIn"
              label="Keep me logged in"
              value="KeepmeloggediIn"
              color="orange darken-3"
            ></v-checkbox>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const imageSource = require("@/assets/img/wz-master-logo.png");

export default defineComponent({
  components: {
    Localization: () => import("../widget/app-localization.vue")
  },

  //   props: {
  // \   userInfo: unknown,

  //     lblUsername: String,
  //     lblPassword: String,

  //     loading: boolean,
  //     btnTextLogin: string,

  //     imageZooSource: unknown,
  //     imageSource: unknown,
  //     title: String,

  //     snackbar: boolean,
  //     y: string,
  //     x: string,
  //     mode: string,
  //     timeout: string,
  //     text: string
  //   },

  setup() {
    const showPassword = ref(false);
    const KeepmeloggediIn = ref("Keep-me-logged-in");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imageSource = ref(require("@/assets/img/wz-master-logo.png"));

    return { showPassword, KeepmeloggediIn, imageSource };
  }
});
</script>

<style scoped>
/* .login {
  color: "#3b3c3c !important";
} */
</style>
