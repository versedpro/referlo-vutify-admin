<template>
  <v-card class="mx-auto">
    <v-img
      :aspect-ratio="16 / 9"
      :src="item.image"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
    >
    </v-img>
    <v-card-actions>
      <v-avatar class="mx-5" color="red">
        <img src="/img/products/hkbn.jpg" alt="John" />
      </v-avatar>
      <v-card-title>{{ item.supplierName }}</v-card-title>
      <v-spacer></v-spacer>
      <p label class="font-weight-light headline orange--text">{{ item.points }}</p>
    </v-card-actions>

    <v-divider></v-divider>
    <v-card-text>
      {{ item.productName }}
    </v-card-text>
    <v-card-text>Valid Until: {{ item.orderDate }} </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard",

  props: {
    item: Object
  },

  setup() {
    const image = ref("https://cdn.vuetifyjs.com/images/cards/cooking.png");
    return { image };
  }
});
</script>
