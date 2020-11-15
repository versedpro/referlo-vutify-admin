<template>
  <v-navigation-drawer class="primary lighten-3" width="250" light>
    <v-list dense rounded>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "LeftMenu",

  props: {
    items: Object
  },

  setup() {
    const image = ref("https://cdn.vuetifyjs.com/images/cards/cooking.png");
    return { image };
  }
});
</script>

<style scoped>
.isMobile {
  padding: 0 16px !important;
}
.isMobileCard {
  padding: 2px 10px !important;
}
</style>
