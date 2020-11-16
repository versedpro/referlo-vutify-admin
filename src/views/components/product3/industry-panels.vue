<template>
  <v-expansion-panels inset>
    <v-expansion-panel v-for="(item, i) in industries" :key="i">
      <v-expansion-panel-header class="pa-0">
        <v-list dense>
          <v-list-item>
            <v-list-item-icon class="my-4">
              <v-icon> mdi-flag</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.industryName"
                :class="{ MobileMax: $vuetify.breakpoint.xsOnly }"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-subtitle
                v-html="item.points"
                class="font-weight-bold amber--text text-h4"
                style="line-height: 2rem"
              ></v-list-item-subtitle>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col v-for="(product, i) in item.products" :key="i" cols="12" class="py-0">
            <v-divider></v-divider>
            <v-card class="mx-auto" flat tile>
              <v-list one-line class="pa-0">
                <template>
                  <v-list-item :key="product.productName">
                    <v-list-item-content>
                      <v-list-item-title v-html="product.productName"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action class="ma-1">
                      <v-list-item-subtitle
                        class="font-weight-medium amber--text text--lighten-2 text-h5"
                      >
                        {{ item.points }}
                      </v-list-item-subtitle>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "IndustryPanels",

  props: {
    industries: Array
  },

  setup() {
    const image = ref("https://cdn.vuetifyjs.com/images/cards/cooking.png");
    return { image };
  }
});
</script>
<style scoped>
.MobileMax {
  max-width: 100px !important;
}
</style>
