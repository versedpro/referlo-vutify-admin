<template>
  <v-card tile class="mx-auto" height="100%">
    <v-toolbar dark color="primary">
      <v-btn icon @click="prev">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title class="primary justify-center display-1 text-h5 white--text">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs grow dark color="gold">
      <v-tab> Product Detail </v-tab>
      <v-tab> Orders Chat </v-tab>
      <v-tab-item>
        <orders-product-detail :order="order"></orders-product-detail>
      </v-tab-item>
      <v-tab-item>
        <orders-chat :items="items"></orders-chat>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_chats";
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "OrdersChatDetail",

  components: {
    OrdersChat: () => import("./orders-chat.vue"),
    OrdersProductDetail: () => import("./orders-product-detail.vue")
  },
  props: {
    order: Object,
    tab: Number,
    show: Boolean,
    value: Boolean
  },
  setup(props, { emit }) {
    const active = ref("");

    const dialog = ref(true as boolean);
    const items = ref(Items);

    const title = "訂單詳情";

    function formatOrder(num: number) {
      return "#" + num;
    }

    const prev = () => emit("click");

    return {
      active,
      items,
      title,
      dialog,
      formatOrder,
      prev
    };
  }
});
</script>
