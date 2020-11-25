<template>
  <v-bottom-navigation
    v-if="$vuetify.breakpoint.smAndDown"
    :app="$vuetify.breakpoint.smAndDown"
    :value="value"
    color="gold"
    height="72"
    grow
    dark
    mandatory
  >
    <v-btn v-for="item in bottomRouter" :key="item.name" @click="navigateTo(item.path)">
      <span v-html="$t(item.title)"></span>
      <v-icon>{{ item.meta.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import bottomRouter from "@/router/modules/bottom.ts";

export default defineComponent({
  name: "TheBottomNavigation",

  components: {},
  setup(_, { root }) {
    const value = ref(0);
    const selection = ref([bottomRouter[0]]);

    function navigateTo(path: string) {
      root.$router.push(path);
    }

    return {
      value,
      bottomRouter,
      selection,
      navigateTo
    };
  }
});
</script>
