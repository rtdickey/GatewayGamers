import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Container from "react-bootstrap/esm/Container";

const Layout = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
