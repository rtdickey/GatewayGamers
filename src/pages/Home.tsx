import { Col, Row } from "react-bootstrap";
import HotGamesListGroup from "../components/boardgame-geek/HotGamesList";
import GetPerson from "../components/graphql-examples/GetPerson";
import ListPeople from "../components/graphql-examples/ListPeople";
import UpdatePerson from "../components/graphql-examples/UpdatePerson";
import CreatePerson from "../components/graphql-examples/CreatePerson";
import DeletePerson from "../components/graphql-examples/DeletePerson";

const Home = () => {
  return (
    <>
      <h1>Welcome to Gateway Gamers</h1>
      <p>
        We are a local game group, who gets together monthly and learn, teach,
        and play many games!
      </p>
      <div>
        <Row>
          <Col>
            <HotGamesListGroup />
          </Col>
          <Col>
            <ListPeople />
            <GetPerson />
            <UpdatePerson />
            <CreatePerson />
            <DeletePerson />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
