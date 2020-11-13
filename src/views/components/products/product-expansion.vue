<template>
  <v-card class="mx-auto" flat tile>
    <v-divider></v-divider>
    <v-list one-line class="pa-0">
      <template>
        <v-list-item :key="item.productName">
          <v-list-item-content>
            <v-list-item-title v-html="item.productName"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action class="ma-1">
            <v-list-item-subtitle class="font-weight-medium amber--text text--lighten-2 text-h4">
              {{ item.points }}
            </v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ProductExpansion",

  props: {
    item: Object
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
