<template>
  <app-center>
    <template v-slot:page>
      <p class="warn-content">
        {{ $t("guide.description") }}
        <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
      </p>
      <v-btn class="mx-2" color="success" @click.prevent.stop="guide">
        {{ $t("guide.button") }}
      </v-btn>
    </template>
  </app-center>
</template>

<script lang="ts">
import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import steps from "./defineSteps";
import AppCenter from "@/views/widget/AppCenter.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Guide",
  components: {
    AppCenter
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      driver: {} as Driver
    };
  },

  mounted() {
    this.driver = new Driver();
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps);
      this.driver.start();
    }
  }
});
</script>
