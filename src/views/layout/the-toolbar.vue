<template>
  <v-app-bar app :dense="toolbarDense">
    <v-app-bar-nav-icon @click.stop="toggleNavbar">
      <v-icon>{{ toggleNavbarIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <breadcrumbs />
    <v-spacer />
    <full-screen />
    <notification />
    <localization class="ml-4" />
    <!-- <profile /> -->
    <v-btn class="ml-2" icon color="indigo" @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Breadcrumbs from "../widget/app-breadcrumbs.vue";
import FullScreen from "../widget/app-fullscreen.vue";
import Localization from "../widget/app-localization.vue";
import Notification from "../widget/app-notification.vue";
import { defineComponent, computed } from "@vue/composition-api";

export default defineComponent({
  name: "TheLayoutToolbar",
  components: {
    Breadcrumbs,
    // ErrorLog,
    FullScreen,
    Localization,
    Notification
    // Profile
  },

  setup(_, { root }) {
    const toolbarDense = computed(() => root.$store.getters.toolbarDense);
    const navbarShow = computed(() => root.$store.getters.navbarShow);
    const toggleNavbarIcon = computed(() => {
      return navbarShow.value ? "mdi-format-indent-decrease" : "mdi-format-indent-increase";
    });

    function logout() {
      root.$store.dispatch("LogOut");
      root.$router.push("/landing");
    }

    function toggleNavbar() {
      root.$store.dispatch("NavbarToggle");
    }

    return {
      toolbarDense,
      navbarShow,
      toggleNavbarIcon,
      logout,
      toggleNavbar
    };
  }
});
</script>
