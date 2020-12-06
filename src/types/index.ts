import { Ref } from "@vue/composition-api";

export interface HomePageData {
  ads: Array<Ad>;
  person: Person;
}

export interface Ad {
  supplier_product_id: number;
  product_name: string;
  image_path: string;
}

export interface ReferloChartInfo {
  // data?: {
  //   wip: number;
  //   referred: number;
  //   completed: number;
  // };
  // title?: {
  //   text: string;
  //   subtext: string;
  // };
  color: Array<any>;
  legend: Object;
  series: Array<any>;
  title: Object;
  tooltip: object;
}

export interface User {
  firstName: string;
  lastName: string;
  twitterHandle: string;
  location: {
    city: string;
    state: string;
  };
}

export interface Industry {
  industryId: number;
  name: {
    en: string;
    zh_CN: string;
    zh_HK: string;
  };
  industryName: string;
  rank: number;
  products: Array<Product>;
}

export interface Product {
  productName: string;
  supplierId: number;
  supplierName: string;
  supplierProductId: number;
  points: number;
  rank: number;
  src: string;
  productDescription: string;
}

export interface ProductDetail {
  product_name: string;
  supplier_id: number;
  supplier_product_id: number;
  supplier_name: string;
  product_id: number;
  points: number;
  ranking: number;
  remarks: string;
  image_path: string;
}

export interface Order {
  orderNo: string;
  orderDate: string;
  productName: string;
  supplierName: string;
  referloId: number;
  referredBy: string;
  clientName: string;
  status: number;
}

export interface OrderProduct {
  referloId: number;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  supplierProductId: number;
  pointsDefault: number;
}

export interface Person {
  name: string;
  file: string;
  children: Array<Children>;
  avatar: string;
  membersince: number;
  points: number;
  referral_completed: number;
  referral_wip: number;
  refereal_submit: number;
}

export interface Children {
  name: string;
  file: string;
}
