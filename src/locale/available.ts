import en from "./en_US";
import zh from "./zh_CN";
import zhHant from "./zh_TW";

/**
 * Available locales
 */
const locales = [
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

export { en, zh, zhHant, locales }