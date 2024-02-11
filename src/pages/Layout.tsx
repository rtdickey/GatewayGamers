import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <ResponsiveNavbar />
        <Banner />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
