<template>
  <v-card tile class="mx-auto green" height="100%">
    <v-container class="py-0">
      <v-row>
        <v-col style="max-width: 200px min-width:150px" class="yellow flex-shrink-1">
          <v-navigation-drawer
            color="white"
            width="150px"
            height="100%"
            disable-resize-watcher
            absolute
            permanent
          >
            <v-list>
              <v-list-item-group v-model="selected" active-class="pink--text" multiple>
                <v-list-item v-for="(item, i) in items" :key="i" link>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <!-- <v-divider vertical></v-divider> -->
        <v-col
          class="pa-6 cyan flex-grow-1 flex-shrink-1"
          cols="6"
          style="min-width: 80px; max-width: 100%"
        >
          <v-card class="red" max-width="100%" height="100%">
            <v-card-title>Title</v-card-title>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
            <v-card-text>Text</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Suppliers } from "@/demo/api/mock_supplier";

export default defineComponent({
  name: "History",

  setup() {
    const itemsPerPage = ref(4);
    const title = "資訊中心";
    const model = ref(null);
    const suppliers = ref(Suppliers);
    const selected = ref([] as Array<string>);

    const items = ref([
      { icon: "mdi-email", text: "Inbox" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisorsggggggggggggg" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-account-supervisor-circle", text: "Supervisors" },
      { icon: "mdi-clock-start", text: "Clock-in" }
    ]);

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
      items,
      suppliers,
      model,
      selected,
      handleSelection
    };
  }
});
</script>
