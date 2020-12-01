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
  color: Array<any>,
  legend: Object,
  series: Array<any>,
  title: Object,
  tooltip: object
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

export interface Industry{
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

export interface Product{
  productName: string;
  supplierId: number;
  supplierName: string;
  points: number;
  rank: number;
  src: string;
  productDescription: string; 
}

export interface Order{
  orderNo: string;
  orderDate: string;
  productName: string;
  supplierName: string;
  referloId: number;
  referredBy: string;
  clientName: string;
  status: number;
}

export interface Person{
  name: string;
  file: string;
  children: Array<Children>;
}

export interface Children{
  name: string;
  file: string;
}