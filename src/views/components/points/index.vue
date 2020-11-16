<template>
  <!-- <div>
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
  </div> -->

  <v-card tile class="mx-auto" height="100%">
    <v-toolbar color="primary" dark flat>
      <referlo-avatar imgSrc="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
      <v-toolbar-title class="ml-5"> {{ title }}</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs grow v-model="tab" background-color="transparent" dark color="gold">
          <v-tab v-for="item in tabItems" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in tabItems"
        :key="item"
      >
        <points-table v-if="item == $t('points.unclaimed')" :items="items"></points-table>
        <points-table v-else :items="level1"></points-table>
      </v-tab-item>
    </v-tabs-items>

    
    <!-- <order-history :items="items"></order-history> -->
  </v-card>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, computed } from "@vue/composition-api";
import { level0 as p0, level1 as p1, level2 as p2 } from "@/demo/api/mock_points";

export default defineComponent({
  name: "FollowUp",

  components: {
    PointsTable: () => import("./points-table.vue"),
    ReferloAvatar: () => import("@/views/widget/referlo-avatar.vue")
  },

  setup() {
    const panel = ref([0, 1]);
    const readonly = ref(false);
    const items = ref(p0);
    const level1 = ref(p1);
    const level2 = ref(p2);
    const vm = getCurrentInstance();

    const title = vm.$t("points.title");

    const tabItems = computed(() => {
      return [vm.$t("points.unclaimed"), vm.$t("points.claimed")];
    });

    const tab = ref(null);

    return {
      panel,
      title,
      items,
      level1,
      level2,
      readonly,
      tabItems,
      tab
    };
  }
});
</script>
