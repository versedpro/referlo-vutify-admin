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
    titleIn: "登录",
    titleUn: "注册",
    appTitle: "REFER ",
    login: "登录",
    register: "注册",
    email: "电邮",
    phone: "电话",
    password: "密码",
    confirm: "确认"
  },
  orders: {
    referredBy: "轉介人",
    clientName: "客戶",
    productName: "产品",
    status: "状态",
    email: "Email",
    password: "Password",
    confirm: "Confirm"
  },
  products: {
    product: "产品 / 服务:",
    orderNow: "下订单",
    serviceProvider: "产品供应商",
    validUntil: "有效期至:"
  },
  referal: {
    clientName: "客戶",
    phone: "电话",
    email: "电邮",
    address: "地址",
    productName: "產品",
    remark: "備註"
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
