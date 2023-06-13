import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

const Layout = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Outlet />
    </>
  );
};

export default Layout;
