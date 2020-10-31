<template>
  <v-card tile class="mx-auto" height="100%">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>

    <supplier-slider :suppliers="suppliers"></supplier-slider>

    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
      <template v-slot:default="props">
        <v-row class="mx-2">
          <v-col v-for="item in props.items" :key="item.name" cols="12">
            <product-card :item="item"></product-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import ProductCard from "./product-card.vue";
import SupplierSlider from "./supplier_slider.vue";
import { Suppliers } from "@/demo/api/mock_supplier";

export default defineComponent({
  name: "History",
  model: null,

  components: {
    ProductCard,
    SupplierSlider
  },

  setup() {
    const itemsPerPage = ref(4);
    const title = "資訊中心";
    const model = ref(null);
    const items = ref(Items);
    const suppliers = ref(Suppliers);

    return {
      itemsPerPage,
      title,
      items,
      suppliers,
      model
    };
  }
});
</script>
