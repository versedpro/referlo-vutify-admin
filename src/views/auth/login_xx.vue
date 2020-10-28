<template>
  <v-container fluid fill-height justify-end class="pa-0 ma-0 home-hero">
    <login-layout />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
//import { Component, Vue } from "vue-property-decorator";
//import { UserModule } from "@/store/modules/user";
// import { Route } from "vue-router";
//import { IUserInfo } from "../types";

// @Component({
//   components: {
//     LoginLayout: () => import("@/components/layout/login-layout.vue")
//   }
// })
export default class Login extends Vue {
  // properties
  private loading = false;
  private redirect: string | undefined = undefined;

  private snackbar = false;
  private y = "top";
  private x = null;
  private mode = "";
  private timeout = 6000;
  private text = "Please try again...";

  private imageZooSource = require("@/assets/img/home.jpg");
  private imageSource = require("@/assets/img/wz-master-logo.png");
  // private userInfo: IUserInfo = { username: "", password: "" };
  private windowHeight = window.innerHeight;

  // computed properties
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get snackbarText() {
    return this.text;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get homePath() {
    return "/login";
  }

  // methods
  // private handleLogin() {
  //   this.loading = true;
  //   //this.$router.push({ path: this.redirect || this.homePath });

  //   UserModule.Login(this.userInfo)
  //     .then(() => {
  //       this.loading = false;
  //       this.$router.push({ path: this.redirect || this.homePath });
  //     })
  //     .catch(() => {
  //       this.loading = false;
  //       this.snackbar = true;
  //     });
  // }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // mounted() {
  //   if (sessionStorage.getItem("user")) {
  //     this.$router.push({ path: this.redirect || this.homePath });
  //   }
  // }

  private onResize() {
    this.windowHeight = window.innerHeight;
  }
}
</script>

<style scoped>
/* html {
  overflow-y: auto;
} */

.home-hero {
  background: url("~@/assets/img/home.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: center center;
}
</style>
