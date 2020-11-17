<template>
  <v-card tile class="mx-auto" color="purple" height="100%">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title class="ml-5"> {{ $t("products.title") }}</v-toolbar-title>

      <!-- <template v-slot:extension>
        <v-tabs grow v-model="tab" background-color="gold" light color="primary">
          <v-tab>{{ $t("products.hotProducts") }}</v-tab>
          <v-tab>{{ $t("products.allProducts") }}</v-tab>
        </v-tabs>
      </template> -->
    </v-toolbar>

    <!-- The carousel -->
    <!-- <v-sheet class="mx-auto" elevation="8" max-width="800"> -->
    <v-card-text>
      <v-slide-group v-model="model" class="pa-0" mandatory show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="mx-2"
            height="80"
            width="150"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-card-text>
    <!-- </v-sheet> -->

    <product-mobile></product-mobile>
    <!-- <v-tabs-items v-model="tab" class="yellow">
      <v-tab-item class="yellow">
        <product-mobile></product-mobile>
      </v-tab-item>
      <v-tab-item>
      </v-tab-item>
    </v-tabs-items> -->
  </v-card>
</template>

<script lang="ts">
import "splitpanes/dist/splitpanes.css";

import { computed, defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import { ads, industries as Industries } from "./json-data";

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
    const model = ref(null);
    return {
      ads,
      title,
      industries,
      selected,
      selectedItem,
      products,
      handleChange,
      tab,
      items,
      text,
      model
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
