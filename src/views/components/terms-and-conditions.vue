<template>
  <div class="terms-and-conditions">
    <h1>This is the Terms And Conditions page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TermsAndConditions",

  setup() {
    const title = "Terms And Conditions";

    return {
      title
    };
  }
});
</script>
