<template>
  <v-list two-line dense dark class="transparent">
    <v-list-item-group v-model="selectedItem" active-class="primary--text gold" multiple>
      <template v-for="(item, i) in industries">
        <v-list-item :key="i" class="mb-2">
          <template v-slot:default="{ active }">
            <v-list-item-content :class="{ 'pa-5': $vuetify.breakpoint.smAndUp }">
              <v-list-item-icon class="ma-0">
                <v-icon class="mr-3" v-if="!active" color="gold">mdi-city </v-icon>
                <v-icon class="mr-3" v-else color="primary">mdi-city </v-icon>
                <v-list-item-title
                  v-if="!active"
                  class="gold--text"
                  v-text="item.industryName"
                ></v-list-item-title>
                <v-list-item-title
                  v-else
                  class="primary--text"
                  v-text="item.industryName"
                ></v-list-item-title>
              </v-list-item-icon>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider v-if="i < item.length - 1" :key="i"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "IndustryList",

  props: {
    industries: Object
  },

  setup(props) {
    const selectedItem = ref([] as Array<number>);
    const items = ref(props.industries);

    return {
      selectedItem,
      items
    };
  }
});
</script>
