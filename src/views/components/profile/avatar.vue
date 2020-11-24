<template>
  <div>
    <v-btn
      fab
      depressed
      color="gold"
      @click="openFileDialog"
      class="transparent pa-0"
      width="128"
      height="128"
    >
      <v-avatar size="120" class="mx-4" color="primary lighten-1">
        <img :src="src" alt="Avatar" />
      </v-avatar>
      <input ref="uploader" @change="preview" class="d-none" type="file" accept="image/*" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "Avatar",

  props: {
    path: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const src = ref(props.path);

    function preview(e) {
      src.value = URL.createObjectURL(e.target.files[0]);
      this.$emit("on-change", e.target.files[0]);
    }

    function openFileDialog() {
      this.$refs.uploader.click();
    }

    return {
      src,
      preview,
      openFileDialog
    };
  }
});
</script>
