<template>
  <v-card class="pa-0" height="100%">
    <v-card-title> ff </v-card-title>
    <v-card-text class="grey pa-4">
      <v-expansion-panels inset>
        <v-expansion-panel v-for="(item, i) in industries" :key="i">
          <v-expansion-panel-header class="pa-0">
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon> mdi-flag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.industryName"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { industries as Industries } from "@/demo/api/mock_industry";

export default defineComponent({
  name: "History",

  setup() {
    const itemsPerPage = ref(4);
    const title = "資訊中心";
    const model = ref(null);
    const industries = ref(Industries);
    const selected = ref([] as Array<string>);

    const selection = ref([]);
    const isLoading = ref(false);
    const tree = ref([]);
    const types = ref([]);
    const selectionType = ref("leaf");

    const handleSelection = (s) => (selected.value = s);

    return {
      selectionType,
      selection,
      isLoading,
      tree,
      types,
      itemsPerPage,
      title,
      // items,
      industries,
      model,
      selected,
      handleSelection
    };
  }
});
</script>
