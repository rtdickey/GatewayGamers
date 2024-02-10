import Game from "./Game";

interface ShelfProps {
  id: string;
  categoryId?: string | null;
}

const Shelf = ({ id, categoryId = null }: ShelfProps) => {
  return (
    <>
      Shelf Id: {id}
      {categoryId?.length && `-${categoryId}`}
      <Game />
    </>
  );
};

export default Shelf;
