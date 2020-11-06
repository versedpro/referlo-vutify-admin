<template>
  <v-app-bar app :dense="toolbarDense">
    <v-app-bar-nav-icon @click.stop="toggleNavbar">
      <v-icon>{{ toggleNavbarIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <breadcrumbs />
    <v-spacer />
    <error-log />
    <full-screen />
    <notification />
    <localization />
    <!-- <profile /> -->
    <v-btn class="ml-2" icon color="indigo" @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Breadcrumbs from "../widget/AppBreadcrumbs.vue";
import ErrorLog from "../widget/AppErrorLog.vue";
import FullScreen from "../widget/AppFullScreen.vue";
import Localization from "../widget/app-localization.vue";
import Notification from "../widget/AppNotification.vue";
// import Profile from "../widget/AppProfile.vue";

import Vue from "vue";

export default Vue.extend({
  name: "TheLayoutToolbar",
  components: {
    Breadcrumbs,
    ErrorLog,
    FullScreen,
    Localization,
    Notification
    // Profile
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["toolbarDense", "navbarShow"]),
    toggleNavbarIcon() {
      return this.navbarShow ? "mdi-format-indent-decrease" : "mdi-format-indent-increase";
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("LogOut");
      this.$router.push("/landing");
    },
    toggleNavbar() {
      this.$store.dispatch("NavbarToggle");
    }
  }
});
</script>
