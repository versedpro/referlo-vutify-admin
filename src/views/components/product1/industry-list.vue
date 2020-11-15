<template>
  <v-list dense dark class="transparent">
    <v-list-item-group v-model="selectedItem" active-class="blue" multiple>
      <v-list-item v-for="(item, i) in industries" :key="i" class="mb-2">
        <v-list-item-content :class="{ 'pa-5': $vuetify.breakpoint.smAndUp }">
          <v-list-item-title dark v-text="item.industryName"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
