<template>
  <v-card>
    <v-list flat suheader three-line>
      <v-list-item-group v-model="selected" active-class="pink--text">
        <template v-for="(item, index) in items">
          <!-- <v-list-item :key="item.orderNo" to="/follow-up/chat"> -->
          <v-list-item :key="item.orderNo" @click="handleListItemClick">
            <v-list-item-content>
              <v-list-item-title v-text="item.orderDate"></v-list-item-title>

              <v-list-item-subtitle
                class="text--primary"
                v-text="item.productName"
              ></v-list-item-subtitle>
              <v-list-item-subtitle v-text="item.supplierName"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text class="mb-0 red--text text-subtitle-1">
                {{ formatOrder(item.orderNo) }}
              </v-list-item-action-text>
              <!-- v-text="item.orderNo" -->
              <v-icon v-if="!active" color="grey lighten-1"> mdi-star-outline </v-icon>

              <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index < items.length" :key="index"></v-divider>
          <!-- <v-divider></v-divider> -->
        </template>
      </v-list-item-group>
    </v-list>
    <v-card-text>
      <orders-chat-dialog :show="showChatDialog" @on-close="showChatDialog = false">
      </orders-chat-dialog>
    </v-card-text>
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
    items: Array
  },

  setup() {
    const active = ref(false);
    const selected = ref(null);
    const showChatDialog = ref(false);

    function formatOrder(num: number) {
      return "#" + num;
    }

    function handleListItemClick() {
      showChatDialog.value = true;
    }

    return {
      active,
      selected,
      formatOrder,
      handleListItemClick,
      showChatDialog
    };
  }
});
</script>
