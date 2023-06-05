import Icon from "./Icon";
import { IconType } from "./TimeWasterGame";

interface Props {
  type: IconType;
  color: string;
  numberOfGamePieces: number;
}

const Board = ({ type, color, numberOfGamePieces }: Props) => {
  return (
    <>
      <div className="border border-5 border-info p-3 mt-4">
        {[...Array(numberOfGamePieces)].map((item, index: number) => {
          return <Icon key={index} type={type} color={color} />;
        })}
      </div>
    </>
  );
};

export default Board;
