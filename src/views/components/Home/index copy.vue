<template>
  <v-card class="mx-auto pa-0" max-width="800" height="100%" tile>
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>
    <v-container class="grey lighten-5 pa-0">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined>
            <v-card-title class="justify-center text-h4 text--white">
              {{ score[n - 1] }}
            </v-card-title>
            <v-card-text class="text-center text-h6">
              {{ category[n - 1] }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container--fluid grid-list-md text-center">
      <v-row class="mt-12">
        <v-col cols="5" offset="1">
          <v-sheet>
            <v-icon size="128">mdi-share-circle</v-icon>
            <h1 class="text-h6 mt-2">{{ menuItem[0] }}</h1>
          </v-sheet>
        </v-col>

        <v-col cols="5">
          <v-sheet>
            <v-icon size="128">mdi-information</v-icon>
            <h1 class="text-h6 mt-2">{{ menuItem[1] }}</h1>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col cols="5" offset="1">
          <v-sheet>
            <v-icon size="128">mdi-information</v-icon>
            <h1 class="text-h6 mt-2">{{ menuItem[2] }}</h1>
          </v-sheet>
        </v-col>

        <v-col cols="5">
          <v-sheet>
            <v-icon size="128">mdi-information</v-icon>
            <h1 class="text-h6 mt-2">{{ menuItem[3] }}</h1>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-footer absolute>
      <v-card-actions>
        <h1 class="mr-5 text-h4">1323</h1>
        <v-divider vertical></v-divider>
      </v-card-actions>
    </v-footer>
  </v-card>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-var-requires */

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
    const selected = ref([]);
    const score = ref([17, 583, 723]);
    const category = ref(["努力中", "未成功個案", "已成功個案"]);
    const title = ref("REFER 佬");

    const menuItem = ref(["轉介客戶", "過往記錄", "資訊中心", "個人資料"]);

    const img1 = ref(require("@/assets/img/customer-support.png"));

    return {
      img1,
      score,
      category,
      title,
      menuItem,
      selected
    };
  }
});
</script>
