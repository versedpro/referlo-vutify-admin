<template>
  <v-container
    class="container--fluid fill-height  home-background"
    :style="{ padding: $vuetify.breakpoint.xsOnly ? 0 : 12 }"
  >
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="elevation-5 pa-3" :class="{ isMobile: $vuetify.breakpoint.xsOnly }">
          <v-card-text>
            <div class="my-10 layout column align-center">
              <img
                src="img/icons/icon-1024x1024.png"
                alt="Vue Vuetify Admin Logo"
                width="120"
                height="120"
              />
              <!-- <h1 class="text-center my-4 primary--text">
                {{ $t("login.appTitle") }}
              </h1> -->
            </div>
            <v-form>
              <v-text-field
                v-model="model.phone"
                append-icon="mdi-phone"
                name="email"
                :label="$t('login.phone')"
                type="email"
                required
                autocomplete="username"
              />
              <v-text-field
                v-model="model.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :label="$t('login.password')"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                name="password"
                required
                autocomplete="current-password"
              />
            </v-form>
          </v-card-text>
          <v-card-text> </v-card-text>
          <v-card-actions>
            <localization />

            <v-spacer />
            <v-btn color="primary" outlined to="/register">
              {{ $t("login.register") }}
            </v-btn>
            <v-btn color="primary" :loading="loading" @click="login">
              {{ $t("login.login") }}
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
    Localization: () => import("../widget/app-localization.vue")
  },

  setup() {
    const model = reactive({
      phone: userAdmin.phone,
      password: userAdmin.password
    });

    const loading = ref(false);
    const showPassword = ref(false);

    async function login() {
      // $store
      await this.$store.dispatch("LoginByPhone", {
        phone: model.phone,
        password: model.password
      });
      await this.$router.push(this.$route.query.redirect || "/");
    }

    return {
      model,
      loading,
      showPassword,
      login
    };
  }
});
</script>

<style scoped>
/* html {
  overflow-y: auto;
} */

.home-background {
  background: url("~@/assets/img/amsl_background.png");
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: center center;
}
.isMobile {
  box-shadow: none !important;
  background-color: #f5fbff;
}
</style>
