/* eslint-disable */
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

// import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

import themes from "./vuetifyThemes";
import i18n from "@/locale";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: false,
    themes: themes[0]
  },
  icons: {
    iconfont: "mdi" || "fa"
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params).toString()
  }
});

/**
 * Set theme with number for Vuetify class object
 *
 * @param {Number} index new value
 */
export async function setVuetifyTheme(index) {
  if (vuetify.framework.theme.themes !== themes[index]) {
    console.log(`[Vuetify] Change theme to "${index}"`);
    vuetify.framework.theme.themes.light = themes[index].light || themes[0].light;
    vuetify.framework.theme.themes.dark = themes[index].dark || themes[0].dark;
  } else {
    console.warn(`[Vuetify] "${index}" is current theme `);
  }
}

/**
 * Set the mode to dark/light for the Vuetify class object.
 *
 * @param {Boolean} dark new value
 */
export async function setVuetifyThemeDark(dark) {
  console.log(`[Vuetify] Change theme to "${dark ? "dark" : "light"}"`);
  vuetify.framework.theme.dark = dark;
}

export default vuetify;
