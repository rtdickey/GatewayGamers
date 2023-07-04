import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  GameSearchForm,
  GameSearchList,
} from "../../components/boardgame-geek";
import { useSearchGamesByNameQuery } from "../../redux/services/gameSearch";

const Dashboard = () => {
  const [searchResult, setSearchResult] = useState("Kevin");

  const handleOnSubmit = (value: string) => {
    console.log("We are on dashboard with value: ", value);
  };

  const { data, error, isLoading } = useSearchGamesByNameQuery(searchResult);

  return (
    <>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <div className="mb-3">
            <GameSearchForm onSubmit={handleOnSubmit} />
          </div>
          <div>
            {error ? (
              <p className="text-danger">Error retrieivng games.</p>
            ) : isLoading ? (
              <p>Retrieivng games.</p>
            ) : data ? (
              <GameSearchList items={data} />
            ) : null}
          </div>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </>
  );
};

export default Dashboard;
