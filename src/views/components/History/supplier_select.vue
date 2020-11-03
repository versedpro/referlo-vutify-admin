<template>
  <v-container fluid>
    <v-select
      v-model="selected"
      chips
      :items="suppliers"
      item-text="displayName"
      item-value="displayName"
      label="Servie Provider"
      multiple
      @input="handleChange"
    >
      <template v-slot:prepend-item>
        <v-list-item ripple @click="toggle">
          <v-list-item-action>
            <v-icon :color="selected.length > 0 ? 'indigo darken-4' : ''">
              {{ icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Select All
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
      <template v-slot:append-item>
        <v-divider class="mb-2"></v-divider>
        <v-list-item disabled>
          <v-list-item-avatar color="grey lighten-3">
            <v-icon>
              mdi-food-apple
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content v-if="selectAll">
            <v-list-item-title>
              Holy smokes, someone call the fruit police!
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-content v-else-if="selectSome">
            <v-list-item-title>
              Fruit Count
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ selected.length }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-select>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  name: "SupplierSelect",

  props: {
    suppliers: Array
  },

  setup(props, { emit }) {
    const selected = ref([]);

    const handleChange = s => {
      //const suppliers = s.map(e => e.displayName) as Array<string>;
      //alert(JSON.stringify(s));
      emit("onSelection", s);
    };

    const selectAll = computed(() => {
      return selected.value.length === props.suppliers.length;
    });

    const selectSome = computed(() => {
      return selected.value.length > 0 && !selectAll.value;
    });

    const icon = computed(() => {
      if (selectAll.value) return "mdi-close-box";
      else if (selected.value) return "mdi-minus-box";
      else return "mdi-checkbox-blank-outline";
    });

    function toggle() {
      this.$nextTick(() => {
        if (selectAll.value) {
          selected.value = [];
        } else {
          selected.value = props.suppliers.slice();
        }
      });
    }

    return {
      selectAll,
      selectSome,
      handleChange,
      icon,
      toggle,
      selected
    };
  }
});
</script>
