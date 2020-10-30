<template>
  <div class="v-application--wrap">
    <the-layout-drawer />
    <the-layout-toolbar />
    <the-content />
    <the-layout-fab />
    <the-layout-to-top-fab />
    <!-- <the-layout-bottom-navigation /> -->
    <!-- <the-layout-footer /> -->
  </div>
</template>

<script lang="ts">
import TheLayoutDrawer from "./TheLayoutDrawer.vue";
import TheLayoutToolbar from "./TheLayoutToolbar.vue";
import TheContent from "./the-content.vue";
import TheLayoutFab from "./TheLayoutFab.vue";
import TheLayoutToTopFab from "./TheLayoutToTopFab.vue";
// import TheLayoutBottomNavigation from "./the-layout-bottom-navigation.vue";
// import TheLayoutFooter from "./TheLayoutFooter.vue";

import Vue from "vue";

export default Vue.extend({
  name: "TheLayout",
  components: {
    TheLayoutDrawer,
    TheLayoutToolbar,
    TheContent,
    TheLayoutFab,
    TheLayoutToTopFab
    // TheLayoutBottomNavigation
    // TheLayoutFooter
  },
  data: () => ({})
});
</script>
