<template>
  <v-card tile class="mx-auto" height="auto">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>

    <v-sheet>
      <splitpanes class="default-theme">
        <pane size="30" min-size="30" max-size="30">
          <v-card class="mx-auto" tile>
            <v-list>
              <v-list-item-group v-model="selectedItem" color="gold" @change="handleChange">
                <v-list-item v-for="(item, i) in industries" :key="i" class="mb-2">
                  <v-list-item-content :class="{ 'pa-5': $vuetify.breakpoint.smAndUp }">
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </pane>
        <pane size="70">
          <v-item-group active-class="primary">
            <v-container>
              <v-row>
                <v-col v-for="(item, i) in products" :key="i" cols="12" md="6">
                  <v-card class="pa-2 d-flex justify-center">
                    <v-card-subtitle v-html="item.productName"></v-card-subtitle>
                  </v-card>
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
import { computed, defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import { Suppliers } from "@/demo/api/mock_supplier";
import { Industries } from "@/demo/api/mock_industry_list";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default defineComponent({
  name: "Product1",

  components: {
    Splitpanes,
    Pane
  },

  setup() {
    const title = "資訊中心";
    const suppliers = ref(Suppliers);

    const industries = ref(Industries);
    const selected = ref(null as number);

    const products = computed(() => {
      return selected.value > 0 ? Items.filter(item => selected.value === item.industry) : Items;
    });
    const selectedItem = null as number;

    const handleChange = s => {
      selected.value = industries.value[s].id;
    };

    return {
      title,
      industries,
      suppliers,
      selected,
      selectedItem,
      products,
      handleChange
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
</style>
