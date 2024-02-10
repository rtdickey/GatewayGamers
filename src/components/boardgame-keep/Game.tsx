import { Col, Row } from "react-bootstrap";

export interface GameInfo {
  boxArt: string;
  title: string;
  ratings: string;
  borrowedStatus: string;
  dateAdded: string;
  shelf: string;
}

export interface GameDetails {
  details: GameInfo;
}

const Game = ({ details }: GameDetails) => {
  return (
    <Row>
      <Col>{details.boxArt}</Col>
      <Col>{details.title}</Col>
      <Col>{details.ratings}</Col>
      <Col>{details.borrowedStatus}</Col>
      <Col>{details.dateAdded}</Col>
      <Col>{details.shelf}</Col>
    </Row>
  );
};

export default Game;
