import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";

const About = () => {
  return (
    <>
      <Row>
        <Col>
          <Banner>
            <h1>About</h1>
            <p>Who are we? What do we do?</p>
          </Banner>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Container>
            <p>
              Gateway Gamers was co-founded by Ryan Dickey and [Other Founder]
              in an effort to have fellowship and the ability to teach what they
              love to do.
            </p>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default About;
