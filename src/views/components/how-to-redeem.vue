<template>
  <div class="how-to-redeem">
    <h1>This is the How To Redeem page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "HowToRedeem",

  setup() {
    const title = "How To Redeem";

    return {
      title
    };
  }
});
</script>
