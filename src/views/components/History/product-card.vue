<template>
   <v-card
   class="mx-auto"
    max-width="400"
   >
    <v-img
      :aspect-ratio="16 / 9" :src="item.image"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
    >
    </v-img>
    <v-card-actions class="pa-4">
      <v-avatar color="red">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-card-text>
      <v-card-title>{{ item.clientName}}</v-card-title>
      <v-card-subtitle>{{ item.orderDate }}</v-card-subtitle>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-chip label class="pa-2"  
      flat
      color="orange lighten-2">
        Label
      </v-chip>
    </v-card-actions>
    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <v-col cols="3" class="pa-0">
          <v-list-item-action-text>{{ $t("orders.productName") }}</v-list-item-action-text>
        </v-col>
        <v-list-item-content>
          {{ item.productName }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-col cols="3" class="pa-0">
          <v-list-item-action-text>{{ $t("orders.status") }}</v-list-item-action-text>
        </v-col>
        <v-list-item-content class="align-end">
          {{ item.status }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
