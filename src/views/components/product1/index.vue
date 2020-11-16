<template>
  <v-card tile class="mx-auto" height="100%" color="transparent">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 gold--text">Products</h1>
    </v-card-title>

    <v-sheet height="100%">
      <splitpanes class="default-theme" style="height: 100%">
        <pane size="30" min-size="30" max-size="30" class="primary">
          <div>
            <v-alert border="bottom top" colored-border color="gold" class="pa-2 rounded-0" dense>
              Industries
            </v-alert>
          </div>
          <industry-list :industries="industries"></industry-list>
        </pane>
        <pane size="70">
          <div>
            <v-alert border="bottom top" colored-border color="gold" class="pa-2 rounded-0" dense>
              Products &amp; Suppliers</v-alert
            >
          </div>
          <v-item-group active-class="gold">
            <v-container d-md-flex>
              <v-col cols="12" md="6" class="pa-0">
                <v-col v-for="(item, i) in products" :key="i" class="pb-1 pa-0 pr-md-1">
                  <v-alert class="pa-2 d-flex justify-center gold ma-0" border="left">
                    <v-card-subtitle
                      class="primary--text"
                      v-html="item.productName"
                    ></v-card-subtitle>
                  </v-alert>
                </v-col>
              </v-col>
              <v-col cols="12" md="6" class="pa-0">
                <v-col v-for="(item, i) in products" :key="i" class="pb-1 pa-0">
                  <v-alert class="pa-2 d-flex justify-center gold ma-0" border="left">
                    <v-card-subtitle
                      class="primary--text"
                      v-html="item.supplierName"
                    ></v-card-subtitle>
                  </v-alert>
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

import { computed, defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import { industries as Industries } from "./json-data";

// *** components
import { Splitpanes, Pane } from "splitpanes";
import IndustryList from "./industry-list.vue";

export default defineComponent({
  name: "Product1",

  components: {
    Splitpanes,
    Pane,
    IndustryList
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
</style>
