import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";

const Layout = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Banner />
      <Container fluid>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
