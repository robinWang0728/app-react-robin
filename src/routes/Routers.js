import Home from "pages/Home";
import Proudct from "pages/Products";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/*" element={<Proudct />} />
    </Routes>
  );
};

export default Routers;
