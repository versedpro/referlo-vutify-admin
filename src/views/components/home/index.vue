<template>
  <v-card tile flat color="cream" height="calc(100vh - 48px)">
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
                @click="onProductDetails"
                class="cursor-pointer"
                :src="item.src"
                :aspect-ratio="1.91 / 1"
              ></v-img>
            </v-carousel-item>
          </v-carousel>

          <membership-info :person="person"></membership-info>

          <!-- The chart -->
          <v-card-text class="pa-0 mx-0 pb-15" color="transparent">
            <app-widget title="Pie Chart">
              <option-chart slot="widget-content"/>
            </app-widget>
          </v-card-text>

          <!-- The footer -->
          <home-footer @on-show="onShowLinkDialog"></home-footer>

          <!-- The dialog -->
          <referral-link-dialog :show="showLinkDialog" @close="closeDialog" />
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
import { ads, person } from "./json-data";
import { defineComponent, computed, ref, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  name: "Home",

  components: {
    AppWidget: () => import("@/views/widget/app-widget.vue"),
    OptionChart: () => import("./option-chart.vue"),
    ReferralLinkDialog: () => import("./referral-link-dialog.vue"),
    ProductDetails: () => import("./../products/product-details.vue"),
    MembershipInfo: () => import("./membership-info.vue"),
    HomeFooter: () => import("./home-footer.vue")
  },

  setup(_, { root }) {
    const window = ref(0);

    const data = reactive({
      showLinkDialog: false
    });

    const absolute = computed(() => {
      return !root.$vuetify.breakpoint.smAndDown;
    });

    const closeDialog = () => {
      data.showLinkDialog = false;
    };

    const onShowLinkDialog = (show) => {
      data.showLinkDialog = show;
    };

    function onProductDetails() {
      window.value = 1;
    }

    function onBackButton() {
      window.value = 0;
    }

    const product = ref({
      productName: "Broadband",
      supplierId: 1,
      supplierName: "PCCW",
      points: 80,
      rank: 1,
      src: "/img/products/csl1.png",
      productDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    });

    return {
      ...toRefs(data),
      ads,
      absolute,
      person,
      closeDialog,
      onShowLinkDialog,
      onProductDetails,
      window,
      product,
      onBackButton
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
