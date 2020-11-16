<template>
  <v-card class="mx-auto" flat tile>
    <v-list three-line class="pa-0">
      <template>
        <v-divider></v-divider>
        <v-list-item :key="item.supplierName">
          <v-list-item-avatar>
            <v-img :src="item.avatar" alt="avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.supplierName"></v-list-item-title>
            <v-list-item-subtitle class="font-weight-bold">
              <span class="mr-2">{{ $t("products.product") }}</span>
              <span>{{ item.productName }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="ma-1">
            <v-list-item-subtitle class="font-weight-medium amber--text text-h4">
              {{ item.points }}
            </v-list-item-subtitle>
            <v-list-item-action-text class="green--text">
              <span class="mr-2">{{ $t("products.validUntil") }}</span
              >{{ item.expiryDate }}
            </v-list-item-action-text>
            <v-btn
              x-small
              color="ml-2 primary accent-4"
              to="/follow-up/chat"
              class="ma-1 white--text"
            >
              {{ $t("products.orderNow") }}
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ProductMobile",

  props: {
    item: Object
  },

  setup() {
    const image = ref("https://cdn.vuetifyjs.com/images/cards/cooking.png");
    return { image };
  }
});
</script>

<style scoped>
.isMobile {
  padding: 0 16px !important;
}
.isMobileCard {
  padding: 2px 10px !important;
}
</style>
