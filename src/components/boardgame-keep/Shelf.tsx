import { Col, Row } from "react-bootstrap";
import Game from "./Game";

interface ShelfProps {
  id: string;
  categoryId?: string | null;
}

// interface GameDetails {
//   boxArt: string;
//   title: string;
//   ratings: string;
//   borrowedStatus: string;
//   dateAdded: string;
//   shelf: string;
// }

const Shelf = ({ id, categoryId = null }: ShelfProps) => {
  const games = [] as Array<string>;
  return (
    <>
      Shelf Id: {id}
      {categoryId?.length && `-${categoryId}`}
      <div>
        <Row>
          <Col>Box Art</Col>
          <Col>Title</Col>
          <Col>Ratings</Col>
          <Col>Borrowed Status</Col>
          <Col>Date Added</Col>
          <Col>Shelf</Col>
        </Row>
        {games.map((game, index) => (
          <Game />
        ))}
      </div>
    </>
  );
};

export default Shelf;
