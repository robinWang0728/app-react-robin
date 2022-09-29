import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "components/UI/product-card/ProductCard";

const Shop = () => {
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
    <div className="shop">
      <section className="shop__proudcts">
        {productList.map((product) => (
           <ProductCard item={product} />
        ))}
      </section>
    </div>
  );
};

export default Shop;
