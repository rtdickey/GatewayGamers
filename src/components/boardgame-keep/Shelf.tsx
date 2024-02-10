import { Col, Row } from "react-bootstrap";
import Game from "./Game";
import useGetGameCloset from "../../hooks/useTemporaryGameDataStore";

interface ShelfProps {
  id: string;
  categoryId?: string | null;
}

const Shelf = ({ id, categoryId = null }: ShelfProps) => {
  const games = useGetGameCloset();
  const actualShelf = categoryId ? `${id}-${categoryId}` : id;
  const filteredGames = games.filter((arr) =>
    categoryId ? arr.shelf === actualShelf : arr.shelf.startsWith(id)
  );

  return (
    <>
      Shelf Id: {actualShelf}
      <div>
        <Row>
          <Col>Box Art</Col>
          <Col>Title</Col>
          <Col>Ratings</Col>
          <Col>Borrowed Status</Col>
          <Col>Date Added</Col>
          <Col>Shelf</Col>
        </Row>
        {filteredGames.map((game, index) => (
          <Game key={index} details={game} />
        ))}
      </div>
    </>
  );
};

export default Shelf;
