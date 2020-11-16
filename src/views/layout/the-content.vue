<template>
  <v-main class="pb-0">
    <v-sheet tile class="mx-auto" max-width="960" height="100%">
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
import Vue from "vue";

export default Vue.extend({
  name: "TheContent",
  // components: {
  //   TheBottomNavigation
  // },
  data: () => ({})
});
</script>
