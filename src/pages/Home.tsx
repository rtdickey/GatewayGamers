import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import HotGamesListGroup from "../components/HotGamesListGroup";

const Home = () => {
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
        <HotGamesListGroup />
      </Container>
    </>
  );
};

export default Home;
