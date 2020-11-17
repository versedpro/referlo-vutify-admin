<template>
  <v-card class="my-auto pb-0 red" height="fill-height" width="100%">
    <v-navigation-drawer permanent width="fill-width" height="100vh" color="transparent">
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer dark width="180" permanent>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="item in items" :key="item.title">
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <!-- <v-list class="grow">
          <v-list-item v-for="link in links" :key="link" link>
            <v-list-item-title v-text="link"></v-list-item-title>
          </v-list-item>
        </v-list> -->
        <v-card class="grow">
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-row>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard",

  props: {
    item: Object
  },

  setup() {
    const items = [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" }
    ];
    const links = ["Home", "Contacts", "Settings"];
    const mini = true;
    const selectedItem = ref(1);

    const image = ref("https://cdn.vuetifyjs.com/images/cards/cooking.png");
    return {
      image,
      items,
      links,
      mini,
      selectedItem
    };
  }
});
</script>

<style scoped>
.isMobile {
  padding: 0 16px !important;
}
.isMobileCard {
  padding: 2px 10px !important;
}
</style>
