<template>
  <v-dialog :value="show" persistent max-width="290" @click:outside="handleCancel">
    <v-card>
      <v-card-title class="headline text--gold">{{
        $t("login.confirm") + $t("login.password")
      }}</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :label="$t('login.password')"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          name="password"
          required
          autocomplete="current-password"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="handleCancel">Cancel</v-btn>
        <v-btn color="green darken-1" text @click="handleConfirm">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "PasswordPrompt",

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
      if (password.value == "abcd1234") {
        this.$emit("on-confirm");
      } else {
        this.$emit("on-close");
      }
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
