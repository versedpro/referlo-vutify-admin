<template>
  <v-sheet class="mx-auto grey px-5 py-3">
    <!-- <span class="subheading">{{ $t("products.serviceProvider") }}</span> -->

    <v-chip-group
      v-model="selection"
      active-class="deep-purple--text text--accent-4"
      multiple
      column
    >
      <v-chip @click="onSelect" v-for="supplier in suppliers" :key="supplier.id" :value="supplier">
        <v-avatar left>
          <v-img :src="supplier.imagePath"></v-img>
        </v-avatar>
        {{ supplier.displayName }}
      </v-chip>
    </v-chip-group>

    <!-- {{ selection }} -->
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "SupplierSlider",

  props: {
    suppliers: Object
  },

  setup(props) {
    const selection = ref([props.suppliers[0]]);

    // const message = computed({
    //   get: () => props.modelValue,
    //   set: value => emit("update:modelValue", value)
    // });

    // function onSelect() {}

    return {
      selection
    };
  }
});
</script>
