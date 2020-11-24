<template>
  <v-card tile flat height="100%">
    <v-toolbar dark>
      <v-btn icon @click="handleBackButton">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title>Product Detail</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ProductDetails",

  props: {
    items: {
      type: Object,
      required: true
    }
  },

  setup() {
    function handleBackButton() {
      this.$emit("on-back-button");
    }

    return {
      handleBackButton
    };
  }
});
</script>
