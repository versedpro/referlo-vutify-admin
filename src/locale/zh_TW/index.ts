import route from "./route";
import components from "@/demo/locale/zh_CN/components";

export default {
  route,
  components,
  toolbar: {
    appname: "我的应用",
    settings: "设置",
    profile: "资料",
    logout: "退出"
  },
  settings: {
    title: "主题设置",
    default: "设为默认",
    version: "版本",
    position: "元素位置",
    theme: "主题",
    dark: "暗黑主题",
    toolbarDense: "紧凑工具栏",
    navbarDense: "紧凑导航栏",
    navbarLogo: "导航栏Logo",
    settingsBtn: "设置按钮",
    footer: "页脚"
  },
  login: {
    titleIn: "登記",
    titleUn: "注册",
    appTitle: "REFER ",
    login: "登入",
    register: "注册",
    email: "電郵",
    phone: "電話",
    password: "密碼",
    confirm: "確認"
  },
  products: {
    product: "產品 / 服務:",
    orderNow: "落單",
    serviceProvider: "產品供應商",
    validUntil: "有效期至:"
  },
  referal: {
    clientName: "客戶",
    phone: "電話",
    email: "電郵",
    address: "地址",
    productName: "產品",
    remark: "備註"
  },
  bottomNavigation: {
    home: "我係<br/>Refer佬",
    products: "我有嘢<br/>Refer",
    history: "Refer佬<br/>記錄",
    points: "Refer佬<br/>金幣",
    account: "帳戶"
  },
  home: {
    referProduct: "我有嘢Refer",
    referPeople: "我有人Refer",
    referal: "轉介",
    referalTotal: "Refer個案",
    memberSince: "入會年份",
    wip: "跟進中 {0}",
    referred: "已Refer {0}",
    completed: "已成功 {0}",
    points: "已獲取積分"
  },
  errors: {
    whoops: "哦嚯~!",
    back: "返回!",
    301: "Moved Permanently",
    401: "未授权访问",
    403: "禁止访问",
    404: "页面未找到",
    500: "内部服务器错误"
  },
  guide: {
    description:
      "引导页对于第一次进入项目的人来说是很有用的. 你可以简单的介绍一下项目的特性. Demo是基于",
    button: "显示引导信息"
  },
  ui: {
    switch: "切换语言",
    theme: "切换主题",
    success: "成功",
    error: "错误",
    warning: "警告",
    info: "提示",
    primary: "主要",
    secondary: "次要",
    default: "默认",
    accent: "强调",
    firstName: "名",
    lastName: "姓",
    email: "E-mail"
  }
};
