<template>
  <v-sheet class="mx-12 mt-12">
    <v-text-field
      v-model="item.productName"
      :label="$t('referal.productName')"
      disabled
    ></v-text-field>
    <v-text-field
      v-model="item.supplierName"
      :label="$t('referal.supplierName')"
      disabled
    ></v-text-field>
  </v-sheet>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "OrdersProductDetail",
  props: {
    order: Object
  },
  setup(props) {
    const item = ref(props.order);
    return {
      item
    };
  }
});
</script>
