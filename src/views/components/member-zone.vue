<template>
  <div class="member-zone">
    <h1>This is the Member Zone page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MemberZone",

  setup() {
    const title = "Member Zone";

    return {
      title
    };
  }
});
</script>
