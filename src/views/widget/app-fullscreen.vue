<template>
  <v-btn icon @click="toggleFullScreen">
    <v-icon>{{ toggleFullScreenIcon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { toggleFullScreen } from "@/utils";

export default defineComponent({
  name: "AppFullScreen",

  setup(_, { root }) {
    const fullscreenShow = computed(() => root.$store.getters.fullscreenShow);
    const toggleFullScreenIcon = computed(() =>
      fullscreenShow ? "mdi-fullscreen-exit" : "mdi-fullscreen"
    );

    return {
      fullscreenShow,
      toggleFullScreenIcon,
      toggleFullScreen
    };
  }
});
</script>
