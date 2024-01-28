import { Col, Container, Row } from "react-bootstrap";
import HotGamesListGroup from "../components/boardgame-geek/HotGamesList";
import LoginOptions from "../components/Login";
import { useAppSelector } from "../hooks/redux";

const Home = () => {
  const user = useAppSelector((state) => state.user.clientPrincipal);

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
            <Row>
              <Col>
                <img
                  src="/logo512.png"
                  alt="Gateway Gamers logo"
                  style={{ maxHeight: "300px" }}
                  className="flex-row me-4"
                />
              </Col>
              {!user && (
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <LoginOptions />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <HotGamesListGroup />
    </>
  );
};

export default Home;
