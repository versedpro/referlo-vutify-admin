<template>
  <canvas style="width: 300px; height: auto; margin: auto" id="doughnut" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import Chart from 'chart.js';

export default defineComponent({
  name: "OptionChart",

  props: {
    labels: {
      type: Array,
      default: () => ([])
    },
    colors: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({})
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
      })
    })

    function createChart(chartData) {
      const canvas = document.getElementById('doughnut') as HTMLCanvasElement
      const options = {
        type: 'doughnut',
        data: chartData,
        options: props.options
      }
      new Chart(canvas, options)
    }
    return {
      createChart
    };
  }
});
</script>
