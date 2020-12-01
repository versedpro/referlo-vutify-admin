<template>
  <v-card flat tile>
    <v-window v-model="window" class="elevation-1" vertical>
      <v-window-item>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="ml-5"> {{ $t("products.title") }}</v-toolbar-title>
        </v-toolbar>

        <products-slider
          :products="hotProducts"
          @on-product-selection="onProductDetails"
        ></products-slider>

        <list-panes
          :industries="industries"
          :productsIndustries="productsIndustries"
          @on-industry-selection="handleSelection"
          @on-product-selection="onProductDetails"
        ></list-panes>
      </v-window-item>
      <v-window-item>
        <v-card flat>
          <product-details :item="product" @on-back-button="onBackButton"></product-details>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";
import { ApiService } from "@/services/apiService";
import {Industry} from "@/types/index";

export default defineComponent({
  name: "Product",

  components: {
    ProductDetails: () => import("./product-details.vue"),
    ProductsSlider: () => import("./products-slider.vue"),
    ListPanes: () => import("./list-panes.vue")
  },

  setup() {
    const title = "資訊中心";
    const apiService = new ApiService();

    const selected = ref(0);
    const industries = ref([] as Industry[]);
    
    const getIndustries = async (): Promise<void> => {
      const response = await apiService.getIndustries();
      industries.value = response;
      selected.value = response[0].industryId;
    };
    getIndustries();

    const productsIndustries = computed(() => {
      return industries.value.filter((item) => item.industryId === selected.value);
    });

    const hotProducts = computed(() => {
      return industries.value.reduce((products, industry) => {
        return products.concat(industry.products || []);
      }, []);
    });

    const tab = ref(0);
    const items = ref(["Hot Deal", "All Products"]);

    const text = ref("Lorem ipsum dolor sit amet, consect");

    const handleSelection = (s) => {
      selected.value = s;
    };

    function onProductDetails(item) {
      product.value = item;
      window.value = 1;
    }

    const product = ref({});

    function onBackButton() {
      window.value = 0;
    }

    const window = ref(0);

    return {
      title,
      getIndustries,
      industries,
      selected,
      productsIndustries,
      tab,
      items,
      text,
      handleSelection,
      product,
      window,
      onProductDetails,
      onBackButton,
      hotProducts
    };
  }
});
</script>
<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
