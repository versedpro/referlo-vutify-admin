<template>
  <v-card class="mx-auto">
    <v-toolbar color="gold">
      <v-btn icon>
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Language</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="d-flex align-center" height="100%">
          <v-switch
            v-for="(item, index) in locales"
            :key="index"
            @change="setLocale(item.locale)"
            :label="item.display"
            hide-details
          >
          </v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Another Switch</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="d-flex align-center" height="100%">
          <v-switch v-model="sticky" label="Off" hide-details></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { locales } from "@/locale/available";
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Settings",

  setup() {
    const selection = ref(1);

    async function setLocale(locale) {
      console.log(locale);
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
