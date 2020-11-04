<template>
  <v-bottom-navigation
    v-if="$vuetify.breakpoint.smAndDown"
    :app="$vuetify.breakpoint.smAndDown"
    :value="value"
    color="primary"
    grow
  >
    <!-- :app="$vuetify.breakpoint.smAndDown" -->
    <!-- <v-bottom-navigation app v-model="value" color="primary" grow shift> -->
    <!-- <v-btn v-for="item in bottomnavdata" :key="item.iconText" :to="item.path"> -->
    <v-btn v-for="item in bottomnavdata" :key="item.iconText" @click="navigateTo(item.path)">
      <span>{{ $t(item.label) }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { bottomNavData } from "@/demo/api/mock_bottom_nav";
// import route from "@/locale/zh_TW/route";

export default defineComponent({
  name: "TheBottomNavigation",
  components: {},
  setup() {
    const value = ref(1);
    const bottomnavdata = ref(bottomNavData);
    const selection = ref([bottomnavdata[0]]);

    function navigateTo(path: string) {
      this.$router.push(path);
    }

    // const navigateTo = (path: string) => {
    //   router.push(path);
    // };

    return {
      value,
      bottomnavdata,
      selection,
      navigateTo
    };
  }
});
</script>
