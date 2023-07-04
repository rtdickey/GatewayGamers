import { ListGroup, ListGroupItem } from "react-bootstrap";
import { GameSearchResponse } from "../../interfaces/BoardGameGeekAPI";

interface Props {
  items: GameSearchResponse[];
}

const GameSearchList = ({ items }: Props) => {
  console.log(items);
  if (items.length == 0) return <></>;
  return (
    <ListGroup>
      {items.map((item: GameSearchResponse, index: number) => (
        <ListGroupItem key={item.id}>{item.name.value}</ListGroupItem>
      ))}
      ;
    </ListGroup>
  );
};

export default GameSearchList;
