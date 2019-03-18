import http from "./httpService";
import { apiUrl } from "../config.json";
import _ from "lodash";

const apiEndPoint = `${apiUrl}/users`;

// Registers User
export function register(data) {
  return http.post(
    apiEndPoint,
    _.pick(data, ["name", "email", "password", "age", "birthday", "balance"])
  );
}
