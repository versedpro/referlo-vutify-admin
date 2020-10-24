<template>
  <v-container fluid>
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
      <!-- <template v-slot:header>
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>This is a header</v-toolbar-title>
        </v-toolbar>
      </template> -->

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12" md="6" lg="4" xl="4">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>
              <v-list>
                <v-list-item>
                  <v-list-item-content>{{ $t("orders.referredBy") }}</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.referredBy }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>{{ $t("orders.clientName") }}</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.fat }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>{{ $t("orders.productName") }}</v-list-item-content>
                  <v-list-item-content>
                    {{ item.carbs }}
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Protein:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.protein }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
