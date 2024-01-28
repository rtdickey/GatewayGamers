import { Col, Container, Row } from "react-bootstrap";
import HotGamesListGroup from "../components/boardgame-geek/HotGamesList";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="m-4">
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo512.png"
              alt="Gateway Gamers logo"
              style={{ maxHeight: "300px" }}
              className="float-start me-4"
            />
            <p style={{ lineHeight: "35pt" }}>
              <span style={{ fontSize: "6rem", fontWeight: "bold" }}>
                Welcome!
              </span>
              <br />
              <span style={{ fontSize: "3rem", fontWeight: "bold" }}>
                To Gateway Gamers
              </span>
              <br />
              <span style={{ fontSize: "2rem" }}>
                Your virtual boardgame storage!
              </span>
            </p>
          </Col>
        </Row>
      </Container>
      <HotGamesListGroup />
    </>
  );
};

export default Home;
