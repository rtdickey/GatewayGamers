import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { useGetHotnessQuery } from "../../redux/services/getHotness";
import { HotResponse } from "../../interfaces/BoardGameGeekAPI";
import "./HotGamesList.css";

const HotGamesListGroup = () => {
  const { data, error, isLoading } = useGetHotnessQuery();
  return (
    <Container fluid className="bg-primary-alt px-3 pt-3">
      <Container>
        <Row>
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
                <ListGroup.Item>
                  <span className="text-danger font-italic">
                    Error while retrieving games.
                  </span>
                </ListGroup.Item>
              ) : isLoading ? (
                <ListGroup.Item>
                  <span className="font-italic">
                    Searching Hottest Games...
                  </span>
                </ListGroup.Item>
              ) : data ? (
                data.map((game: HotResponse) => (
                  <ListGroup.Item
                    key={game.id}
                    style={{ backgroundColor: "inherit", border: 0 }}
                  >
                    <Container>
                      <div className="media">
                        <img
                          src={game.thumbnail.value}
                          alt={game.name.value + " game"}
                          className="float-start me-2"
                        />
                        <p>
                          {game.name.value}
                          <br />
                          published: {game.yearpublished.value}
                        </p>
                      </div>
                    </Container>
                  </ListGroup.Item>
                ))
              ) : null}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HotGamesListGroup;
