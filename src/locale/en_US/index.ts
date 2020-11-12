import route from "./route";
import * as components from "@/demo/locale/en_US/components";

export default {
  route,
  components,
  toolbar: {
    appname: "Application",
    settings: "Settings",
    profile: "Profile",
    logout: "Logout"
  },
  settings: {
    title: "Theme Settings",
    default: "Set Default",
    version: "Version",
    position: "Position of elements",
    theme: "Theme",
    dark: "Dark theme",
    toolbarDense: "Toolbar dense",
    navbarDense: "Navbar dense",
    navbarLogo: "Navbar logo",
    settingsBtn: "Setting btn",
    footer: "Footer"
  },
  login: {
    titleIn: "Sing In Form",
    titleUn: "Sing Un Form",
    appTitle: "The Referlo ",
    login: "Login",
    register: "Register",
    email: "Email",
    phone: "Phone",
    password: "Password",
    confirm: "Confirm"
  },
  orders: {
    referredBy: "Referred By",
    clientName: "Client",
    productName: "Product",
    status: "Status",
    email: "Email",
    password: "Password",
    confirm: "Confirm"
  },
  products: {
    product: "Product/Service:",
    orderNow: "Order Now",
    serviceProvider: "Service Provider",
    validUntil: "Valid Until:"
  },
  referal: {
    clientName: "Client",
    phone: "Phone",
    email: "Email",
    address: "Address",
    productName: "Product",
    remark: "Remark"
  },
  bottomNavigation: {
    home: "Home",
    products: "Products",
    history: "History",
    points: "Points",
    account: "Account"
  },
  home: {
    referProduct: "Refer Product",
    referPeople: "Refer People",
    referal: "Make a referal",
    referredTotal: "Referral Total:",
    memberSince: "Member since",
    processing: "Processing",
    successful: "Success",
    unsuccessful: "Unsuccessful",
    points: "Points"
  },
  errors: {
    whoops: "Whoops",
    back: "Get me out of here!",
    301: "Moved Permanently",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error"
  },
  guide: {
    description:
      "The guide page is useful for some people who entered the project for " +
      "the first time. You can briefly introduce the features of the project. Demo is based on",
    button: "Show Guide"
  },
  ui: {
    switch: "Switch Language",
    theme: "Switch Theme",
    success: "Success",
    error: "Error",
    warning: "Warning",
    info: "Info",
    primary: "Primary",
    secondary: "Secondary",
    default: "Default",
    accent: "Accent",
    firstName: "First Name",
    lastName: "Last Name",
    email: "E-mail"
  }
};
