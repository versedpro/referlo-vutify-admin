<template>
  <v-dialog :value="show" max-width="480px" @click:outside="closeDialog">
    <v-card>
      <v-card-title class="py-1 px-3">
        <v-spacer></v-spacer>
        <v-btn text icon color="primary" @click="closeDialog">
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
      <v-snackbar timeout="2000" v-model="copied">Link copied</v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ReferralLinkDialog",

  props: {
    show: Boolean,
    link: String
  },

  setup(props) {
    const copied = ref(false);

    function closeDialog() {
      this.$emit("close");
    }

    function copyLink() {
      navigator.clipboard.writeText(props.link);
      copied.value = true;
    }

    return {
      copyLink,
      closeDialog,
      copied
    };
  }
});
</script>
