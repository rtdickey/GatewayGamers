import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import CardListGroup from "../components/CardListGroup";
import TestAPI from "../components/TestAPI";

const Home = () => {
  const trendyGames = [""];
  return (
    <>
      <Banner>
        <h1>Welcome to Gateway Gamers</h1>
        <p>
          We are a local game group, who gets together monthly and learn, teach,
          and play many games!
        </p>
      </Banner>
      <Container>
        <CardListGroup
          title="The Hotness"
          subtitle="The top 5 trending games of today"
          items={trendyGames}
        />
        <TestAPI />
      </Container>
    </>
  );
};

export default Home;
