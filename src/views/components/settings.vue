<template>
  <div class="settings">
    <h1>This is the Settings page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Settings",

  setup() {
    const title = "settings";

    return {
      title
    };
  }
});
</script>
