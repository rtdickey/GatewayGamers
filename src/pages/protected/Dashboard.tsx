import { Col, Row } from "react-bootstrap";
import GameSearch from "../../components/boardgame-geek/GameSearch";

const Dashboard = () => {
  return (
    <>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <GameSearch />
        </Col>
        <Col sm={3}></Col>
      </Row>
    </>
  );
};

export default Dashboard;
