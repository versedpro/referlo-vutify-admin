<template>
  <v-bottom-navigation
    v-if="$vuetify.breakpoint.smAndDown"
    :app="$vuetify.breakpoint.smAndDown"
    v-model="value"
    color="gold"
    height="72"
    grow
    dark
    mandatory
  >
    <v-btn
      :value="item.path"
      v-for="item in bottomRouter"
      :key="item.name"
      @click="navigateTo(item.path)"
    >
      <span v-html="$t(item.title)"></span>
      <v-icon>{{ item.meta.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";
import bottomRouter from "@/router/modules/bottom.ts";

export default defineComponent({
  name: "TheBottomNavigation",

  components: {},
  setup(_, { root }) {
    const value = ref("");
    const selection = ref([bottomRouter[0]]);

    watch(
      () => root.$route,
      () => {
        value.value = root.$route.path;
      }
    );
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
