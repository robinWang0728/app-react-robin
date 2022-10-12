import Contact from "pages/Contact";
import Home from "pages/Home";
import Proudct from "pages/Product/Products";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Routers = () => {
  const Home = React.lazy(() => import("pages/Home"));

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <Suspense fallback={<>Loading Home ...</>}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/product/*" element={<Proudct />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
