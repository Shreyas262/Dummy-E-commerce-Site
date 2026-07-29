import apiClient from "./axios";

// fetching products data from axios api client
export const getProducts = async () => {
  const res = await apiClient.get("/products");
  return res.data;
};

export const getProduct = async (id) => {
  const res = await apiClient.get(`/products/${id}`);
  return res.data;
};