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
          :value="referralLink"
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
import { computed, defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ReferralLinkDialog",

  props: {
    show: Boolean
    // link: String
  },

  setup() {
    const copied = ref(false);

    function closeDialog() {
      this.$emit("close");
    }

    function copyLink() {
      navigator.clipboard.writeText(referralLink.value);
      // navigator.clipboard.writeText(props.link);
      copied.value = true;
    }

    const referralLink = computed(() => {
      const host = `${location.host}`;
      const protocol = host.includes("localhost") ? "http://" : "https://";
      return protocol + host + "/registration?key=sdfsfsd";
    });

    return {
      copyLink,
      closeDialog,
      copied,
      referralLink
    };
  }
});
</script>
