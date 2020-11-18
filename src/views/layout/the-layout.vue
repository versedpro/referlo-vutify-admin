<template>
  <div class="v-application--wrap">
    <the-drawer />
    <the-toolbar />
    <the-content />
    <!-- <the-layout-fab /> -->
    <the-layout-to-top-fab />
    <the-bottom-navigation />
    <!-- <the-layout-footer /> -->
  </div>
</template>

<script lang="ts">
import TheDrawer from "./the-drawer.vue";
import TheToolbar from "./the-toolbar.vue";
import TheContent from "./the-content.vue";
// import TheLayoutFab from "./TheLayoutFab.vue";
import TheLayoutToTopFab from "./TheLayoutToTopFab.vue";
import TheBottomNavigation from "./the-bottom-navigation.vue";

import Vue from "vue";

export default Vue.extend({
  name: "TheLayout",

  components: {
    TheDrawer,
    TheToolbar,
    TheContent,
    // TheLayoutFab,
    TheLayoutToTopFab,
    TheBottomNavigation
  },
  data: () => ({})
});
</script>
