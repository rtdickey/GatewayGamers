import { Container } from "react-bootstrap";
import Banner from "../../components/Banner";
import CardListGroup from "../../components/CardListGroup";

const Dashboard = () => {
  const loanedGames = [
    "2023-06-11: Abducktion - John S.",
    "2023-06-11: Dice Throne S1 - Hank G.",
    "2023-06-11: 7 Wonders Duel - Jane D.",
  ];
  return (
    <>
      <Banner />
      <Container>
        <CardListGroup
          title="Loaned Games"
          subtitle="Remember where your games are..."
          items={loanedGames}
        />
      </Container>
    </>
  );
};

export default Dashboard;
