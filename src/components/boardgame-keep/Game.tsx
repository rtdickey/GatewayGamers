import { Col, Row } from "react-bootstrap";
import { useSearchDetailedGameInfoByIdsQuery } from "../../redux/services/gameSearch";
import { GameDetails } from "../../interfaces/Game";
import {
  FaCircleInfo,
  FaClock,
  FaPuzzlePiece,
  FaUser,
  FaUserGroup,
} from "react-icons/fa6";

const Game = ({ details, className }: GameDetails) => {
  const { data: game, isLoading } = useSearchDetailedGameInfoByIdsQuery(
    details.id
  );

  const getBoardGameName = () => {
    return game.name.filter((n) => n.type === "primary")[0].value;
  };

  const getBoardGameCategories = () => {
    const categories = game.link
      .filter((l) => l.type === "boardgamecategory")
      .map((categoryLink) => categoryLink.value)
      .join(", ");
    return <span>{categories}</span>;
  };

  const getBoardGamePublisher = () => {
    return game.link.filter((l) => l.type === "boardgamepublisher")[0].value;
  };

  return (
    <>
      {!isLoading && game && (
        <Row style={{ fontSize: ".8rem" }} className={className}>
          <Col>
            <img src={game.thumbnail} alt={game.name + " game"} width={100} />
          </Col>
          <Col>
            <span
              style={{ fontSize: "1rem", color: "GrayText" }}
              className="fw-bold"
            >
              {getBoardGameName()}
            </span>
            <br />
            <span>
              <FaCircleInfo className="me-2" />
              {getBoardGameCategories()}
            </span>
            <br />
            <span>
              <FaUserGroup className="me-2" />
              {game.minplayers?.value}-{game.maxplayers?.value}
            </span>
            <br />
            <span>
              <FaClock className="me-2" />~{game.playingtime?.value} minutes
            </span>
            <br />
            <span>
              <FaUser className="me-2" />
              {game.minage?.value}+
            </span>
            <br />
            <span>
              <FaPuzzlePiece className="me-2" />
              {getBoardGamePublisher()}
            </span>
          </Col>
          <Col>{details.ratings}</Col>
          <Col>{details.borrowedStatus}</Col>
          <Col>{details.dateAdded}</Col>
          <Col>{details.shelf}</Col>
        </Row>
      )}
    </>
  );
};

export default Game;
