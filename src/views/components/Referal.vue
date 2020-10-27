<template>
  <v-card class="pa-10" max-width="1000">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
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

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        :label="$t('referal.phone')"
        required
      ></v-select>

      <!-- <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn> -->

      <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Refereal",

  setup() {
    const valid = ref(true);
    const name = ref("");
    const nameRules = ref([
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ]);
    const email = ref("");
    const emailRules = ref([
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]);
    const select = ref(null);
    const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
    const checkbox = ref(false);

    function validate() {
      this.$refs.form.validate();
    }

    function reset() {
      this.$refs.form.reset();
    }
    function resetValidation() {
      this.$refs.form.resetValidation();
    }
    return {
      valid,
      name,
      nameRules,
      email,
      emailRules,
      select,
      items,
      checkbox,
      validate,
      reset,
      resetValidation
    };
  }
});
</script>
