interface ShelfProps {
  id: string;
}

const Shelf = ({ id }: ShelfProps) => {
  return <>Shelf Id: {id}</>;
};

export default Shelf;
