<template>
  <v-row dense class="panel-group">
    <panel-group-item
      title="New Visits"
      icon="mdi-account-multiple"
      color="orange"
      :value="102400"
    />
    <panel-group-item title="Messages" icon="mdi-message-bulleted" color="blue" :value="81212" />
    <panel-group-item title="Shoppings" icon="mdi-cart" color="green" :value="13600" />
  </v-row>
</template>

<script lang="ts">
import PanelGroupItem from "./PanelGroupItem.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PanelGroup",
  components: {
    PanelGroupItem
  }
});
</script>
