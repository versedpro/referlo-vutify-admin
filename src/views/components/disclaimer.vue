<template>
  <div class="disclaimer">
    <h1>This is the Disclaimer page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Disclaimer",

  setup() {
    const title = "Disclaimer";

    return {
      title
    };
  }
});
</script>
