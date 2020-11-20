<template>
  <app-center>
    <template v-slot:page>
      <v-col class="display-4">
        Editor
      </v-col>
    </template>
  </app-center>
</template>

<script lang="ts">
import AppCenter from "@/views/widget/app-center.vue";

import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Editor",
  components: {
    AppCenter
  }
});
</script>

<style scoped></style>
