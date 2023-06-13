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
      <Row>
        <Col>
          <Container>
            <p>
              Gateway Gamers was co-founded by Ryan Dickey and Charles Reed.
              Their mission was to bring fellowship through gaming. Charles
              focuses on keeping things manageable with small group activities.
              Ryan loves to learn and teach board games.
            </p>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default About;
