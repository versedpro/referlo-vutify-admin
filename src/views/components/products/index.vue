<template>
  <v-card tile class="mx-auto" height="100%">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>

    <supplier-slider :suppliers="suppliers" @onSelection="handleSelection"></supplier-slider>

    <v-card-text class="pa-0">
      <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              :class="{ 'pa-0': $vuetify.breakpoint.xsOnly }"
            >
              <product-card v-if="!$vuetify.breakpoint.xsOnly" :item="item"></product-card>
              <product-mobile v-else :item="item"></product-mobile>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import { Suppliers } from "@/demo/api/mock_supplier";

export default defineComponent({
  name: "History",

  components: {
    ProductCard: () => import("./product-card.vue"),
    ProductMobile: () => import("./product-mobile.vue"),
    SupplierSlider: () => import("./supplier_slider.vue")
  },

  setup() {
    const itemsPerPage = ref(4);
    const title = "資訊中心";
    const model = ref(null);
    const suppliers = ref(Suppliers);
    const selected = ref([] as Array<string>);

    const items = computed(() => {
      return selected.value.length > 0
        ? Items.filter(item => selected.value.some(k => k === item.supplierName))
        : Items;
    });

    const handleSelection = s => (selected.value = s);

    return {
      itemsPerPage,
      title,
      items,
      suppliers,
      model,
      selected,
      handleSelection
    };
  }
});
</script>
