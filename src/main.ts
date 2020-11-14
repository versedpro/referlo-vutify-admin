// import 'normalize.css/normalize.css';
import "vuetify/dist/vuetify.min.css";

// import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from "vue";
import vuetify from "./plugins/vuetify";
import i18n from "./locale"; // Internationalization

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./router/permission";
import "./registerServiceWorker";

import CompositionAPI from "@vue/composition-api";

Vue.use(CompositionAPI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");

// export { i18n };
