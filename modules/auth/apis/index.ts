import axios from "axios";
import { url } from "@/config/url";
import { IRegister } from "../types/register.type";

class AuthApi {
  static register = async (data: IRegister) => {
    const result = await axios.post(`${url}/register`, data);

    return result.data;
  };
}

export default AuthApi;
