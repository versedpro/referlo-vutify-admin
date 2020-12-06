<template>
  <v-card>
    <v-list flat suheader three-line>
      <v-list-item-group active-class="pink--text" @change="handleChange">
        <template v-for="(item, index) in items">
          <!-- <orders-chat-dialog :key="item.orderNo" :order="item" :tab="tab"></orders-chat-dialog> -->
          <v-list-item three-line v-if="item.status == tab" :key="item.orderno">
            <v-list-item-content>
              <v-list-item-title v-text="item.orderdate"></v-list-item-title>
              <v-list-item-title>Product Name</v-list-item-title>
              <v-list-item-subtitle v-text="item.productname"></v-list-item-subtitle>
              <v-list-item-title>Supplier Name</v-list-item-title>
              <v-list-item-subtitle v-text="item.suppliername"></v-list-item-subtitle>
              <v-list-item-title>Contact Person</v-list-item-title>
              <v-list-item-subtitle v-text="item.clientname"></v-list-item-subtitle>
              <v-list-item-title>Reffered By</v-list-item-title>
              <v-list-item-subtitle v-text="item.referredby"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text class="mb-0 red--text text-subtitle-1">
                {{ formatOrder(item.orderno) }}
              </v-list-item-action-text>
              <!-- v-text="item.orderNo" -->
              <v-icon v-if="!active" color="grey lighten-1"> mdi-star-outline </v-icon>
              <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
              <v-list-item-action-text
                v-if="item.status == 2"
                class="mb-0 gold--text text-subtitle-1"
              >
                {{ item.points }}
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "OrderHistory",

  components: {
    // OrdersChatDialog: () => import("./orders-chat-dialog.vue")
  },

  props: {
    items: Array,
    tab: Number
  },

  setup(props, { emit }) {
    // const selected = ref(null);
    console.log(props.items);
    const showChatDialog = ref(false);

    const active = ref(false);
    const tab = ref(props.tab);

    function formatOrder(num: number) {
      return "#" + num;
    }

    function handleListItemClick() {
      showChatDialog.value = true;
    }

    const handleChange = (selected) => {
      emit("on-selection", { selected, tab });
    };
    return {
      // selected,
      formatOrder,
      handleListItemClick,
      showChatDialog,
      handleChange,
      active
    };
  }
});
</script>
