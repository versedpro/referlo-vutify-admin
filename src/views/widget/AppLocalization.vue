<template>
  <!-- <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon text v-on="on">
        <v-icon>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list-item
        v-for="(item, index) in locales"
        :key="index"
        ripple="ripple"
        :target="item.target"
        rel="noopener"
        @click="setLocale(item.locale)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu> -->

  <v-chip-group mandatory active-class="primary--text">
    <v-chip v-for="(item, index) in locales" :key="index" outlined color="primary">
      {{ item.display }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts">
import { locales } from "@/locale";
// import Vue from "vue";

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  // export default Vue.extend({
  name: "AppLocalization",

  setup() {
    // const loading = ref(false);
    const selection = ref(1);

    async function setLocale(locale) {
      // $store
      await this.$store.dispatch("SetLocale", { locale });
    }

    return {
      selection,
      locales,
      setLocale
    };
  }
});
</script>
