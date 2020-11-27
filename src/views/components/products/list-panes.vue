<template>
  <v-card tile class="mx-auto" height="100%" color="transparent">
    <v-sheet height="100%">
      <splitpanes class="default-theme" style="height: 100%">
        <pane size="30" min-size="30" max-size="30" class="primary">
          <industry-list :industries="industries" @onSelection="handleSelection"></industry-list>
        </pane>
        <pane size="70">
          <v-item-group active-class="gold">
            <v-container d-md-flex class="pt-0">
              <v-col cols="12" md="6" class="pt-0" v-for="(item, i) in productsIndustries" :key="i">
                <v-col
                  v-for="product in item.products"
                  :key="product.productName"
                  cols="12"
                  class=""
                >
                  <product-card
                    :product="product"
                    @click="onProductDetails(product)"
                  ></product-card>
                </v-col>
              </v-col>
            </v-container>
          </v-item-group>
        </pane>
      </splitpanes>
    </v-sheet>
  </v-card>
</template>
<script lang="ts">
import "splitpanes/dist/splitpanes.css";
// *** components
import { Splitpanes, Pane } from "splitpanes";
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "ListPanes",
  components: {
    Splitpanes,
    Pane,
    IndustryList: () => import("./industry-list.vue"),
    ProductCard: () => import("./product-card.vue")
  },
  props: {
    industries: {
      type: Array,
      default: () => []
    },
    productsIndustries: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { emit }) {
    const handleSelection = (s) => {
      emit("on-industry-selection", s);
    };
    const onProductDetails = (item) => {
      emit("on-product-selection", item);
    };

    return {
      handleSelection,
      onProductDetails
    };
  }
});
</script>
