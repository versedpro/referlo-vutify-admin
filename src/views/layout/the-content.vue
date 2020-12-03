<template>
  <v-main class="pb-0 grey">
    <v-sheet tile class="mx-auto" max-width="960" height="calc(100vh - 48px">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
      <!-- <the-bottom-navigation /> -->
    </v-sheet>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TheContent"
});
</script>
