<template>
  <v-card tile flat height="100%">
    <v-toolbar dark>
      <v-btn icon @click="handleBackButton">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title>Product Detail</v-toolbar-title>
    </v-toolbar>
    <v-img :src="item.src" :aspect-ratio="1.91 / 1" position="top center"></v-img>
    <v-card-text class="pa-0 mb-6 px-4 primary--text">
      <v-list two-line class="pa-0">
        <v-list-item class="pa-0">
          <v-list-item-content class="pa-0">
            <v-list-item-title v-text="item.productName"></v-list-item-title>
            <v-list-item-subtitle v-text="item.supplierName"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-spacer></v-spacer>
            <v-list-item-action-text v-text="item.points"></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-divider class="mb-4 mt-2"></v-divider>
      </v-list>
      <p v-html="item.productDescription"></p>
    </v-card-text>
    <v-card class="mx-4 mt-6 mb-16" tile flat>
      <v-expansion-panels v-model="panel" :readonly="readonly">
        <v-expansion-panel focusable class="mb-4">
          <v-alert
            border="bottom"
            color="gold"
            colored-border
            dense
            class="pa-4 ma-0 primary rounded-b-0"
          >
            <v-expansion-panel-header hide-actions disable-icon-rotate class="pa-0"
              ><v-row class="pa-0 ma-0 d-flex justify-space-between">
                <v-icon class="gold--text">mdi-hand-pointing-down</v-icon>
                <p class="ma-0 gold--text">Order Now</p>
              </v-row>
            </v-expansion-panel-header>
          </v-alert>
          <v-expansion-panel-content>
            <v-form class="mx-4 mx-sm-12 pb-8" ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :label="$t('referal.clientName')"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('referal.email')"
                required
              ></v-text-field>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                :label="$t('referal.phone')"
                required
              ></v-text-field>
            </v-form>
            <v-card-action
              ><v-btn :disabled="!valid" color="gold" class="mr-4" @click="submit">
                <v-icon left> mdi-check-circle </v-icon>Submit</v-btn
              >
              <v-btn color="primary" class="mr-4" @click="reset">
                <v-icon left> mdi-reload</v-icon>Reset
              </v-btn>
            </v-card-action>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ProductDetails",
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  setup() {
    const panel = ref(0);
    const readonly = ref(false);
    function handleBackButton() {
      this.$emit("on-back-button");
    }

    return {
      handleBackButton,
      panel,
      readonly
    };
  }
});
</script>
