import { Col, Row } from "react-bootstrap";
import {
  GameSearchForm,
  GameSearchList,
} from "../../components/boardgame-geek";

const Dashboard = () => (
  <>
    <Row>
      <Col sm={3}></Col>
      <Col sm={6}>
        <div className="mb-3">
          <GameSearchForm />
        </div>
        <div>
          <GameSearchList />
        </div>
      </Col>
      <Col sm={3}></Col>
    </Row>
  </>
);

export default Dashboard;
