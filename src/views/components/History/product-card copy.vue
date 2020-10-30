<template>
  <v-card>
    <v-img :aspect-ratio="16 / 9" :src="item.image"></v-img>

    <v-card-actions>
      <v-avatar class="mx-5" color="red">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-card-title>{{ item.supplierName }}</v-card-title>
      <v-spacer></v-spacer>
      <v-chip large class="ma-2" label>
        Label
      </v-chip>
    </v-card-actions>

    <v-divider></v-divider>
    <v-card-text>
      {{ item.productName }}
    </v-card-text>
    <v-card-text>Effective Date: {{ item.orderDate }} </v-card-text>
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
