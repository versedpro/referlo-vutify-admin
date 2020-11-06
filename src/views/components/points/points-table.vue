<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Date
          </th>
          <th class="text-left">
            Product
          </th>
          <th class="text-left">
            Points
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.productName }}</td>
          <td>{{ item.pointsEarned }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "PointsTable",

  props: {
    items: Array
  },

  setup() {
    const image = ref("https://cdn.vuetifyjs.com/images/cards/cooking.png");
    return { image };
  }
});
</script>
