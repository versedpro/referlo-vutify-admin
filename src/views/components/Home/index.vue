<template>
  <v-card tile class="mx-auto" height="100%">
    <v-card tile class="primary">
      <v-card-text class="pt-12 text-center">
        <v-avatar class="profile" color="grey" size="128">
          <!-- <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img> -->
          <v-img src="img/avatars/customer-support.png"></v-img>
        </v-avatar>
      </v-card-text>
      <v-card-title class="white--text justify-center">
        {{ name }}
      </v-card-title>
      <v-card-subtitle class="white--text text-center">
        <span>{{ $t("home.memberSince") }}</span>
        <span class="ml-1">2019</span>
      </v-card-subtitle>
    </v-card>

    <v-container class="grey lighten-5 pa-0">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined>
            <v-card-title class="justify-center text-h4 text--white">
              {{ score[n - 1] }}
            </v-card-title>
            <v-card-text class="text-center text-h6">
              {{ $t(category[n - 1]) }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-card-subtitle class="text-center text-h6">
      {{ $t("home.referredTotal") }} 1323
    </v-card-subtitle>
    <v-divider></v-divider>

    <v-card-title class="mt-16 mb-8 justify-center text-h6">
      <span>{{ $t("home.points") }}</span>
      <span class="ml-2 text-h5 secondary--text text--darken-2 font-weight-medium">{{
        points
      }}</span>
    </v-card-title>

    <v-card-text class="text-center">
      <v-btn rounded color="primary" class="px-12">
        {{ $t("home.referal") }}
      </v-btn>
    </v-card-text>
  </v-card>
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
    const selected = ref([]);
    const score = ref([17, 583, 723]);
    const category = ref(["home.processing", "home.unsuccessful", "home.successful"]);
    const title = ref("REFER 佬");

    // const img1 = ref(require("@/assets/img/customer-support.png"));
    const name = ref("Joe");
    const points = ref(10000);

    return {
      // img1,
      score,
      category,
      title,
      selected,
      name,
      points
    };
  }
});
</script>
