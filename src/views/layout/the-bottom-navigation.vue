<template>
  <v-bottom-navigation
    v-if="$vuetify.breakpoint.smAndDown"
    :app="$vuetify.breakpoint.smAndDown"
    :value="value"
    color="teal"
    grow
  >
    <v-btn>
      <span>優惠</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>兌換</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>我的ID</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn>
      <span>我的ID</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn>
      <span>我的ID</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "TheBottomNavigation",
  components: {},

  setup() {
    const value = ref(1);

    return { value };
  }
});
</script>
