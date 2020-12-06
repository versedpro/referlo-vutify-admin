<template>
  <v-card tile flat>
    <v-window v-model="window">
      <v-window-item>
        <v-card tile flat class="mx-auto" color="transparent" height="100%">
          <v-system-bar absolute light color="rgba(0, 30, 47, 0.1)">
            <v-icon class="gold--text lighten-4">fas fa-ad</v-icon>
          </v-system-bar>

          <!-- The carousel -->
          <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover cycle>
            <v-carousel-item v-for="(item, i) in ads" :key="i">
              <v-img
                @click="onProductDetails(item)"
                class="cursor-pointer"
                :src="item.image_path"
                :aspect-ratio="1.91 / 1"
              ></v-img>
            </v-carousel-item>
          </v-carousel>

          <membership-info :person="person"></membership-info>

          <!-- The chart -->
          <v-card-text class="pa-0 mx-0 pb-15">
            <app-widget title="Pie Chart">
              <option-chart slot="widget-content" :data="chartData" />
            </app-widget>
          </v-card-text>

          <!-- The footer -->
          <page-footer @on-show="onShowLinkDialog"></page-footer>

          <!-- The dialog -->
          <!-- :link="referPeopleUrl" -->
          <referral-link-dialog :show="showLinkDialog" @close="closeDialog"></referral-link-dialog>
        </v-card>
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
import { ApiService } from "@/services/apiService";
import { Person, Ad, ProductDetail } from "@/types"; // Our interface

import { defineComponent, computed, ref, onMounted } from "@vue/composition-api";

export default defineComponent({
  name: "Home",

  components: {
    AppWidget: () => import("@/views/widget/app-widget.vue"),
    OptionChart: () => import("./option-chart.vue"),
    ReferralLinkDialog: () => import("./referral-link-dialog.vue"),
    ProductDetails: () => import("./../products/product-details.vue"),
    MembershipInfo: () => import("./membership-info.vue"),
    PageFooter: () => import("./page-footer.vue")
  },

  setup(_, { root }) {
    const apiService = new ApiService();
    const ads = ref([] as Ad[]);
    const chartData = ref([]);
    const person = ref<Person>({} as Person);
    const product = ref<ProductDetail>({} as ProductDetail);

    onMounted(() => {
      fetchHomePageData();
    });

    const fetchHomePageData = async (): Promise<void> => {
      const referloId = 1;
      const data = await apiService.getHomePageData(referloId);
      const baseURL = process.env.VUE_APP_API_URL;

      person.value = data.person;
      person.value.avatar = baseURL + person.value.avatar;

      chartData.value = [
        data.person.refereal_submit,
        data.person.referral_wip,
        data.person.referral_completed
      ];

      ads.value = data.ads.map((x) => {
        x.image_path = baseURL + x.image_path;
        return x;
      });
    };

    const showLinkDialog = ref(false);
    const window = ref(0);

    const absolute = computed(() => {
      return !root.$vuetify.breakpoint.smAndDown;
    });

    // const referPeopleUrl = computed(() => {
    //   const host = `${location.host}`;
    //   const protocol = host.includes("localhost") ? "http://" : "https://";
    //   return protocol + host + "/registration?key=sdfsfsd";
    // });

    const closeDialog = () => {
      showLinkDialog.value = false;
    };

    const onShowLinkDialog = (show) => {
      showLinkDialog.value = show;
    };

    async function onProductDetails(item) {
      console.log(item);
      let productDetail = await apiService.getProductDetail(item.supplier_product_id);
      productDetail.image_path = process.env.VUE_APP_API_URL + productDetail.image_path;
      product.value = productDetail;
      window.value = 1;
    }

    function onBackButton() {
      window.value = 0;
    }

    return {
      apiService,
      ads,
      absolute,
      person,
      // backgroundColor,
      showLinkDialog,
      // referPeopleUrl,
      closeDialog,
      chartData,
      window,
      product,

      onBackButton,
      onProductDetails,
      onShowLinkDialog
    };
  }
});
</script>

<style scoped>
footer /deep/ a.refer-products {
  text-decoration: none;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
