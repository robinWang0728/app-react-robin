import React from "react";
import Routes from "../../routes/Routers";
import SideBar from "components/SideBar/SideBar.jsx";

const Layout = () => {
  return (
    <div className="page">
      <div className="page__bar">
        <SideBar />
      </div>
      <div className="page__content">
        <Routes />
      </div>
    </div>
  );
};

export default Layout;
