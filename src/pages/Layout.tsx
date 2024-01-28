import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Banner from "../components/Banner";

const Layout = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Banner />
      <Outlet />
    </>
  );
};

export default Layout;
