<template>
  <v-container class="container--fluid fill-height primary">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="elevation-5 pa-3">
          <v-card-text>
            <div class="layout column align-center">
              <img
                src="img/icons/android-icon-144x144.png"
                alt="Vue Vuetify Admin Logo"
                width="120"
                height="120"
              />
              <h1 class="text-center my-4 primary--text">Register</h1>
            </div>
            <v-form>
              <v-text-field
                v-model="model.phone"
                append-icon="mdi-phone"
                name="phone"
                :label="$t('login.phone')"
                type="text"
                required
              />
              <v-text-field
                v-model="model.name"
                append-icon="mdi-account"
                name="name"
                :label="$t('login.name')"
                type="text"
                required
              />

              <v-text-field
                v-model="model.email"
                append-icon="mdi-at"
                name="email"
                :label="$t('login.email')"
                type="email"
                required
                autocomplete="username"
              />
              <v-text-field
                v-model="model.password"
                append-icon="mdi-lock"
                name="password"
                :label="$t('login.password')"
                type="password"
                required
                autocomplete="new-password"
              />
              <v-text-field
                v-model="model.confirm"
                append-icon="mdi-lock"
                name="confirm"
                :label="$t('login.confirm')"
                type="password"
                required
                autocomplete="new-password"
              />
              <v-select
                v-model="model.select"
                :items="model.sex"
                :error-messages="selectErrors"
                label="Sex"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
              <v-select
                v-model="model.select"
                :items="model.age"
                :error-messages="selectErrors"
                label="Age Group"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <localization />

            <v-spacer />
            <v-btn color="primary" outlined to="/login">
              {{ $t("login.login") }}
            </v-btn>
            <v-btn color="primary" :loading="loading" @click="login">
              {{ $t("login.register") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Localization from "../widget/app-localization.vue";

import { defineComponent, reactive, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Register",
  components: {
    Localization
  },

  setup() {
    const model = reactive({
      email: "admin@vvadmin.io",
      password: "password",
      name: "admin",
      address: "Address",
      confirm: "password",
      phone: "12345678",
      key: "",
      select: null,
      sex: ["Male", "Female", "Not Provided"],
      age: ["Below 10", "10-20", "20-30"]
    });

    const loading = ref(false);

    function login() {
      if (this.$route.query.key) {
        model.key = this.$route.query.key;
      }
      console.log(model);
      loading.value = true;
      setTimeout(() => {
        this.$router.push("/home");
      }, 1000);
    }

    return {
      model,
      loading,
      login
    };
  }
});
</script>
