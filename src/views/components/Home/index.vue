<template>
  <div>
    <!-- <v-container class="container--fluid grid-list-md text-center">
      <panel-group /> -->

    <!-- <v-item-group v-model="selected" multiple>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                height="150"
                class="text-right pa-2"
                @click="toggle"
              >
                <v-btn icon dark>
                  <v-icon>
                    {{ active ? "mdi-heart" : "mdi-heart-outline" }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group> -->
    <v-card class="mx-auto" max-width="1000" tile>
      <v-container class="container--fluid grid-list-md text-center">
        <panel-group />
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Single-line item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Three-line item</v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import PanelGroup from "./PanelGroup.vue";
import AppWidget from "@/views/widget/AppWidget.vue";

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  components: {
    PanelGroup,
    AppWidget
  },

  setup() {
    const elevations = ref([6, 12, 18]);
    const items = ref([
      {
        src: "backgrounds/bg.jpg"
      },
      {
        src: "backgrounds/md.jpg"
      },
      {
        src: "backgrounds/bg-2.jpg"
      },
      {
        src: "backgrounds/md2.jpg"
      }
    ]);
    const selected = ref([]);

    return {
      elevations,
      items,
      selected
    };
  }
});
</script>
