<template>
  <div style="display: flex">
    <div style="width: 90%">
      <canvas style="width: 300px; height: auto; margin: auto" id="doughnut" />
    </div>
    <div style="align-self: center">
      <div style="background-color: gold; width: 30px">16</div>
      <div style="background-color: green; margin-top: 10px; width: 60px">33</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import Chart from "chart.js";
import { ApiService } from "@/services/apiService";
import { get } from "lodash";

export default defineComponent({
  name: "OptionChart",

  setup(_, { root }) {
    const apiService = new ApiService();
    const getChartOption = async (): Promise<void> => {
      const chartJsonData = await apiService.getPieChartOption();
      const dataset = buildDataset(chartJsonData);
      createChart(dataset);
    };

    onMounted(() => {
      getChartOption();
    });

    function buildDataset(apiData) {
      const labels = get(apiData, "series.0.data", []).map(({ name, value }) => {
        return root.$i18n.t(`home.${name}`, [value]);
      });
      const data = get(apiData, "series[0].data", []).map((data) => {
        return data.value;
      });
      const colors = apiData["color"];

      const dataset = {
        datasets: [
          {
            data,
            backgroundColor: colors,
            hoverBorderColor: "rgba(255, 255, 255, 1)",
            hoverBackgroundColor: colors
          }
        ],
        labels
      };

      return dataset;
    }

    function createChart(chartData) {
      const canvas = document.getElementById("doughnut") as HTMLCanvasElement;

      const chartOptions = {
        animation: {
          duration: 0 // general animation time
        },
        hover: {
          animationDuration: 0 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, // animation duration after a resize,
        tooltips: {
          enabled: false
        }
      };

      const options = {
        type: "doughnut",
        data: chartData,
        options: chartOptions
      };
      new Chart(canvas, options);
    }
  }
});
</script>
