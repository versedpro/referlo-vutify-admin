<template>
  <v-card class="pa-0" height="100%">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>
    <v-card-text class="grey pa-4">
      <v-expansion-panels inset>
        <v-expansion-panel v-for="(item, i) in industries" :key="i">
          <v-expansion-panel-header class="pa-0">
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon> mdi-flag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.industryName"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action class="my-1">
                  <v-list-item-subtitle class="font-weight-medium amber--text text-h4" style="line-height: 2rem;">
                    {{ item.points }}
                  </v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <template>
              <v-row>
                <v-col v-for="item in item.products" :key="item.productName" cols="12" class="pa-0">
                  <product-expansion :item="item"></product-expansion>
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { industries as Industries } from "@/demo/api/mock_industry";

export default defineComponent({
  name: "Product",
  components: {
    ProductExpansion: () => import("./product-expansion.vue")
  },

  setup() {
    const itemsPerPage = ref(4);
    const title = "資訊中心";
    const model = ref(null);
    const industries = ref(Industries);
    const selected = ref([] as Array<string>);

    const selection = ref([]);
    const isLoading = ref(false);
    const tree = ref([]);
    const types = ref([]);
    const selectionType = ref("leaf");

    const handleSelection = (s) => (selected.value = s);

    return {
      selectionType,
      selection,
      isLoading,
      tree,
      types,
      itemsPerPage,
      title,
      // items,
      industries,
      model,
      selected,
      handleSelection
    };
  }
});
</script>
