import api from "utils/api";

const getAllProduct = () => {
  return api.get("/product");
};

const getProductById = (id) => {
  return api.get(`/product/${id}`);
};

const createProduct = (data) => {
  return api.post("/product", data);
};

const updateProduct = (id, data) => {
  return api.put(`/product/${id}`, data);
};

const deleteProduct = (id) => {
  return api.delete(`/product/${id}`);
};

const ProductService = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default ProductService;
