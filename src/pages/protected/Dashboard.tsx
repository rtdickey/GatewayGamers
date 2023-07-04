import { Col, Row } from "react-bootstrap";
import GameSearchForm from "../../components/GameSearchForm";

const Dashboard = () => (
  <>
    <Row>
      <Col sm={3}></Col>
      <Col sm={6}>
        <GameSearchForm />
      </Col>
      <Col sm={3}></Col>
    </Row>
  </>
);

export default Dashboard;
