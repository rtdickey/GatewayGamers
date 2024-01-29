import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const ClosetMenu = () => {
  const shelves = ["Owned", "Interested", "Rejected"];
  return (
    <Container fluid>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {shelves.map((shelf: string, index: number) => (
              <ListGroupItem key={index}>{shelf}</ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ClosetMenu;
