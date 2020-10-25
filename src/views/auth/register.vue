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
              <h1 class="text-center my-4 primary--text">
                Vue Vuetify Admin Template
              </h1>
            </div>
            <v-form>
              <v-text-field
                v-model="model.email"
                append-icon="mdi-account"
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <localization />
            <v-btn icon>
              <v-icon color="blue">
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="red">
                mdi-google
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="light-blue">
                mdi-twitter
              </v-icon>
            </v-btn>
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
      confirm: "password"
    });

    const loading = ref(false);

    function login() {
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
