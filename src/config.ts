import * as packageJson from "../package.json";

// export const title: string = packageJson.title;
// /**
//  * @type {String} '0.0.1'
//  * @description Application version.
//  * After the release of the new version, it is reset to the default settings.
//  */
export const version: string = packageJson.version;

/**
 * @type {String} 'localStorage' | 'sessionStorage'
 * @description Storage for user settings and sessions.
 */
export const storage = "localStorage";

/**
 * @type {String} 'vva_'
 * @description Key prefix for data in storage.
 */
export const prefix = "vva_";

/**
 * @type {Number} 604800
 * @description User session storage time in seconds.
 * Default 7 days
 */
export const ttl = /* 7 * 24 * 60 * */ 60;

/**
 * @type {Object}
 * @description Default application settings.
 */
export const settings = {
  locale: process.env.VUE_APP_I18N_LOCALE || 'hk',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'hk',
  dense: true,
  footer: true,
  navbar: {
    show: false,
    dense: false,
    logo: false
  },
  fullscreen: {
    show: false,
    btn: true
  },
  settingsPanel: {
    show: false,
    btn: true
  },
  theme: {
    index: 0,
    dark: false
  }
};
