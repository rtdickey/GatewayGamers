import { Col, Row } from "react-bootstrap";
import GameSearch from "../../components/boardgame-geek/GameSearch";
import ClosetMenu from "../../components/ClosetMenu";

const BoardGameKeep = () => {
  return (
    <>
      <Row>
        <Col sm={3}>
          <ClosetMenu />
        </Col>
        <Col sm={6}>
          <GameSearch />
        </Col>
        <Col sm={3}></Col>
      </Row>
    </>
  );
};

export default BoardGameKeep;
