<template>
  <v-navigation-drawer dark fixed app :value="navbarShow" width="250" @input="stateNavbarShow">
    <v-app-bar v-if="navbarLogo" :dense="toolbarDense" dark>
      <v-toolbar-title class="text-center">
        <v-avatar size="32px" tile>
          <img src="img/icons/android-icon-36x36.png" alt="VVA" />
        </v-avatar>
        <span>{{ $t("toolbar.appname") }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <the-layout-drawer-list :dense="navbarDense" :routes="permissionRoutes" icon-show />
  </v-navigation-drawer>
</template>

<script lang="ts">
import TheLayoutDrawerList from "./the-drawer-list.vue";
import { defineComponent, computed } from "@vue/composition-api";

export default defineComponent({
  name: "TheLayoutDrawer",
  components: {
    TheLayoutDrawerList
  },

  setup(_, { root }) {
    const permissionRoutes = computed(() => root.$store.getters.permissionRoutes);
    const navbarDense = computed(() => root.$store.getters.navbarDense);
    const navbarShow = computed(() => root.$store.getters.navbarShow);
    const navbarLogo = computed(() => root.$store.getters.navbarLogo);
    const toolbarDense = computed(() => root.$store.getters.toolbarDense);

    function stateNavbarShow(state: unknown) {
      this.$store.dispatch("NavbarState", { state });
    }

    return {
      permissionRoutes,
      navbarDense,
      navbarShow,
      navbarLogo,
      toolbarDense,
      stateNavbarShow
    };
  }
});
</script>
