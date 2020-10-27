<template>
  <v-col cols="12" sm="6" md="3">
    <v-card class="mx-auto" @click.stop="handleSetLineChartData(`${chart}`)">
      <v-list-item three-line>
        <v-list-item-avatar size="80">
          <v-icon size="64" :color="color">
            {{ icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="title font-weight-light">
            {{ title }}
          </v-list-item-title>
          <v-list-item-title>
            {{ value }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PanelGroupItem",

  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },

  setup() {
    // function handleSetLineChartData(type) {
    //   this.$parent.$emit("handleSetLineChartData", type);
    //   return {
    //     handleSetLineChartData
    //   };
    // }
  }
});
</script>
