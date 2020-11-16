<template>
  <v-card tile class="mx-auto" height="auto">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ContactUs",

  setup() {
    const title = "Contact Us";

    const selected = ref(null as number);

    const selectedItem = null as number;

    return {
      title,

      selected,
      selectedItem
    };
  }
});
</script>
