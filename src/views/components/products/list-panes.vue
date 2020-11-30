<template>
  <v-card flat class="mx-auto" color="transparent">
    <v-sheet height="100%">
      <splitpanes class="default-theme" style="100%">
        <pane
          size="30"
          min-size="30"
          max-size="30"
          class="primary py-1"
          :style="{ height: $vuetify.breakpoint.smAndDown ? '70vh' : '100%' }"
        >
          <industry-list :industries="industries" @onSelection="handleSelection"></industry-list>
        </pane>
        <pane size="70">
          <v-item-group active-class="gold">
            <v-container d-md-flex class="py-0">
              <v-row>
                <v-col
                  v-for="product in productsIndustries[0].products"
                  :key="product.productName"
                  cols="12"
                  md="6"
                >
                  <product-card
                    :product="product"
                    @click="onProductDetails(product)"
                  ></product-card>
                </v-col>
              </v-row>
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
<style>
.splitpanes__splitter {
  background-color: #cccccc !important;
  width: 4px !important;
}
.splitpanes__splitter::before {
  width: 0 !important;
  margin: 0 !important;
}
.splitpanes__splitter::after {
  margin: 0 !important;
  width: 0 !important;
}
.splitpanes__pane {
  background-color: #fff !important;
}
.default-theme {
  border-top: 2px solid #001e2f !important;
}
.v-card.transparent {
  height: calc(100vh - 240px);
}
</style>
