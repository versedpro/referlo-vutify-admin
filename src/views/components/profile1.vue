<template>
  <v-card class="mx-auto pa-0" max-width="800" height="100%" tile>
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>
    <v-timeline dense>
      <v-timeline-item v-for="n in 4" :key="n" large>
        <template v-slot:icon>
          <v-avatar size="36px">
            <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
            <!-- <v-icon v-else :color="message.color" v-text="message.icon"></v-icon> -->
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            Lorem ipsum
          </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
            sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.</v-card-text
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_referrer_list";

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Profile",

  setup() {
    const items = ref(Items);
    const tree = ref([]);
    const title = "个人资料";

    return {
      tree,
      items,
      title
    };
  }
});
</script>
