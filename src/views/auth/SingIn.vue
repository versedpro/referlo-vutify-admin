<template>
  <v-container class="container--fluid fill-height primary">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="elevation-5 pa-3">
          <v-card-text>
            <div class="layout column align-center">
              <img src="img/icons/logo.png" alt="Vue Vuetify Admin Logo" width="120" height="120" />
              <h1 class="text-center my-4 primary--text">
                AMSL Referlo
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
                autocomplete="current-password"
              />
            </v-form>
          </v-card-text>
          <v-card-text> </v-card-text>
          <v-card-actions>
            <localization />

            <v-spacer />
            <v-btn color="primary" outlined to="/singup">
              {{ $t("login.singUp") }}
            </v-btn>
            <v-btn color="primary" :loading="loading" @click="login">
              {{ $t("login.singIn") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { userAdmin } from "@/api/mock";
import { defineComponent, reactive, ref } from "@vue/composition-api";

export default defineComponent({
  components: {
    Localization: () => import("../widget/AppLocalization.vue")
  },

  setup() {
    const model = reactive({
      email: userAdmin.email,
      password: userAdmin.password
    });

    const loading = ref(false);

    async function login() {
      // $store
      await this.$store.dispatch("LoginByEmail", {
        email: model.email,
        password: model.password
      });
      await this.$router.push(this.$route.query.redirect || "/");
    }

    return {
      model,
      loading,
      login
    };
  }
});
</script>
