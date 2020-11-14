export interface ReferloChartInfo {
  data?: {
    wip: number;
    referred: number;
    completed: number;
  };
  legend?: {
    wip: string;
    referred: string;
    completed: string;
  };
  title?: {
    text: string;
    subtext: string;
  };
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
