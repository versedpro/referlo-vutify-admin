<template>
  <div class="about">
    <h1>This is the latest news page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "LatestNews",

  setup() {
    const title = "Latest News";

    return {
      title
    };
  }
});
</script>
