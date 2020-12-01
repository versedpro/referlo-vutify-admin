import Axios from "axios"
import { ReferloChartInfo, User } from "@/types"

export class ApiService {

  getApiVersion() {
    return Axios.get("GetApiVersion");
  }

  getJsonData() {
    return Axios.get("GetJsonData");
  }

  async getPieChartOption(): Promise<ReferloChartInfo[]> {
    let response: ReferloChartInfo[] = []
    try {
      const { data } = await Axios({
        url: "/api/GetJsonData"
      })

      response = data
      return response
    } catch (error) {
      return response
    }
  }
}
