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
import { defineComponent, onMounted, watchEffect } from "@vue/composition-api";
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
    watchEffect(() => {
      createChart({
        datasets: [
          {
            data: props.data,
            backgroundColor: props.colors,
            hoverBorderColor: "rgba(255, 255, 255, 1)",
            hoverBackgroundColor: props.colors
          }
        ],
        labels: props.labels
      });
    });
    onMounted(() => {
      createChart({
        datasets: [
          {
            data: props.data,
            backgroundColor: props.colors,
            hoverBorderColor: "rgba(255, 255, 255, 1)",
            hoverBackgroundColor: props.colors
          }
        ],
        labels: props.labels
      });
    });

    var chart;

    function createChart(chartData) {
      if (chart) {
        chart.destroy();
      }
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
      chart = new Chart(canvas, options);
    }
    return {
      createChart
    };
  }
});
</script>
