/**
 * vva v0.0.5
 * (c) 2020 Sinicone
 * @license MIT
 */

import Vue from "vue";
import VueI18n from "vue-i18n";

import { settings } from "@/config";
import vuetify from "@/locale/vuetify";
import { en, hk } from "./available";

Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    $vuetify: vuetify.en
  },
  // zh: {
  //   ...zh,
  //   $vuetify: vuetify.zh
  // },
  hk: {
    ...hk,
    $vuetify: vuetify.zhHant
  }
};

/**
 * VueI18n instance
 */
const i18n = new VueI18n({
  // set locale options: en_US | zh_CN | zh_TW
  locale: settings.locale,
  fallbackLocale: settings.fallbackLocale,
  // set locale messages
  messages
});

/**
 * Set locale to new value at Vue and Vuex.
 *
 * @param {Boolean} newLocale themeDark new value
 */
export async function setLocale(locale) {
  if (i18n.locale !== locale) {
    console.log(`[Locale] Set to "${locale}"`);
    i18n.locale = locale || settings.locale;
  } else {
    console.warn(`[Locale] "${locale}" is current`);
  }
}

export default i18n;
