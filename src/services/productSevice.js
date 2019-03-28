import http from "./httpService";
import { apiUrl } from "../config.json";
import * as loginService from "./loginService";

const token = loginService.getJwt();
const apiEndPoint = `${apiUrl}/products`;

export function getAllProducts() {
  return http.get(apiEndPoint);
}

export function getProduct(id) {
  return http.get(`${apiEndPoint}/${id}`);
}

export function saveProduct(product) {
  const formData = new FormData();
  formData.set("title", product.title);
  formData.set("category", product.category);
  formData.set("short", product.short);
  formData.set("long", product.long);
  if (product.image) {
    formData.set("image", product.image, product.image.name);
  }
  formData.set("price", product.price);

  // for (var key of formData.entries()) {
  //   console.log(key[0] + ", " + key[1]);
  // }

  // const config = { headers: { "content-type": "multipart/form-data" } };

  if (product._id) {
    return http.put(`${apiEndPoint}/${product._id}`, formData, {
      headers: { "x-auth-token": token }
    });
  }

  return http.post(`${apiEndPoint}`, formData, {
    headers: { "x-auth-token": token }
  });
}

export function removeProduct(id) {
  return http.delete(`${apiEndPoint}/${id}`, {
    headers: { "x-auth-token": token }
  });
}
