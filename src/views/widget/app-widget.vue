<template>
  <v-card flat tile color="transparent">
    <v-card-text v-if="!paddingHide">
      <slot name="widget-content" />
    </v-card-text>
    <slot v-else name="widget-content" />
  </v-card>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "AppWidget",

  props: {
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "mdi-dots-vertical"
    }
  },

  setup() {
    const headerHide = ref(false);
    const paddingHide = ref(false);

    return {
      headerHide,
      paddingHide
    };
  }
});
</script>
