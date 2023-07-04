import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  GameSearchForm,
  GameSearchList,
} from "../../components/boardgame-geek";

const Dashboard = () => {
  const [searchResult, setSearchResult] = useState("");

  const handleOnSubmit = (value: string) => {
    console.log("We are on dashboard with value: ", value);
  };

  return (
    <>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <div className="mb-3">
            <GameSearchForm onSubmit={handleOnSubmit} />
          </div>
          <div>
            <GameSearchList />
          </div>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </>
  );
};

export default Dashboard;
