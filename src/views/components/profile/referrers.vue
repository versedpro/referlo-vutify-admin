<template>
  <v-sheet class="mx-auto pa-0" tile>
    <template>
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="item in items"
          :key="item.name"
          large
          :icon="item.file"
          color="secondary darken-2"
        >
          <v-card class="elevation-2">
            <v-card-subtitle>
              {{ item.name }}
            </v-card-subtitle>
            <!-- <v-card flat v-if="item.children != undefined" class="d-flex flex-wrap py-4">
              <div v-for="x in item.children" :key="x.name" class="text-center">
                <v-icon>{{ x.file }}</v-icon>
                <v-card-subtitle class="pb-0">{{ x.name }}</v-card-subtitle>
              </div>
            </v-card> -->
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </template>
  </v-sheet>
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
  }
});
</script>
