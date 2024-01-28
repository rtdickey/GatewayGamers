import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
