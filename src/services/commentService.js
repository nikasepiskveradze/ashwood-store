import http from "./httpService";
import { apiUrl } from "../config.json";
import * as loginService from "./loginService";

const token = loginService.getJwt();
const apiEndPoint = `${apiUrl}/comments`;

export function addComment(data) {
  return http.post(apiEndPoint, data, { headers: { "x-auth-token": token } });
}

export function getProductComments(productId) {
  return http.get(`${apiEndPoint}/${productId}`);
}
