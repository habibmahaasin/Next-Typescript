import axios from "axios";
import { Information } from "../../domain/entities";
import { http } from "../configs/api";

export const api = {
  getAllUser: async () => {
    const response = await axios.get(http.user, {
        headers : http.headers
      }).then(function ({ data }: { data: Information }) {
        return data.data
      })
    return response
  }
}