import http from "./httpService";
import * as loginService from "./loginService";
import { apiUrl } from "../config.json";

const token = loginService.getJwt();
const apiEndPoint = `${apiUrl}/users/me`;

export function getUserInfo() {
  return http.get(apiEndPoint, { headers: { "x-auth-token": token } });
}
