import { Col, Row } from "react-bootstrap";
import GameSearch from "../../components/boardgame-geek/GameSearch";
import BGKSidebar from "../../components/boardgame-keep/BGKSidebar";

const BoardGameKeep = () => {
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <BGKSidebar />
      <div className="p-4 pt-0">
        <Row>
          <Col>
            <GameSearch />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BoardGameKeep;
