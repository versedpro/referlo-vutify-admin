<template>
  <v-sheet class="mx-12 mt-12">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{ $t("referal.productName") }}</v-list-item-title>
        <v-list-item-subtitle>{{ order.productName }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{ $t("referal.supplierName") }}</v-list-item-title>
        <v-list-item-subtitle>{{ order.supplierName }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-sheet>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "OrdersProductDetail",
  props: {
    order: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const item = ref(props.order);
    return {
      item
    };
  }
});
</script>
