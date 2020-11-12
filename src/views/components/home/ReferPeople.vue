<template>
  <v-dialog :value="show" @click:outside="$emit('close')" width="500">
    <v-card>
      <v-card-title class="py-1 px-3">
        <v-spacer></v-spacer>
        <v-btn text icon color="primary" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text> Here is the link to your </v-card-text>
      <v-card-text>
        <v-text-field
          :value="link"
          filled
          dense
          readonly
          rounded
          append-icon="mdi-content-copy"
          @click:append="copyLink"
        ></v-text-field>
      </v-card-text>
      <v-snackbar :value="copied">Link copied</v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ReferPeople",

  props: {
    show: Boolean,
    link: String
  },
  setup() {
    const copied = ref(false);
    function copyLink() {
      navigator.clipboard.writeText(this.link);
      this.copied = true;
    }
    return {
      copyLink,
      copied
    };
  }
});
</script>
