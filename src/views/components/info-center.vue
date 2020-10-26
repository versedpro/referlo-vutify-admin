<template>
  <v-card>
    <!-- <v-toolbar color="primary" dark flat>
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="ml-5">線資訊</v-toolbar-title>
    </v-toolbar> -->
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-text>
      <v-treeview v-model="tree" :items="items" item-key="name" open-all>
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? "mdi-account-box-multiple-outline" : "mdi-account-box-multiple" }}
          </v-icon>

          <!-- <v-icon v-else>
            {{ files[item.file] }}
          </v-icon> -->
          <v-icon v-else>
            {{ item.file }}
          </v-icon>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_referrer_list";

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "InfoCenter",

  setup() {
    const items = ref(Items);
    const tree = ref([]);

    return {
      tree,
      items
    };
  }
});
</script>
