<template>
  <v-card flat tile>
    <v-card-actions class="transparent" :class="{ isMobileCard: $vuetify.breakpoint.xsOnly }">
      <v-avatar class="mx-2" rounded>
        <img :src="item.avatar" alt="avatar" />
      </v-avatar>
      <v-card-title>{{ item.supplierName }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-medium amber--text text-h4">{{ item.points }}</v-card-title>
    </v-card-actions>

    <v-card-subtitle :class="{ isMobile: $vuetify.breakpoint.xsOnly }" class="font-weight-bold">
      <span class="mr-2">{{ $t("products.product") }}</span>
      <span>{{ item.productName }}</span>
    </v-card-subtitle>
    <v-card-text>
      {{ item.remarks }}
    </v-card-text>

    <v-card-actions :class="{ isMobileCard: $vuetify.breakpoint.xsOnly }">
      <v-btn color="ml-2 primary accent-4">
        {{ $t("products.orderNow") }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-card-subtitle :class="{ isMobile: $vuetify.breakpoint.xsOnly }" class="green--text">
        <span class="mr-2">{{ $t("products.validUntil") }}</span
        >{{ item.expiryDate }}
      </v-card-subtitle>
    </v-card-actions>

    <v-divider></v-divider>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard",

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
