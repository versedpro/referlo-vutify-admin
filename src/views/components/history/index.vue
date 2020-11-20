<template>
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
      <v-tab-item v-for="(tab, i) in tabItems" :key="i">
        <orders-history :items="items" :tab="i"></orders-history>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, computed } from "@vue/composition-api";
import { Items } from "./json-data";

export default defineComponent({
  name: "History",

  components: {
    OrdersHistory: () => import("./orders-history.vue"),
    ReferloAvatar: () => import("@/views/widget/referlo-avatar.vue")
  },

  setup() {
    const vm = getCurrentInstance();

    const itemsPerPage = ref(4);
    const items = ref(Items);
    // const title = ref(vm.$t("history.title");
    const tab = ref(0);

    const title = computed(() => vm.$t("history.title") as string);

    const tabItems = computed(() => {
      return [
        vm.$t("history.wip"),
        vm.$t("history.referred"),
        vm.$t("history.completed"),
        vm.$t("history.reject")
      ];
    });

    const sheet = ref(false);

    return {
      itemsPerPage,
      title,
      items,
      tab,
      tabItems,
      sheet
    };
  }
});
</script>
