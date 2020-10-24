/**
 * vva v0.0.5
 * (c) 2020 Sinicone
 * @license MIT
 */

import Vue from "vue";
import VueI18n from "vue-i18n";

import { settings } from "@/config_ts";
import vuetify from "@/locale/vuetify";
import en from "./en_US";
import zh from "./zh_CN";
import zhHant from "./zh_TW";

Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    $vuetify: vuetify.en
  },
  zh: {
    ...zh,
    $vuetify: vuetify.zh
  },
  hk: {
    ...zhHant,
    $vuetify: vuetify.zhHant
  }
};

/**
 * Available locales
 */
export const locales = [
  {
    title: "繁體",
    locale: "hk",
    display: "繁",
    abbr: "HKG"
  },
  {
    title: "簡體",
    locale: "zh",
    display: "簡",
    abbr: "CHN"
  },
  {
    title: "English",
    locale: "en",
    display: "Eng",
    abbr: "ENG"
  }
];

/**
 * VueI18n instance
 */
const i18n = new VueI18n({
  // set locale options: en_US | zh_CN | zh_TW
  locale: settings.locale,
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
    // i18n.locale = locale || settings.locale;
    i18n.locale = locale || "en";
  } else {
    console.warn(`[Locale] "${locale}" is current`);
  }
}

export default i18n;
