<template>
  <canvas style="width: 300px; height: auto; margin: auto" id="doughnut" />
</template>
<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import Chart from "chart.js";

export default defineComponent({
  name: "OptionChart",

  props: {
    labels: {
      type: Array,
      default: () => []
    },
    colors: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },

  setup(props) {
    onMounted(() => {
      createChart({
        datasets: [
          {
            data: props.data,
            backgroundColor: props.colors
          }
        ],
        labels: props.labels
      });
    });

    function createChart(chartData) {
      const canvas = document.getElementById("doughnut") as HTMLCanvasElement;

      const chartOptions = {
        animation: {
          duration: 0 // general animation time
        },
        hover: {
          animationDuration: 0 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0 // animation duration after a resize
      };

      const options = {
        type: "doughnut",
        data: chartData,
        options: chartOptions
      };
      new Chart(canvas, options);
    }
    return {
      createChart
    };
  }
});
</script>
