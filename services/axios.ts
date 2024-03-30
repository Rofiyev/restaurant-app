import axios from "axios";
import { getToken } from "@/helpers/persistaneStorage";

axios.defaults.baseURL = "https://npspersonal.uz/api/v1";

axios.interceptors.request.use(function (config) {
  const token: { access: string; refresh: string } = getToken();

  config.headers.Authorization = token ? `Bearer ${token.access}` : "";
  return config;
});

export default axios;
