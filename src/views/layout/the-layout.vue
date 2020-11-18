<template>
  <div class="v-application--wrap">
    <the-drawer />
    <the-toolbar />
    <the-content />
    <the-layout-to-top-fab />
    <the-bottom-navigation />
  </div>
</template>

<script lang="ts">
import TheDrawer from "./the-drawer.vue";
import TheToolbar from "./the-toolbar.vue";
import TheContent from "./the-content.vue";
import TheLayoutToTopFab from "./the-layout-to-top-fab.vue";
import TheBottomNavigation from "./the-bottom-navigation.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TheLayout",

  components: {
    TheDrawer,
    TheToolbar,
    TheContent,
    TheLayoutToTopFab,
    TheBottomNavigation
  }
});
</script>
