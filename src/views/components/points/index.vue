<template>
  <div>
    <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Panel 1</v-expansion-panel-header>
        <v-expansion-panel-content>
          <points-table :items="items"></points-table>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
        <v-expansion-panel-content>
          <points-table :items="level1"></points-table>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
        <v-expansion-panel-content>
          <points-table :items="level2"></points-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { level0 as p0, level1 as p1, level2 as p2 } from "@/demo/api/mock_points";

export default defineComponent({
  name: "FollowUp",

  components: {
    PointsTable: () => import("./points-table.vue")
  },

  setup() {
    const panel = ref([0, 1]);
    const readonly = ref(false);
    const title = "過往記錄";
    const items = ref(p0);
    const level1 = ref(p1);
    const level2 = ref(p2);

    return {
      panel,
      title,
      items,
      level1,
      level2,
      readonly
    };
  }
});
</script>
