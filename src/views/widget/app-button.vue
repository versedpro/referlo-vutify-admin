<template>
  <v-btn rounded class="px-6" color="primary" @click="handleClick">
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "AppButton",
  props: {
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "mdi-dots-vertical"
    }
  },

  setup() {
    const color = ref("primary back-gold");
    const paddingHide = ref(false);

    function handleClick() {
      this.$emit("on-click");
      // this.$emit;
    }

    return {
      color,
      paddingHide,
      handleClick
    };
  }
});
</script>
