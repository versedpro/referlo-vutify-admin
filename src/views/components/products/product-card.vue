<template>
  <v-alert class="pa-2 d-flex justify-center gold ma-0" border="left">
    <v-list-item two-line @click="handleClick">
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
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  setup(_, { emit }) {
    function handleClick() {
      emit("click");
    }

    return {
      handleClick
    };
  }
});
</script>
