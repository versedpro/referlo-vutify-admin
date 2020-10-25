<template>
  <v-container fluid>
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12" md="6" lg="4" xl="4">
            <v-card>
              <v-card-actions>
                <v-card-title>{{ item.orderNo }}</v-card-title>
                <v-spacer></v-spacer>
                <v-card-subtitle>{{ item.orderDate }}</v-card-subtitle>
              </v-card-actions>

              <v-divider></v-divider>
              <v-list>
                <v-list-item>
                  <v-list-item-content class="ml-5">{{
                    $t("orders.referredBy")
                  }}</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.referredBy }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action-text>{{ $t("orders.clientName") }}</v-list-item-action-text>
                  <v-list-item-content class="align-end">
                    {{ item.clientName }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action-text>{{ $t("orders.productName") }}</v-list-item-action-text>
                  <v-list-item-content>
                    {{ item.productName }}
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>{{ $t("orders.status") }}</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.status }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn small color="blue-grey" to="/follow-up/chat" class="ma-2 white--text">
                  Follow Up
                  <v-icon right dark>
                    mdi-cloud-upload
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar class="mt-2" color="indigo" dark flat>
          <v-toolbar-title class="subheading">
            This is a footer
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_product_list";

export default defineComponent({
  name: "FollowUp",

  setup() {
    const itemsPerPage = ref(4);
    const items = ref(Items);

    return {
      itemsPerPage,
      items
    };
  }
});
</script>
