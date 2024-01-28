import { Row, Col, Container, ListGroup, Fade, Card } from "react-bootstrap";
import { useGetHotnessQuery } from "../../redux/services/getHotness";
import { HotResponse } from "../../interfaces/BoardGameGeekAPI";
import "./HotGamesList.css";
import { useEffect, useState } from "react";

const HotGamesListGroup = () => {
  const [show, setShow] = useState(false);
  const { data, error, isLoading } = useGetHotnessQuery();

  useEffect(() => {
    setShow(!isLoading);
  }, [isLoading]);
  return (
    <Fade in={show}>
      <Container fluid className="bg-primary-alt px-3 pt-3">
        <Container>
          <Row className="pb-3">
            <Col>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                Trending Games
              </span>
              <br />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Most active Board Game Geek
              </span>
            </Col>
          </Row>
          <Row className="game__list">
            <Col className="content">
              <ListGroup horizontal variant="flush">
                {error ? (
                  <ListGroup.Item
                    style={{ backgroundColor: "inherit" }}
                    className="pb-4"
                  >
                    <span className="text-danger font-italic">
                      Error while retrieving games.
                    </span>
                  </ListGroup.Item>
                ) : data ? (
                  data.map((game: HotResponse) => (
                    <ListGroup.Item
                      key={game.id}
                      style={{ backgroundColor: "inherit", border: 0 }}
                      onClick={() =>
                        window.open(
                          "https://boardgamegeek.com/boardgame/" + game.id,
                          "_blank" // <- This is what makes it open in a new window.
                        )
                      }
                    >
                      <Card
                        className="game__content"
                        style={{ backgroundColor: "inherit", border: "none" }}
                      >
                        <Card.Body>
                          <img
                            src={game.thumbnail.value}
                            alt={game.name.value + " game"}
                            className="game__content__header me-2"
                          />
                          <p className="pt-2 px-4">
                            {game.name.value}
                            <br />
                            <span
                              style={{
                                fontSize: "1rem",
                                fontStyle: "italic",
                              }}
                            >
                              published: {game.yearpublished.value}
                            </span>
                          </p>
                        </Card.Body>
                      </Card>
                    </ListGroup.Item>
                  ))
                ) : null}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fade>
  );
};

export default HotGamesListGroup;
