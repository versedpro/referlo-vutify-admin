<template>
  <v-chip-group mandatory active-class="primary--text">
    <v-chip
      v-for="(item, index) in locales"
      :key="index"
      small
      ripple
      active
      outlined
      color="primary"
      @click="setLocale(item.locale)"
    >
      {{ item.display }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts">
import { locales } from "@/locale/available";
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "AppLocalization",

  setup() {
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

<style scoped>
.v-chip.v-chip--outlined.v-chip.v-chip {
  background-color: #fcda8b !important;
}
</style>
