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
    <v-btn v-for="item in bottomnavdata" :key="item.id" @click="navigateTo(item.route)">
      <span v-html="$t(item.label)"></span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
// import { navItems } from "@/api/bottom-navigation";

const navItems = [
  {
    id: "Home",
    label: "bottomNavigation.home",
    icon: "mdi-home",
    route: "/home"
  },
  {
    id: "Products",
    label: "bottomNavigation.products",
    icon: "mdi-tag",
    route: "/product1"
  },
  {
    id: "History",
    label: "bottomNavigation.history",
    icon: "mdi-database",
    route: "/history"
  },
  {
    id: "Points",
    label: "bottomNavigation.points",
    icon: "mdi-currency-usd-circle",
    route: "/points"
  },
  {
    id: "Account",
    label: "bottomNavigation.account",
    icon: "mdi-account",
    route: "/profile"
  }
];

export default defineComponent({
  name: "TheBottomNavigation",

  components: {},
  setup() {
    const value = ref(0);
    const bottomnavdata = ref(navItems);
    const selection = ref([bottomnavdata[0]]);

    function navigateTo(path: string) {
      this.$router.push(path);
    }

    return {
      value,
      bottomnavdata,
      selection,
      navigateTo
    };
  }
});
</script>
