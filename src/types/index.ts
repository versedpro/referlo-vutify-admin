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
