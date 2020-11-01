<template>
  <v-card class="mx-auto">
    <v-img
      v-if="item.image != null"
      :aspect-ratio="16 / 9"
      :src="item.image"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
    >
    </v-img>
    <v-card-actions class="blue darken-3">
      <v-avatar class="mx-2" rounded>
        <img :src="item.avatar" alt="avatar" />
        <!-- <img src="/img/products/hkbn.jpg" alt="John" /> -->
      </v-avatar>
      <v-card-title>{{ item.supplierName }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-medium amber--text text-h4">{{ item.points }}</v-card-title>
    </v-card-actions>

    <v-card-subtitle class="font-weight-bold">
      <span class="mr-2">{{ $t("products.product") }}</span>
      <span>{{ item.productName }}</span>
    </v-card-subtitle>
    <v-card-text>
      {{ item.remarks }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="ml-2 primary accent-4">
        {{ $t("products.orderNow") }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-card-subtitle class="green--text">
        <span class="mr-2">{{ $t("products.validUntil") }}</span
        >{{ item.expiryDate }}
      </v-card-subtitle>
    </v-card-actions>
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
