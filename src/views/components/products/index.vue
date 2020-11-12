<template>
  <v-card class="mx-auto pa-0" max-width="800" height="100%" tile>
    <!-- Hot Deals -->
    <v-card class="ma-2">
      <v-card-title class="justify-center"> Hot Deals </v-card-title>
      <v-card-text> dfdsf </v-card-text>
    </v-card>
    <!-- Products group by industry -->
    <v-card class="ma-2">
      <v-card-title> ff </v-card-title>
      <v-card-text class="grey pa-4">
        <industry-panels :industries="industries"></industry-panels>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { industries as Industries } from "@/demo/api/mock_industry";

export default defineComponent({
  name: "Products",

  components: {
    IndustryPanels: () => import("./industry-panels.vue")
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
