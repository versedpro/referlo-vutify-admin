<template>
  <v-card-text>
    <v-slide-group class="pa-0" mandatory show-arrows>
      <v-slide-item class="ma-2" v-for="product in products" :key="product.name">
        <product-card :product="product"></product-card>
      </v-slide-item>
    </v-slide-group>
  </v-card-text>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ProductsSlider",
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductCard: () => import("./product-card.vue")
  }
});
</script>
