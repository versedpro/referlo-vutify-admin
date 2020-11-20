<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item three-line v-if="order.status == tab" v-bind="attrs" v-on="on">
        <v-list-item-content>
          <v-list-item-title v-text="order.orderDate"></v-list-item-title>

          <v-list-item-subtitle
            class="text--primary"
            v-text="order.productName"
          ></v-list-item-subtitle>
          <v-list-item-subtitle v-text="order.supplierName"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text class="mb-0 red--text text-subtitle-1">
            {{ formatOrder(order.orderNo) }}
          </v-list-item-action-text>
          <!-- v-text="order.orderNo" -->
          <v-icon v-if="!active" color="grey lighten-1"> mdi-star-outline </v-icon>

          <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
        </v-list-item-action>
      </v-list-item>
    </template>
    <v-card class="mx-auto pa-0" max-width="800">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="primary justify-center display-1 text-h5 white--text">
          {{ title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Cancel</v-btn>
        </v-toolbar-items>
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
  </v-dialog>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_chats";
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "OrdersChatDialog",

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
  setup() {
    const active = ref("");

    const dialog = ref(false as boolean);
    const items = ref(Items);

    const title = "訂單詳情";

    function formatOrder(num: number) {
      return "#" + num;
    }

    return {
      active,
      items,
      title,
      dialog,
      formatOrder
    };
  }
});
</script>
