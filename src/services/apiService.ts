import Axios from "axios";
import { Industry, OrderProduct, Order, Person, HomePageData, ProductDetail,OrderChat } from "@/types";

export class ApiService {
  getApiVersion() {
    return Axios.get("GetApiVersion");
  }

  async getHomePageData(referloId: number): Promise<HomePageData> {
    let response: HomePageData;
    try {
      const { data } = await Axios({
        url: "/api/GetHomePageData/" + referloId
      });

      response = data;
      return response;
    } catch (error) {
      return response;
    }
  }

  async getProductDetail(suppProdId: number): Promise<ProductDetail> {
    let response: ProductDetail;
    try {
      const { data } = await Axios({
        url: "/api/GetProductDetail/" + suppProdId
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
      response = data;
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
      response = data;
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

  async makeOrder(orderModel: OrderProduct): Promise<any> {
    let response = null;
    try {
      const { data } = await Axios({
        url: "/SalesOrder",
        method: "POST",
        data: orderModel
      });
      response = data;
      return response;
    } catch (error) {
      return response;
    }
  }

  async getChatMessages(orderId: number): Promise<OrderChat[]>{
    let response = [];
    try {
      const { data } = await Axios({
        url: "/SalesChat/GetComments/" +orderId,
        method: "GET"
      });
      response = data;
      return response;
    } catch (error) {
      return response;
    }
  }
}
