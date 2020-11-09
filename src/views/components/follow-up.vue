<template>
  <v-card class="mx-auto pa-0" max-width="800" height="100%" tile>
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>
    <v-container v-if="!$vuetify.breakpoint.xsOnly" fluid>
      <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
        <template v-slot:default="props">
          <v-row>
            <!-- <v-col v-for="item in props.items" :key="item.name" cols="12" md="6" lg="4" xl="4"> -->
            <v-col v-for="item in props.items" :key="item.name" cols="12">
              <v-card>
                <v-card-actions>
                  <v-card-title class="pa-0">{{ item.orderNo }}</v-card-title>
                  <v-spacer></v-spacer>
                  <v-card-subtitle class="pa-0">{{ item.orderDate }}</v-card-subtitle>
                </v-card-actions>

                <v-divider></v-divider>
                <v-list>
                  <v-list-item>
                    <v-col cols="3" class="pa-0">
                      <v-list-item-action-text>{{
                        $t("orders.referredBy")
                      }}</v-list-item-action-text>
                    </v-col>
                    <v-list-item-content class="align-end">
                      {{ item.referredBy }}
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-col cols="3" class="pa-0">
                      <v-list-item-action-text>{{
                        $t("orders.clientName")
                      }}</v-list-item-action-text>
                    </v-col>
                    <v-list-item-content class="align-end">
                      {{ item.clientName }}
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-col cols="3" class="pa-0">
                      <v-list-item-action-text>{{
                        $t("orders.productName")
                      }}</v-list-item-action-text>
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
      </v-data-iterator>
    </v-container>
    <v-list v-else two-line>
      <v-list-item-group multiple>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.orderNo" class="pa-1">
            <template>
              <v-list-item-avatar class="me-0 my-0">
                <v-list-item-title v-text="item.orderNo"></v-list-item-title>
              </v-list-item-avatar>
              <v-list-item-content class="display-inline pa-0">
                <v-row>
                  <v-col cols="7" class="pa-1">
                    <v-list-item-action-text class="d-inline">
                      {{ $t("orders.referredBy") }}:
                    </v-list-item-action-text>
                    <v-list-item-subtitle
                      class="text--primary pa-0 d-inline"
                      v-text="item.referredBy"
                    ></v-list-item-subtitle>
                  </v-col>
                  <v-col cols="5" class="pa-1">
                    <v-list-item-action-text class="d-inline">
                      {{ $t("orders.clientName") }}:
                    </v-list-item-action-text>
                    <v-list-item-subtitle
                      class="text--primary pa-0 d-inline"
                      v-text="item.clientName"
                    ></v-list-item-subtitle>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="7" class="pa-1">
                    <v-list-item-action-text class="d-inline">
                      {{ $t("orders.productName") }}:
                    </v-list-item-action-text>
                    <v-list-item-subtitle
                      class="text--primary pa-0 d-inline"
                      v-text="item.productName"
                    ></v-list-item-subtitle>
                  </v-col>
                  <v-col cols="5" class="pa-1">
                    <v-list-item-action-text class="d-inline">
                      {{ $t("orders.status") }}:
                    </v-list-item-action-text>
                    <v-list-item-subtitle
                      class="text--primary pa-0 d-inline"
                      v-text="item.status"
                    ></v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-list-item-content>

              <v-list-item-action class="ma-0">
                <v-list-item-action-text v-text="item.orderDate"></v-list-item-action-text>
                <v-btn x-small color="blue-grey" to="/follow-up/chat" class="ma-1 white--text">
                  <v-icon center dark>
                    mdi-cloud-upload
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_product_list";

export default defineComponent({
  name: "FollowUp",

  setup() {
    const itemsPerPage = ref(4);
    const items = ref(Items);
    const title = "過往記錄";

    return {
      itemsPerPage,
      title,
      items
    };
  }
});
</script>

<style scoped>
.display-inline {
  display: inline !important;
}
</style>
