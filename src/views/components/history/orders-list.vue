<template>
  <v-card>
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
      <v-tab-item v-for="(tabItem, i) in tabItems" :key="i">
        <orders-history :items="items" :tab="i" @on-selection="handleSelection"></orders-history>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { ApiService } from "@/services/apiService";
import { Order } from "@/types/index";

export default defineComponent({
  name: "OrdersList",

  components: {
    ReferloAvatar: () => import("@/views/widget/referlo-avatar.vue"),
    OrdersHistory: () => import("./orders-history.vue")
  },

  props: {
    tabItems: Array,
    title: String
  },

  setup(props, { emit }) {
    // const items = ref(Items);
    const tab = ref(0);

    const apiService = new ApiService();

    const items = ref([] as Order[]);
    const refImage = ref(`${process.env.VUE_APP_API_URL}/${1}/referlo`);
    
    const getOrders = async (): Promise<void> => {
      const response = await apiService.getOrders();
      items.value = response;
    };
    getOrders();

    const handleSelection = (selected) => {
      const currentItems = items.value.filter((item) => {
        return item.status == selected.tab.value;
      });
      const selectedItem = currentItems[selected.selected];

      // Navigate detail window
      emit("on-selection-history", { selectedItem });
    };

    return {
      items,
      tab,
      handleSelection
    };
  }
});
</script>
