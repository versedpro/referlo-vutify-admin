<template>
  <v-content>
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheLayoutContent",
  data: () => ({})
});
</script>
