import { Col, Container, Row } from "react-bootstrap";

const getYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          style={{ display: "flex", justifyContent: "center" }}
          className="p-2"
        >
          <span>
            &copy; {getYear()} Ryan Dickey, Kevin Schmidt, and Bryce Postelwait.
            All Rights Reserved.
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
