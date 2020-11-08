<template>
  <v-card tile class="mx-auto" height="100%">
    <v-card tile class="primary lighten-1">
      <v-card-text class="pt-8 text-center">
        <v-avatar color="secondary" size="108" class="rounded-xl">
          <v-avatar color="primary lighten-1" size="98" class="rounded-xl">
            <v-img :src="imagePath"></v-img>
          </v-avatar>
        </v-avatar>
      </v-card-text>

      <v-card-title class="pt-0 white--text justify-center">
        {{ name }}
      </v-card-title>

      <v-card-subtitle class="secondary--text text-center">
        <span>{{ $t("home.memberSince") }}</span>
        <span class="ml-1">2019</span>
      </v-card-subtitle>
    </v-card>

    <v-card-subtitle class="text-center text-h6">
      <span>{{ $t("home.points") }}</span>
      <span class="ml-1 text-h6">{{ points }}</span>
    </v-card-subtitle>

    <v-card-text>
      <app-widget title="Pie Chart">
        <option-chart
          slot="widget-content"
          height="280px"
          width="100%"
          :chart-data="getChartOption('pie')"
        />
      </app-widget>
    </v-card-text>

    <v-card-text class="text-center">
      <v-btn rounded color="primary" class="px-12">
        {{ $t("home.referal") }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { getPieChartOption } from "@/api/mock";
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  components: {
    PanelGroup: () => import("./PanelGroup.vue"),
    OptionChart: () => import("./option-chart.vue"),
    AppWidget: () => import("@/views/widget/app-widget.vue")
  },

  setup() {
    const selected = ref([]);
    const score = ref([17, 583, 723]);
    const category = ref(["home.processing", "home.unsuccessful", "home.successful"]);
    const title = ref("REFER 佬");

    const name = ref("Joe");
    const points = ref(10000);

    function getChartOption(option) {
      switch (option) {
        case "pie":
          return getPieChartOption();

        default:
          return {};
      }
    }

    const imagePath = ref("https://avatars0.githubusercontent.com/u/9064066?v=4&s=460");

    return {
      score,
      category,
      title,
      selected,
      name,
      points,
      imagePath,
      getChartOption
    };
  }
});
</script>
