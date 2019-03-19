import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = `${apiUrl}/products`;

export function getAllProducts() {
  return http.get(apiEndPoint);
}
