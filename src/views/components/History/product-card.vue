<template>
  <v-card>
    <v-card-actions>
      <v-card-title>{{ item.orderNo }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle>{{ item.orderDate }}</v-card-subtitle>
    </v-card-actions>

    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <v-col cols="3" class="pa-0">
          <v-list-item-action-text>{{ $t("orders.referredBy") }}</v-list-item-action-text>
        </v-col>
        <v-list-item-content class="align-end">
          {{ item.referredBy }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-col cols="3" class="pa-0">
          <v-list-item-action-text>{{ $t("orders.clientName") }}</v-list-item-action-text>
        </v-col>
        <v-list-item-content class="align-end">
          {{ item.clientName }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-col cols="3" class="pa-0">
          <v-list-item-action-text>{{ $t("orders.productName") }}</v-list-item-action-text>
        </v-col>
        <v-list-item-content>
          {{ item.productName }}
        </v-list-item-content>
        <!-- <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                  </v-list-item-action> -->
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
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard",

  props: {
    item: Object
  }

  // setup() {
  //   return {};
  // }
});
</script>
