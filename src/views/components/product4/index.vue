<template>
  <v-card tile class="mx-auto" color="purple" height="100%">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title class="ml-5"> {{ $t("products.title") }}</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs grow v-model="tab" background-color="gold" light color="primary">
          <v-tab>{{ $t("products.hotProducts") }}</v-tab>
          <v-tab>{{ $t("products.allProducts") }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab" class="yellow">
      <v-tab-item class="yellow">
        <product-mobile></product-mobile>
      </v-tab-item>
      <v-tab-item>
        <!-- <points-table :items="level1"></points-table> -->
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import "splitpanes/dist/splitpanes.css";

import { computed, defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import { industries as Industries } from "./json-data";

// *** components
// import { Splitpanes, Pane } from "splitpanes";
// import IndustryList from "./industry-list.vue";
import ProductMobile from "./product-card.vue";

export default defineComponent({
  name: "Product4",

  components: {
    ProductMobile
  },

  setup() {
    const title = "資訊中心";

    const industries = ref(Industries);
    const selected = ref(null as number);

    const products = computed(() => {
      return selected.value > 0 ? Items.filter((item) => selected.value === item.industry) : Items;
    });
    const selectedItem = null as number;

    const handleChange = (s) => {
      selected.value = industries.value[s].industryId;
    };

    const tab = ref(0);
    const items = ref(["Hot Deal", "All Products"]);

    const text = ref("Lorem ipsum dolor sit amet, consect");

    return {
      title,
      industries,
      selected,
      selectedItem,
      products,
      handleChange,
      tab,
      items,
      text
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

.v-window__container {
  min-height: calc(100vh - 152px);
}
</style>
