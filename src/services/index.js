const API_URI = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

export const getProducts = () => {
  return fetch(API_URI).then((response) => response.json());
}