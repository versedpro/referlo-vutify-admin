<template>
  <div class="v-application--wrap">
    <the-layout-drawer />
    <the-toolbar />
    <the-content />
    <!-- <the-layout-fab /> -->
    <the-layout-to-top-fab />
    <the-bottom-navigation />
    <!-- <the-layout-footer /> -->
  </div>
</template>

<script lang="ts">
import TheLayoutDrawer from "./TheLayoutDrawer.vue";
import TheToolbar from "./the-toolbar.vue";
import TheContent from "./the-content.vue";
// import TheLayoutFab from "./TheLayoutFab.vue";
import TheLayoutToTopFab from "./TheLayoutToTopFab.vue";
import TheBottomNavigation from "./the-bottom-navigation.vue";
// import TheLayoutFooter from "./TheLayoutFooter.vue";

import Vue from "vue";

export default Vue.extend({
  name: "TheLayout",
  components: {
    TheLayoutDrawer,
    TheToolbar,
    TheContent,
    // TheLayoutFab,
    TheLayoutToTopFab,
    TheBottomNavigation
    // TheLayoutFooter
  },
  data: () => ({})
});
</script>
