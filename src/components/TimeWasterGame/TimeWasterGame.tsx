import { Card } from "react-bootstrap";
import GameOptions from "./GameOptions";
import Board from "./Board";
import { useState } from "react";

const TimeWasterGame = () => {
  type IconType = "heart" | "star" | "square" | "suit";
  const [type, setType] = useState("heart");
  const [color, setColor] = useState("pink");
  const [numberOfPieces, setNumberOfPieces] = useState(10);

  const selectType = (iconType: string) => {
    setType(iconType);
  };
  const selectColor = (iconColor: string) => {
    setColor(iconColor);
  };
  const selectNumberOfGamePieces = (numberOfGamePieces: number) => {
    setNumberOfPieces(numberOfGamePieces);
  };

  return (
    <>
      <Card>
        <Card.Header>Time Waster Game</Card.Header>
        <Card.Body>
          <GameOptions
            selectType={selectType}
            selectColor={selectColor}
            selectNumberOfGamePieces={selectNumberOfGamePieces}
          />
          <Board
            type={type as IconType}
            color={color}
            numberOfGamePieces={numberOfPieces}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default TimeWasterGame;
