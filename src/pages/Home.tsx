import { Col, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import CardListGroup from "../components/CardListGroup";

const Home = () => {
  const trendyGames = [""];
  return (
    <>
      <Row>
        <Col>
          <Banner>
            <h1>Welcome to Gateway Gamers</h1>
            <p>
              We are a local game group, who gets together monthly and learn,
              teach, and play many games!
            </p>
          </Banner>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
          <CardListGroup
            title="The Hotness"
            subtitle="The top 5 trending games of today"
            items={trendyGames}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
