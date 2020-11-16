<template>
  <v-card class="mx-auto pa-0" height="100%" tile>
    <!-- <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title> -->
    <template>
      <v-timeline dense>
        <v-timeline-item
          v-for="item in items"
          :key="item.name"
          large
          :icon="item.file"
          color="secondary darken-2"
        >
          <v-card class="elevation-2">
            <v-card-title class="headline">
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
    </template>
  </v-card>
</template>
<script lang="ts">
import { Items } from "@/demo/api/mock_referrer_list";

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Profile",

  setup() {
    const show = ref(false);
    const items = ref(Items);
    const tree = ref([]);
    const title = "个人资料";

    return {
      tree,
      items,
      title,
      show
    };
  }
});
</script>
