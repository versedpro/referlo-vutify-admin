<template>
  <v-card>
    <v-window v-model="window" class="elevation-1" vertical>
      <v-window-item>
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 gold--text">Products</h1>
        </v-card-title>

        <products-slider :products="hotProducts"></products-slider>

        <v-card tile class="mx-auto" height="100%" color="transparent">
          <v-sheet height="100%">
            <splitpanes class="default-theme" style="height: 100%">
              <pane size="30" min-size="30" max-size="30" class="primary">
                <industry-list
                  :industries="industries"
                  @onSelection="handleSelection"
                ></industry-list>
              </pane>
              <pane size="70">
                <v-item-group active-class="gold">
                  <v-container d-md-flex class="pt-0">
                    <v-col
                      cols="12"
                      md="6"
                      class="pt-0"
                      v-for="(item, i) in productsIndustries"
                      :key="i"
                    >
                      <v-col v-for="product in item.products" :key="product.productName" cols="12" class="">
                        <product-card :product="product" @click="onProductDetails(product)"></product-card>
                      </v-col>
                    </v-col>
                  </v-container>
                </v-item-group>
              </pane>
            </splitpanes>
          </v-sheet>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card flat>
          <product-details :item="product" @on-back-button="onBackButton"></product-details>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import "splitpanes/dist/splitpanes.css";

import { computed, defineComponent, ref } from "@vue/composition-api";
import { industries as Industries } from "./json-data";

// *** components
import { Splitpanes, Pane } from "splitpanes";

export default defineComponent({
  name: "Product",

  components: {
    Splitpanes,
    Pane,
    IndustryList: () => import("./industry-list.vue"),
    ProductDetails: () => import("./product-details.vue"),
    ProductsSlider: () => import("./products-slider.vue"),
    ProductCard: () => import("./product-card.vue")
  },

  setup() {
    const title = "資訊中心";

    const industries = ref(Industries);
    const selected = ref([] as Array<number>);
    selected.value = Industries.map((item) => item.industryId);

    const productsIndustries = computed(() => {
      return selected.value.length > 0
        ? Industries.filter((item) => selected.value.some((k) => k === item.industryId))
        : [];
    });

    const hotProducts = computed(() => {
      return industries.value.reduce((products, industry) => {
        return products.concat(industry.products || []);
      }, []);
    });

    const tab = ref(0);
    const items = ref(["Hot Deal", "All Products"]);

    const text = ref("Lorem ipsum dolor sit amet, consect");

    const handleSelection = (s) => {
      selected.value = s;
    };

    function onProductDetails(item) {
      product.value = item;
      window.value = 1;
    }

    const product = ref({});

    function onBackButton() {
      window.value = 0;
    }

    const window = ref(0);

    return {
      title,
      industries,
      selected,
      productsIndustries,
      tab,
      items,
      text,
      handleSelection,
      product,
      window,
      onProductDetails,
      onBackButton,
      hotProducts
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
