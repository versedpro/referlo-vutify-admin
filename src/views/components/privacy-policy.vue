<template>
  <div class="privacypolicy">
    <h1>This is the Privacy Policy page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PrivacyPolicy",

  setup() {
    const title = "Privacy Policy";

    return {
      title
    };
  }
});
</script>
