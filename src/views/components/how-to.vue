<template>
  <div class="about">
    <h1>This is the how to page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "HowTo",

  setup() {
    const title = "How To";

    return {
      title
    };
  }
});
</script>
