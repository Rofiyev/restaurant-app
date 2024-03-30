import { getToken } from "@/helpers/persistaneStorage";
import { IToken } from "@/interface";
import axios from "axios";

axios.defaults.baseURL = "https://npspersonal.uz/api/v1";

axios.interceptors.request.use(function (config) {
  const token: IToken = getToken();

  config.headers.Authorization = token ? `Bearer ${token.access}` : "";
  return config;
});

export default axios;
