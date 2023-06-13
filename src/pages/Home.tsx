import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <Row>
      <Col>
        <Banner>
          <h1>Welcome to Gateway Gamers</h1>
          <p>
            We are a local game group, who gets together monthly and learn,
            teach, and play many games!
          </p>
        </Banner>
      </Col>
    </Row>
  );
};

export default Home;
