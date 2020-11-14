/**
 * vva v0.0.5
 * (c) 2019 NelsonEAX
 * @license MIT
 */

import colors from "vuetify/es5/util/colors";
// 030710
// 001E2F
// primary: "#2196F3",

// DCB456
// FCDA8B

const dark = {
  primary: "#001E2F",
  secondary: "#424242",
  accent: "#FF4081",
  // accent: "#FF0000",
  success: "#4CAF50",
  error: "#FF5252",
  warning: "#FB8C00",
  info: "#2196F3"
};

/**
 * Vuetify theme options.
 */

// {
//   "Primary": {
//     "50": "#deecfe",
//     "100": "#b9d0e3",
//     "200": "#95afc6",
//     "300": "#718fa9",
//     "400": "#567994",
//     "500": "#3a6380",
//     "600": "#2e5570",
//     "700": "#1f435b",
//     "800": "#113146",
//     "900": "#001e2f"
//   },
//   "Secondary": {
//     "50": "#fef7e3",
//     "100": "#fde8b8",
//     "200": "#fcda8b",
//     "300": "#fbcd5d",
//     "400": "#fbc13c",
//     "500": "#f9b729",
//     "600": "#f8aa26",
//     "700": "#f79824",
//     "800": "#f68722",
//     "900": "#f4691f"
//   }
// }

const themes = [
  {
    light: {
      // primary: "#02101b",
      // primary: "#e2b95a",
      primary: "#001e2f",
      secondary: "#FCDA8B",
      accent: "#82B1FF",
      // accent: "#FF0000",
      success: "#4CAF50",
      error: "#FF5252",
      warning: "#FB8C00",
      info: "#2196F3",
      gold: "#dcb456",
      ads: "rgba(255, 0, 0, 0.5)"
    },
    dark
  },
  {
    light: {
      primary: colors.blue.darken2, // #1976D2
      secondary: colors.grey.darken3, // #424242
      accent: colors.blue.accent1, // #82B1FF
      success: colors.green.base, // #4CAF50
      error: colors.red.accent2, // #FF5252
      warning: colors.amber.base, // #FFC107
      info: colors.blue.base // #2196F3
    },
    dark
  },
  {
    light: {
      primary: colors.blue.base,
      secondary: colors.blueGrey.base,
      accent: colors.lightBlue.base,
      success: colors.green.base,
      error: colors.red.base,
      warning: colors.amber.base,
      info: colors.cyan.base
    },
    dark
  },
  {
    light: {
      primary: colors.blue.darken3,
      secondary: colors.blueGrey.darken3,
      accent: colors.lightBlue.darken3,
      success: colors.green.darken3,
      error: colors.red.darken3,
      warning: colors.amber.darken3,
      info: colors.cyan.darken3
    },
    dark
  },
  {
    light: {
      primary: colors.amber.darken3,
      secondary: colors.green.base,
      accent: colors.indigo.base,
      success: colors.lime.darken3,
      error: colors.red.base,
      warning: colors.deepOrange.base,
      info: colors.cyan.base
    },
    dark
  },
  {
    light: {
      primary: colors.cyan.base,
      secondary: colors.purple.base,
      accent: colors.lightBlue.base,
      success: colors.teal.base,
      error: colors.red.base,
      warning: colors.orange.base,
      info: colors.indigo.base
    },
    dark
  },
  {
    light: {
      primary: colors.indigo.base,
      secondary: colors.cyan.base,
      accent: colors.red.base,
      success: colors.teal.base,
      error: colors.pink.base,
      warning: colors.purple.base,
      info: colors.deepPurple.base
    },
    dark
  },
  {
    light: {
      primary: colors.red.base,
      secondary: colors.cyan.base,
      accent: colors.blueGrey.base,
      success: colors.teal.base,
      error: colors.brown.base,
      warning: colors.amber.base,
      info: colors.indigo.base
    },
    dark
  }
];
export default themes;
