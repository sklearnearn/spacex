import axios from "axios";
import endpoints from "./endpoints";
const API = axios.create({
  baseURL: endpoints.ServerBaseURL,
});
export default API;
