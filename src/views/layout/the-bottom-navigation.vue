<template>
  <v-bottom-navigation
    v-if="$vuetify.breakpoint.smAndDown"
    :app="$vuetify.breakpoint.smAndDown"
    :value="value"
    color="teal"
    grow
  >
    <v-btn v-for="item in bottomnavdata" :key="item.iconText" :to="item.path">
      <span>{{ $t(item.label) }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { bottomNavData } from "@/demo/api/mock_bottom_nav";

export default defineComponent({
  name: "TheBottomNavigation",
  components: {},
  setup() {
    const value = ref(1);
    const bottomnavdata = ref(bottomNavData);
    const selection = ref([bottomnavdata[0]]);

    return {
      value,
      bottomnavdata,
      selection
    };
  }
});
</script>
