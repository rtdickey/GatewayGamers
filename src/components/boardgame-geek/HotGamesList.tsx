import { Card, ListGroup } from "react-bootstrap";
import { useGetHotnessQuery } from "../../redux/services/getHotness";
import { HotResponse } from "../../interfaces/BoardGameGeekAPI";

const HotGamesListGroup = () => {
  const { data, error, isLoading } = useGetHotnessQuery();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header className="bg-dark text-white">
        <h5>Trending Games</h5>
        <h6>Most active games on BGG</h6>
      </Card.Header>
      <ListGroup variant="flush">
        {error ? (
          <ListGroup.Item>
            <span className="text-danger font-italic">
              Error while retrieving games.
            </span>
          </ListGroup.Item>
        ) : isLoading ? (
          <ListGroup.Item>
            <span className="font-italic">Searching Hottest Games...</span>
          </ListGroup.Item>
        ) : data ? (
          data.map((game: HotResponse) => (
            <ListGroup.Item key={game.id}>
              <img
                src={game.thumbnail.value}
                alt={game.name.value + " game"}
                width={50}
                className="float-start me-2"
              />
              <p>
                {game.name.value}
                <br />
                published: {game.yearpublished.value}
              </p>
            </ListGroup.Item>
          ))
        ) : null}
      </ListGroup>
    </Card>
  );
};

export default HotGamesListGroup;
