<template>
  <v-app>
    <router-view />

    <!-- <the-bottom-navigation /> -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import TheBottomNavigation from "@/views/layout/the-bottom-navigation.vue";

export default Vue.extend({
  name: "App",
  // components: {
  //   TheBottomNavigation
  // },

  data: () => ({
    //
  })
});
</script>
