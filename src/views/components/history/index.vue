<template>
  <v-card tile class="mx-auto" height="100%">
    <v-window v-model="onboarding" vertical>
      <v-window-item>
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
            <orders-history
              :items="items"
              :tab="i"
              @on-selection="handleSelection"
            ></orders-history>
          </v-tab-item>
        </v-tabs-items>
      </v-window-item>
      <orders-chat-detail :order="order" @click="prev"></orders-chat-detail>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, computed } from "@vue/composition-api";
import { Items } from "./json-data";

export default defineComponent({
  name: "History",

  components: {
    OrdersHistory: () => import("./orders-history.vue"),
    ReferloAvatar: () => import("@/views/widget/referlo-avatar.vue"),
    OrdersChatDetail: () => import("./orders-chat-detail.vue")
  },

  setup() {
    const vm = getCurrentInstance();

    const itemsPerPage = ref(4);
    const items = ref(Items);
    // const title = ref(vm.$t("history.title");
    const tab = ref(0);

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

    const handleSelection = (selected) => {
      const currentItems = items.value.filter((item) => {
        return item.status == selected.tab.value;
      });
      const selectedItem = currentItems[selected.selected];
      console.log(selected.selected, selectedItem);
      onboarding.value += 1;
      order.value = selectedItem;
    };

    const prev = () => {
      onboarding.value = 0;
    };

    return {
      itemsPerPage,
      title,
      items,
      tab,
      tabItems,
      sheet,
      onboarding,
      handleSelection,
      prev,
      order
    };
  }
});
</script>
