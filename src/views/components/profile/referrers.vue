<template>
  <v-card tile flat height="100%">
    <v-toolbar dark>
      <v-btn icon @click="handleBackButton">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title>My Referee</v-toolbar-title>
    </v-toolbar>

    <v-sheet class="pa-0">
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="item in items"
          :key="item.name"
          large
          :icon="item.file"
          color="secondary darken-2"
        >
          <v-card class="flat tile mr-6">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <v-card flat v-if="item.children != undefined" class="d-flex flex-wrap py-4">
              <div v-for="x in item.children" :key="x.name" class="text-center">
                <v-icon>{{ x.file }}</v-icon>
                <v-card-subtitle class="pb-0">{{ x.name }}</v-card-subtitle>
              </div>
            </v-card>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Referrers",

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  setup() {
    function handleBackButton() {
      this.$emit("on-back-button");
    }

    return {
      handleBackButton
    };
  }
});
</script>
