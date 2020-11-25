<template>
  <v-fab-transition>
    <v-btn
      class="mb-15"
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="error"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "TheLayoutToTopFab",

  setup(_, { root }) {
    const fab = ref(false);

    function onScroll() {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || document.documentElement.offsetTop || 0;
      fab.value = top > 300;
    }

    function toTop() {
      root.$router.push({ hash: "" });
      root.$vuetify.goTo(0);
    }

    return {
      onScroll,
      toTop,
      fab
    };
  }
});
</script>
