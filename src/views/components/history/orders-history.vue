<template>
  <v-card>
    <v-list flat suheader three-line>
      <v-list-item-group v-model="selected" active-class="pink--text">
        <template v-for="(item, index) in items">
          <orders-chat-dialog :key="item.orderNo" :order="item" :tab="tab"></orders-chat-dialog>
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
    OrdersChatDialog: () => import("./orders-chat-dialog.vue")
  },

  props: {
    items: Array,
    tab: Number
  },

  setup() {
    const selected = ref(null);
    const showChatDialog = ref(false);

    function formatOrder(num: number) {
      return "#" + num;
    }

    function handleListItemClick() {
      showChatDialog.value = true;
    }

    return {
      selected,
      formatOrder,
      handleListItemClick,
      showChatDialog
    };
  }
});
</script>
