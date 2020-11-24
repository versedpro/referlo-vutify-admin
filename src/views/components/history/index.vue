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
import { defineComponent, getCurrentInstance, ref, computed } from "@vue/composition-api";

export default defineComponent({
  name: "History",

  components: {
    OrdersList: () => import("./orders-list.vue"),
    OrdersChatDetail: () => import("./orders-chat-detail.vue")
  },

  setup() {
    const vm = getCurrentInstance();

    const itemsPerPage = ref(4);

    const onboarding = ref(0);
    const order = ref(null);

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

    const handleSelectionHistory = (s) => {
      onboarding.value += 1;
      order.value = s.selectedItem;
    };
    const prev = () => {
      onboarding.value = 0;
    };

    return {
      itemsPerPage,
      title,
      tabItems,
      sheet,
      onboarding,
      order,
      handleSelectionHistory,
      prev
    };
  }
});
</script>
