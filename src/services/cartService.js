const cartKey = "cart";

export function getCartsFromStorage() {
  return JSON.parse(localStorage.getItem(cartKey));
}

export function setCartsToStorage(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}
