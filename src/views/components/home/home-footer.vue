<template>
  <v-footer v-if="$vuetify.breakpoint.smAndDown" color="gold" app>
    <v-card-text class="text-center py-2">
      <app-button class="mr-3" :text="$t('home.referPeople')" @on-click="referPeople" />
      <app-button class="ml-3" :text="$t('home.referProduct')" @on-click="referProduct" />
    </v-card-text>
  </v-footer>
  <v-footer v-else color="gold" absolute>
    <v-card-text class="text-center py-2">
      <app-button class="mr-3" :text="$t('home.referPeople')" @on-click="referPeople" />
      <app-button class="ml-3" :text="$t('home.referProduct')" @on-click="referProduct" />
    </v-card-text>
  </v-footer>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "HomeFooter",
  components: {
    AppButton: () => import("@/views/widget/app-button.vue")
  },

  setup(_, { root, emit }) {
    const referPeople = () => {
      emit("on-show", true);
    };

    const referProduct = () => {
      root.$router.push("/products");
    };

    return {
      referPeople,
      referProduct
    };
  }
});
</script>
