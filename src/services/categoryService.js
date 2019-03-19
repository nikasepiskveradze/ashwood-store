import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = `${apiUrl}/category`;

export function getProductCategories() {
  return http.get(apiEndPoint);
}
