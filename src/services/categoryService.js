import http from "./httpService";
import * as loginService from "./loginService";
import { apiUrl } from "../config.json";

const token = loginService.getJwt();
const apiEndPoint = `${apiUrl}/category`;

export function getProductCategories() {
  return http.get(apiEndPoint);
}

export function addCategory(name) {
  return http.post(
    apiEndPoint,
    { name },
    { headers: { "x-auth-token": token } }
  );
}

export function deleteCategory(id) {
  return http.delete(`${apiEndPoint}/${id}`, {
    headers: { "x-auth-token": token }
  });
}
