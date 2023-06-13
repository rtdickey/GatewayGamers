import { Card, ListGroup } from "react-bootstrap";

interface Props {
  title: string;
  subtitle: string;
  items: string[];
}

const CardListGroup = ({ title, subtitle, items }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header className="bg-dark text-white">
        <h5>{title}</h5>
        <span>{subtitle}</span>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>7 Wonders Duel - John S. on 5/13/23</ListGroup.Item>
        <ListGroup.Item>Abducktion - Hank G. on 5/13/23</ListGroup.Item>
        <ListGroup.Item>Exploding Kittens - Jane D. on 6/11/23</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardListGroup;
