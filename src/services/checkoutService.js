import http from "./httpService";
import * as loginService from "./loginService";
import { apiUrl } from "../config.json";

const token = loginService.getJwt();
const apiEndPoint = `${apiUrl}/orders`;

export function checkout(customer, cart) {
  if (token) {
    return http.post(
      apiEndPoint,
      { customer, cart },
      { headers: { "x-auth-token": token } }
    );
  }

  return null;
}
