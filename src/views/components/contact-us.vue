<template>
  <v-card tile class="mx-auto" height="100%">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>
    <v-form class="mx-4 mx-sm-12 py-16" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        outlined
        v-model="phone"
        :rules="phoneRules"
        :label="$t('referal.phone')"
        required
      ></v-text-field>
      <v-text-field
        outlined
        v-model="alias"
        :rules="aliasRules"
        :label="$t('referal.alias')"
        required
      ></v-text-field>
      <v-textarea
        auto-grow
        outlined
        v-model="content"
        :rules="contentRules"
        :label="$t('referal.remark')"
        required

      ></v-textarea>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!valid" color="gold" class="mr-4" @click="submit">
        <v-icon left> mdi-check-circle </v-icon>{{ $t("products.submit") }}
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ContactUs",

  setup() {
    const title = "Contact Us";
    const valid = ref(true);
    const form = ref(null);
    const content = ref("");
    const alias = ref("");
    const phone = ref("");

    const contentRules = ref([
      (v) => !!v || "Content is required",
      (v) => (v && v.length >= 10) || "Content must be more than 10 characters"
    ]);
    const aliasRules = ref([
      (v) => !!v || "Alias is required",
      (v) => (v && v.length <= 20) || "Alias must be valid"
    ]);
    const phoneRules = ref([
      (v) => !!v || "Phone Number is required",
      (v) => (v && v.length <= 15) || "Phone Number must be valid"
    ]);

    const submit = async () => {
      var isValid = form.value.validate();
      if (isValid) {
        var order = {
          referloId: 1,
          contactPhone: phone.value,
          contactEmail: alias.value,
          contactContent: content.value
        };
        console.log(order);
      }
    };

    return {
      title,
      valid,
      form,
      content,
      aliasRules,
      phoneRules,
      contentRules,
      submit
    };
  }
});
</script>
