import http from "./httpService";
import { apiUrl } from "../config.json";

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
    return http.put(`${apiEndPoint}/${product._id}`, formData);
  }

  return http.post(`${apiEndPoint}`, formData);
}
