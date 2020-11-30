<template>
  <v-card-text>
    <v-slide-group class="pa-0" mandatory show-arrows active-class="success">
      <v-slide-item
        class="ma-2"
        v-for="product in products"
        :key="product.name"
        style="cursor: pointer"
      >
        <v-alert
          class="pa-2 d-flex justify-center gold ma-0"
          border="left"
          @click="toggle(product)"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title :product="product" class="text-center">
                {{ product.productName }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center">
                {{ product.supplierName }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-alert>
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
  setup(_, { emit }) {
    const toggle = (item) => {
      emit("on-product-selection", item);
    };
    return {
      toggle
    };
  }
});
</script>
