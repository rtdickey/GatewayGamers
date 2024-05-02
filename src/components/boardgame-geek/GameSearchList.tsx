import { ListGroup, ListGroupItem } from "react-bootstrap";
import { GameSearchResponse } from "../../interfaces/BoardGameGeekAPI";
import { FaPlus } from "react-icons/fa";

interface Props {
  items: GameSearchResponse[];
}

const GameSearchList = ({ items }: Props) => {
  if (Object.keys(items).length === 0) return <></>;
  return (
    <ListGroup>
      {items.map((item: GameSearchResponse, index: number) => (
        <ListGroupItem key={item.id} className="d-flex justify-content-between">
          {item.name.value}
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => console.log(item.id + ": " + item.name.value)}
          >
            <FaPlus />
          </button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default GameSearchList;
