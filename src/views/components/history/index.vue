<template>
  <v-card tile flat class="mx-auto" height="100%">
    <v-window v-model="onboarding" vertical>
      <v-window-item>
        <orders-list
          :title="title"
          :tabItems="tabItems"
          @on-selection-history="handleSelectionHistory"
        ></orders-list>
      </v-window-item>
      <v-window-item>
        <orders-chat-detail :order="order" @click="prev"></orders-chat-detail>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  name: "History",

  components: {
    OrdersList: () => import("./orders-list.vue"),
    OrdersChatDetail: () => import("./orders-chat-detail.vue")
  },

  setup(_, { root }) {
    const onboarding = ref(0);
    const order = ref(null);
    const title = computed(() => root.$t("history.title") as string);

    const tabItems = computed(() => {
      return [
        root.$t("history.wip"),
        root.$t("history.referred"),
        root.$t("history.completed"),
        root.$t("history.reject")
      ];
    });

    const handleSelectionHistory = (s) => {
      onboarding.value += 1;
      order.value = s.selectedItem;
    };
    const prev = () => {
      onboarding.value = 0;
    };

    return {
      title,
      tabItems,
      onboarding,
      order,
      handleSelectionHistory,
      prev
    };
  }
});
</script>
