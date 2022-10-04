import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "components/UI/product-card/ProductCard";
import { Link, Route, Routes } from "react-router-dom";
import AddProductForHookForm from "./AddProductForHookForm";
import AddProductForFormik from "./AddProductForFormik";

const Proudct = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.error("Error: ", err);
      });
    setProductList(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="proudct">
      <Link to="addProductForHookForm">New ProductForHookForm</Link>
      <Link to="addProductForFormik">New AddProductForFormik</Link>
      <Routes>
        <Route path="addProductForHookForm" element={<AddProductForHookForm/>} />
        <Route path="addProductForFormik" element={<AddProductForFormik/>} />
        <Route
          path=""
          element={
            <section className="proudct__list">
              {productList.map((product) => (
                <ProductCard item={product} />
              ))}
            </section>
          }
        />
      </Routes>
    </div>
  );
};

export default Proudct;
