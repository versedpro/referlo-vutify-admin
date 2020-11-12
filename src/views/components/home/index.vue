<template>
  <v-card tile class="mx-auto" height="100%">
    <v-system-bar absolute light color="rgba(0, 30, 47, 0.7)">
      <v-icon class="gold--text">mdi-message</v-icon>
      <span class="white--text">Ads.</span>
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
            <v-icon left> mdi-coin </v-icon>
            {{ person.points }}
          </v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-card-text>
      <app-widget title="Pie Chart">
        <option-chart
          slot="widget-content"
          height="240px"
          width="100%"
          :chart-data="getChartOption('pie')"
        />
      </app-widget>
    </v-card-text>

    <!-- The footer -->
    <!-- <v-footer color="primary lighten-1" fixed app> -->
    <v-footer inset app>
      <v-card-text class="text-center">
        <v-btn @click="referPeopleDialog = !referPeopleDialog" outlined rounded class="mr-4">
          {{ $t("home.referPeople") }}
        </v-btn>

        <v-btn outlined rounded class="ml-4">
          {{ $t("home.referProduct") }}
        </v-btn>
      </v-card-text>
    </v-footer>

    <refer-people
      link="abc.com"
      :show="referPeopleDialog"
      @close="referPeopleDialog = false"
    ></refer-people>
  </v-card>
</template>

<script lang="ts">
import { getPieChartOption } from "@/api/mock";
import { defineComponent, ref } from "@vue/composition-api";
import ReferPeople from "./ReferPeople.vue";

export default defineComponent({
  name: "Home",
  components: {
    OptionChart: () => import("./option-chart.vue"),
    AppWidget: () => import("@/views/widget/app-widget.vue"),
    ReferPeople
  },

  setup() {
    const person = {
      name: "Joe",
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      memberSince: 2020,
      points: 10000,
      score: [17, 583, 723]
    };

    const ads = [
      {
        src: "/img/products/csl1.png"
      },
      {
        src: "/img/products/csl2.png"
      }
    ];

    const referPeopleDialog = ref(false);

    function getChartOption(option) {
      switch (option) {
        case "pie":
          return getPieChartOption();

        default:
          return {};
      }
    }

    const toggle_exclusive = ref(2);

    return {
      toggle_exclusive,
      ads,
      person,
      getChartOption,
      referPeopleDialog
    };
  }
});
</script>
