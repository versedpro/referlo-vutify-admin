<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left">
            Product
          </th>
          <th class="text-left">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td><v-icon color="orange" small>mdi-arrow-right-bold-box</v-icon></td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";

export default defineComponent({
  name: "History",

  setup() {
    const itemsPerPage = ref(4);
    const desserts = ref(Items);

    return {
      itemsPerPage,
      desserts
    };
  }
});
</script>
