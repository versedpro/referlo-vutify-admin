<template>
  <v-card tile class="mx-auto" color="backgroundColor" height="100%">
    <v-system-bar absolute light color="rgba(0, 30, 47, 0.1)">
      <v-icon class="gold--text lighten-4">fas fa-ad</v-icon>
    </v-system-bar>

    <!-- The carousel -->
    <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover cycle>
      <v-carousel-item v-for="(item, i) in ads" :key="i">
        <v-img :src="item.src" :aspect-ratio="1.91 / 1"></v-img>
      </v-carousel-item>
    </v-carousel>

    <v-list subheader class="primary">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :alt="`${person.title} avatar`" :src="person.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text">{{ person.name }}</v-list-item-title>
          <v-list-item-subtitle class="gold--text">
            <span>{{ $t("home.memberSince") }}</span>
            <span class="ml-1">{{ person.memberSince }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-chip class="text-h6" color="transparent" text-color="gold">
            <v-icon left> mdi-currency-usd-circle-outline </v-icon>
            {{ person.points }}
          </v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <!-- The chart -->
    <v-card-text class="pa-0 mx-0 white">
      <app-widget title="Pie Chart">
        <option-chart
          slot="widget-content"
          height="180px"
          width="100%"
          :chart-data="getChartOption()"
        />
      </app-widget>
    </v-card-text>

    <v-card-text class="text-center mt-0 pb-4 white">
      <v-btn x-small class="px-4" color="gold"> {{ legend[0] }} </v-btn>
      <v-btn x-small class="px-4 mx-6" color="primary"> {{ legend[1] }} </v-btn>
      <v-btn x-small class="px-4" color="grey"> {{ legend[2] }} </v-btn>
    </v-card-text>

    <!-- The footer -->
    <v-footer v-if="$vuetify.breakpoint.smAndDown" color="gold lighten-1" app>
      <v-card-text class="text-center py-2">
        <app-button class="mr-3" :text="$t('home.referPeople')" @on-click="referPeople" />
        <app-button class="ml-3" :text="$t('home.referProduct')" @on-click="referProduct" />
      </v-card-text>
    </v-footer>
    <v-footer v-else color="gold lighten-1" absolute>
      <v-card-text class="text-center py-2">
        <app-button class="mr-3" :text="$t('home.referPeople')" @on-click="referPeople" />
        <app-button class="ml-3" :text="$t('home.referProduct')" @on-click="referProduct" />
      </v-card-text>
    </v-footer>

    <!-- The dialog -->
    <referral-link-dialog
      :link="url"
      :show="showLinkDialog"
      @close="closeDialog"
    ></referral-link-dialog>
  </v-card>
</template>

<script lang="ts">
import { ads, person, getPieChartOption } from "./json-data";
import { ReferloChartInfo } from "@/types"; // Our interface

import { defineComponent, computed, ref, getCurrentInstance } from "@vue/composition-api";

export default defineComponent({
  name: "Home",

  components: {
    AppButton: () => import("@/views/widget/app-button.vue"),
    AppWidget: () => import("@/views/widget/app-widget.vue"),
    OptionChart: () => import("./option-chart.vue"),
    ReferralLinkDialog: () => import("./referral-link-dialog.vue")
  },

  setup() {
    const showLinkDialog = ref(false);
    const url = ref("abc.com");
    const vm = getCurrentInstance();

    const backgroundColor = computed(() => {
      return "gold";
    });

    const absolute = computed(() => {
      return !vm.$vuetify.breakpoint.smAndDown;
    });

    const legend = computed(() => [
      vm.$i18n.t("home.completed", person.score.slice(2, 3)),
      vm.$i18n.t("home.wip", person.score.slice(1, 2)),
      vm.$i18n.t("home.referred", person.score.slice(0, 1))
    ]);

    const closeDialog = () => {
      showLinkDialog.value = false;
    };

    const getChartOption = () => {
      const chart: ReferloChartInfo = {
        data: {
          referred: person.score[0],
          wip: person.score[1],
          completed: person.score[2]
        },

        title: {
          text: "1333",
          subtext: vm.$tc("home.referalTotal")
        }
      };

      return getPieChartOption(chart);
    };

    const referPeople = () => {
      showLinkDialog.value = true;
    };

    const referProduct = () => {
      vm.$router.push("/product1");
    };

    return {
      ads,
      absolute,
      person,
      backgroundColor,
      showLinkDialog,
      url,
      legend,
      closeDialog,
      getChartOption,
      referPeople,
      referProduct
    };
  }
});
</script>

<style scoped>
footer /deep/ a.refer-products {
  text-decoration: none;
}
</style>
