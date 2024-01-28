import { Col, Container, Row } from "react-bootstrap";
import HotGamesListGroup from "../components/boardgame-geek/HotGamesList";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Gateway Gamers</h1>
            <p>
              We are a local game group, who gets together monthly and learn,
              teach, and play many games!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <HotGamesListGroup />
          </Col>
          {/* <Col>
            <ListPeople />
            <CreatePerson />
            <GetPerson />
            <UpdatePerson />
            <DeletePerson />
          </Col> */}
        </Row>
      </Container>
      <div className="container"></div>
      <div></div>
    </>
  );
};

export default Home;
