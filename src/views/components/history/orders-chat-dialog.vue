<template>
  <v-dialog :value="show" persistent fullscreen max-width="290" @click:outside="handleCancel">
    <v-card height="100%" color="blue">
      <!-- put your timeline here -->
      <v-footer absolute>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="handleCancel">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="handleConfirm">Confirm</v-btn>
        </v-card-actions>
      </v-footer>
    </v-card>
  </v-dialog>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "OrdersChat",

  props: {
    show: Boolean,
    value: Boolean
  },
  setup() {
    const password = ref("");
    const formPassword = ref(null);
    const showPassword = ref(false);

    function handleCancel() {
      this.$emit("on-close");
    }

    function handleConfirm() {
      this.$emit("on-close");
    }

    return {
      password,
      formPassword,
      handleCancel,
      handleConfirm,
      showPassword
    };
  }
});
</script>
