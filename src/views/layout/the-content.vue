<template>
  <v-content>
    <v-sheet tile color="red" class="mx-auto" max-width="960" height="100%">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
      <the-bottom-navigation />
    </v-sheet>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import TheBottomNavigation from "./the-bottom-navigation.vue";

export default Vue.extend({
  name: "TheContent",
  components: {
    TheBottomNavigation
  },
  data: () => ({})
});
</script>
