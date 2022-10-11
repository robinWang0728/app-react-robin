import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "components/UI/product-card/ProductCard";
import { Link, Route, Routes } from "react-router-dom";
import AddProductForHookForm from "./AddProductForHookForm";
import AddProductForFormik from "./AddProductForFormik";
import ProductService from "services/ProductService";

const Proudct = () => {
  const [productList, setProductList] = useState([]);

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.error("Error: ", err);
  //     });
  //   setProductList(response.data);
  // };

  const getProducts = () => {
    ProductService.getAllProduct()
      .then((response) => {
        console.log(response);
        setProductList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateFavor = (data) => {
    const param = { ...data, favor: !data.favor };
    ProductService.updateProduct(param.id, param)
      .then((response) => {
        setProductList((state)=> state.map(product => (product.id === param.id ? { ...param } : product)));
      })
      .catch((e) => {
        console.log(e);
      });
  };


  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="proudct">
      <Link to="addProductForHookForm">New ProductForHookForm</Link>
      <Link to="addProductForFormik">New AddProductForFormik</Link>
      <Routes>
        <Route
          path="addProductForHookForm"
          element={<AddProductForHookForm />}
        />
        <Route path="addProductForFormik" element={<AddProductForFormik />} />
        <Route
          path=""
          element={
            <section className="proudct__list">
              {productList.map((product) => (
                <ProductCard item={product} updateFavor={updateFavor}/>
              ))}
            </section>
          }
        />
      </Routes>
    </div>
  );
};

export default Proudct;
