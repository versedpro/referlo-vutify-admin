<template>
  <v-card>
    <v-col cols="12" class="pt-0" v-for="item in industries" :key="item">
      <v-col v-for="product in item.products" :key="product" cols="12" class="">
        <v-img :src="product.src" :aspect-ratio="1.91 / 1" position="top center"></v-img>
        <v-card-text class="pa-0 mb-6 px-4 primary--text">
          <v-list two-line class="pa-0">
            <v-list-item class="pa-0">
              <v-list-item-content class="pa-0">
                <v-list-item-title v-text="product.productName"></v-list-item-title>
                <v-list-item-subtitle v-text="product.supplierName"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-spacer></v-spacer>
                <v-list-item-action-text v-text="productPoints"></v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-divider class="mb-4 mt-2"></v-divider>
          </v-list>
          <p v-html="product.productDescription"></p>
        </v-card-text>
        <v-sheet class="mx-4 mt-6">
          <v-expansion-panels focusable class="pb-4">
            <v-expansion-panel>
              <v-alert
                border="bottom"
                color="gold"
                colored-border
                dense
                class="pa-4 ma-0 primary rounded-b-0"
              >
                <v-expansion-panel-header hide-actions disable-icon-rotate class="pa-0"
                  ><v-row class="pa-0 ma-0 d-flex justify-space-between">
                    <v-icon class="gold--text">mdi-hand-pointing-down</v-icon>
                    <p class="ma-0 gold--text">Order Now</p>
                  </v-row>
                </v-expansion-panel-header>
              </v-alert>
              <v-expansion-panel-content>
                <v-form class="mx-12 pb-8" ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :label="$t('referal.clientName')"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('referal.email')"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    :label="$t('referal.phone')"
                    required
                  ></v-text-field>
                  <v-btn :disabled="!valid" color="gold" class="mr-4" @click="submit"
                    ><v-icon left> mdi-check-circle </v-icon>Submit</v-btn
                  >
                  <v-btn color="primary" class="mr-4" @click="reset"
                    ><v-icon left> mdi-reload</v-icon>Reset
                  </v-btn>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-sheet>
      </v-col>
    </v-col>
  </v-card>
</template>

<script lang="ts">
import "splitpanes/dist/splitpanes.css";

import { computed, defineComponent, ref } from "@vue/composition-api";
import { industries as Industries } from "./json-data";

// *** components
// import { Splitpanes, Pane } from "splitpanes";
// import IndustryList from "./industry-list.vue";
// import ProductSupplierWindow from "./product-supplier-window.vue";
// import OrdersDialog from "./orders-dialog.vue";

export default defineComponent({
  name: "Product1",

  props: {
    product: Object
  },

  // components: {
  //   Splitpanes,
  //   Pane,
  //   IndustryList,
  //   ProductSupplierWindow
  //   // OrdersDialog: () => import("./orders-dialog.vue")
  // },

  setup() {
    const title = "資訊中心";
    // const window = ref(0);
    const industries = ref(Industries);
    const selected = ref([] as Array<number>);
    selected.value = Industries.map((item) => item.industryId);

    const productsIndustries = computed(() => {
      return selected.value.length > 0
        ? Industries.filter((item) => selected.value.some((k) => k === item.industryId))
        : [];
    });

    const tab = ref(0);
    const items = ref(["Hot Deal", "All Products"]);

    const text = ref("Lorem ipsum dolor sit amet, consect");

    const handleSelection = (s) => {
      selected.value = s;
      window.value - 1;
    };
    const window = ref(1);

    // function toDetail() {
    //   this.$router.push("/follow-up/chat");
    // }
    //  function next() {
    //     if (window.value == 0) {
    //       window.value = 1;
    //     } else {
    //       window.value = 0;
    //     }
    //     alert(window.value);
    //   }

    return {
      title,
      industries,
      selected,
      productsIndustries,
      tab,
      items,
      text,
      handleSelection,
      // toDetail,
      window
    };
  }
});
</script>
<style>
.splitpanes__splitter {
  background-color: #cccccc !important;
  width: 4px !important;
}
.splitpanes__pane {
  background-color: #fff !important;
}

/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
