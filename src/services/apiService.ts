import Axios from "axios";
import { Industry, ReferloChartInfo, Order, Person } from "@/types";

export class ApiService {
  getApiVersion() {
    return Axios.get("GetApiVersion");
  }

  getJsonData() {
    return Axios.get("GetJsonData");
  }

  async getPieChartOption(): Promise<ReferloChartInfo[]> {
    let response: ReferloChartInfo[] = [];
    try {
      const { data } = await Axios({
        url: "/api/GetPieChartData"
      });

      response = data;
      return response;
    } catch (error) {
      return response;
    }
  }

  async getIndustries(): Promise<Industry[]> {
    let response: Industry[] = [];
    try {
      const { data } = await Axios({
        url: "/api/GetIndustries"
      });
      response = data.industries;
      return response;
    } catch (error) {
      return response;
    }
  }

  async getOrders(): Promise<Order[]> {
    let response: Order[] = [];
    try {
      const { data } = await Axios({
        url: "/api/GetOrders"
      });
      response = data.orders;
      return response;
    } catch (error) {
      return response;
    }
  }

  async getPeople(): Promise<Person[]> {
    let response: Person[] = [];
    try {
      const { data } = await Axios({
        url: "/api/GetPeople"
      });
      response = data.people;
      return response;
    } catch (error) {
      return response;
    }
  }
}
