import Icon from "./Icon";

interface Props {
  type: "heart" | "star" | "square" | "suit";
  color: string;
  numberOfGamePieces: number;
}

const Board = ({
  type = "heart",
  color = "pink",
  numberOfGamePieces = 10,
}: Props) => {
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
