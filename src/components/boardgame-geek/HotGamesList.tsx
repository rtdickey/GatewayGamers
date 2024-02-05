import { Row, Col, Container, ListGroup, Card } from "react-bootstrap";
import { useGetHotnessQuery } from "../../redux/services/getHotness";
import { HotResponse } from "../../interfaces/BoardGameGeekAPI";
import Skeleton from "react-loading-skeleton";
import "./HotGamesList.scss";
import "react-loading-skeleton/dist/skeleton.css";

const HotGamesList = () => {
  const { data, error, isLoading } = useGetHotnessQuery();
  return (
    <>
      {isLoading ? (
        <Skeleton height={374} />
      ) : (
        <Container fluid className="bg-white px-3 pt-3">
          <Container>
            <Row className="pb-3">
              <Col>
                <span style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
                  Trending Games
                </span>
                <br />
                <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
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
                    data.map((game: HotResponse, index: number) => (
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
                          style={{
                            backgroundColor: "inherit",
                            border: "none",
                          }}
                        >
                          <Card.Body>
                            <div className="game__content__header me-2">
                              <img
                                src={game.thumbnail?.value}
                                alt={game.name?.value + " game"}
                              />
                            </div>
                            <p className="pt-2 px-4">
                              <span>
                                <b>{index + 1}.</b> {game.name?.value}
                              </span>
                              <br />
                              <span
                                style={{
                                  fontSize: "1rem",
                                  fontStyle: "italic",
                                }}
                              >
                                published: {game.yearpublished?.value}
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
      )}
    </>
  );
};

export default HotGamesList;
