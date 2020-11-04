<template>
  <v-sheet class="mx-auto grey px-5 py-3">
    <!-- <span class="subheading">{{ $t("products.serviceProvider") }}</span> -->

    <v-chip-group
      v-model="selection"
      active-class="deep-purple--text text--accent-4"
      multiple
      mandatory
      show-arrows
      @change="handleChange"
    >
      <v-chip v-for="supplier in suppliers" :key="supplier.id" :value="supplier">
        <v-avatar left>
          <v-img :src="supplier.imagePath"></v-img>
        </v-avatar>
        {{ supplier.displayName }}
      </v-chip>
    </v-chip-group>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "SupplierSlider",

  props: {
    suppliers: Array
  },

  setup(props, { emit }) {
    const selection = ref([props.suppliers[0]]);

    const handleChange = selected => {
      const suppliers = selected.map(e => e.displayName) as Array<string>;
      emit("onSelection", suppliers);
    };

    return {
      selection,
      handleChange
    };
  }
});
</script>
