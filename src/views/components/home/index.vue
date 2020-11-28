<template>
  <v-card tile flat>
    <v-window v-model="window">
      <v-window-item>
        <v-card tile flat class="mx-auto" color="backgroundColor" height="100%">
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
          <v-card-text class="pa-0 mx-0 pb-15">
            <app-widget title="Pie Chart">
              <option-chart 
                slot="widget-content"
                :labels="legend"
                :colors="chartColors"
                :data="chartData"
              />
            </app-widget>
          </v-card-text>

          <!-- The footer -->
          <home-footer @on-show="onShowLinkDialog"></home-footer>

          <!-- The dialog -->
          <referral-link-dialog
            :link="referPeopleUrl"
            :show="showLinkDialog"
            @close="closeDialog"
          ></referral-link-dialog>
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
// import { ReferloChartInfo } from "@/types"; // Our interface

import { defineComponent, computed, ref } from "@vue/composition-api";

import ApiService from '@/services/apiService';

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

    const jsonData = ApiService.getJsonData().then((response) => {
      console.log(response['data']);
      return response['data'];
    }).catch((error) =>{
       console.log(error.response.data);
       return null;
    })

    const showLinkDialog = ref(false);
    const window = ref(0);

    const backgroundColor = computed(() => {
      return "gold";
    });

    const absolute = computed(() => {
      return !root.$vuetify.breakpoint.smAndDown;
    });

    const legend = computed(() => [
      root.$i18n.t("home.completed", person.score.slice(2, 3)),
      root.$i18n.t("home.wip", person.score.slice(1, 2)),
      root.$i18n.t("home.referred", person.score.slice(0, 1))
    ]);

    const referPeopleUrl = computed(() => {
      const host = `${location.host}`;
      const protocol = host.includes("localhost") ? "http://" : "https://";
      return protocol + host + "/registration?key=sdfsfsd";
    });

    const closeDialog = () => {
      showLinkDialog.value = false;
    };

    const chartData = [person.score[0], person.score[1], person.score[2]];

    const chartColors = ["grey", "#001e2f", "#dcb456"];

    const onShowLinkDialog = (show) => {
      showLinkDialog.value = show;
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
      ads,
      absolute,
      person,
      backgroundColor,
      showLinkDialog,
      referPeopleUrl,
      legend,
      closeDialog,
      chartColors,
      chartData,
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
