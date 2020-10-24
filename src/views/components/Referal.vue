<template>
  <app-center>
    <template v-slot:page>
      <v-btn
        class="mx-2"
        color="info"
        href="https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/README.md"
        target="_blank"
      >
        Documentation
      </v-btn>
      <v-btn
        class="mx-2"
        color="info"
        href="https://github.com/NelsonEAX/vue-vuetify-admin/"
        target="_blank"
      >
        Github Repository
      </v-btn>
    </template>
  </app-center>
</template>

<script lang="ts">
import Vue from "vue";
import AppCenter from "@/views/widget/AppCenter.vue";

export default Vue.extend({
  name: "Refereal",
  components: {
    AppCenter
  }
});
</script>
