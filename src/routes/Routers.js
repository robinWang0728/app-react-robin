import Home from "pages/Home";
import Shop from "pages/Shop";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default Routers;
