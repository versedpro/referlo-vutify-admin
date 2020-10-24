<template>
  <app-center>
    <template v-slot:page>
      <v-col class="display-4">
        Visitor
      </v-col>
    </template>
  </app-center>
</template>

<script lang="ts">
import AppCenter from "@/views/widget/AppCenter.vue";

import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Visitor",
  components: {
    AppCenter
  }
});
</script>
