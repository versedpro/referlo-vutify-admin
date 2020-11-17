<template>
  <v-list two-line dense dark class="transparent">
    <v-list-item-group
      v-model="selectedItem"
      active-class="primary--text gold"
      @change="handleChange"
      multiple
    >
      <template v-for="(item, i) in industries">
        <v-list-item :key="item.industryId" :value="item" class="mb-2">
          <template v-slot:default="{ active }">
            <v-list-item-content :class="{ 'pa-5': $vuetify.breakpoint.smAndUp }">
              <v-list-item-icon class="ma-0">
                <v-icon :elevation="3" class="mr-3" v-if="!active" color="gold">mdi-city </v-icon>
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
    industries: Array
  },

  setup(props, { emit }) {
    const selectedItem = ref([]);
    const items = ref(props.industries);

    const handleChange = (selected) => {
      const industries = selected.map((e) => e.industryId) as Array<any>;
      // eslint-disable-next-line vue/custom-event-name-casing
      emit("onSelection", industries);
    };

    return {
      selectedItem,
      items,
      handleChange
    };
  }
});
</script>
