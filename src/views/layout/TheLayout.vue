<template>
  <div class="v-application--wrap">
    <the-layout-drawer />
    <the-layout-toolbar />
    <the-layout-content />
    <the-layout-fab />
    <the-layout-to-top-fab />
    <the-layout-footer />
  </div>
</template>

<script lang="ts">
import TheLayoutDrawer from "./TheLayoutDrawer.vue";
import TheLayoutToolbar from "./TheLayoutToolbar.vue";
import TheLayoutContent from "./TheLayoutContent.vue";
import TheLayoutFab from "./TheLayoutFab.vue";
import TheLayoutToTopFab from "./TheLayoutToTopFab.vue";
import TheLayoutFooter from "./TheLayoutFooter.vue";

import Vue from "vue";

export default Vue.extend({
  name: "TheLayout",
  components: {
    TheLayoutDrawer,
    TheLayoutToolbar,
    TheLayoutContent,
    TheLayoutFab,
    TheLayoutToTopFab,
    TheLayoutFooter
  },
  data: () => ({})
});
</script>
