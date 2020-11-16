<template>
  <v-avatar color="secondary darken-2" :size="size">
    <v-avatar :size="size - 4" class="mx-4" color="primary lighten-1">
      <img alt="Avatar" :src="imgSrc" />
    </v-avatar>
  </v-avatar>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ReferloAvatar",
  props: {
    imgSrc: {
      type: String
    },
    icon: {
      type: String,
      default: "mdi-dots-vertical"
    },
    size: {
      type: Number,
      default: 36
    }
  }
});
</script>
