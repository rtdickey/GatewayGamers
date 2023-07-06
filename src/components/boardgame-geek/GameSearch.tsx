import { useSearchGamesMutation } from "../../redux/services/gameSearch";
import GameSearchForm from "./GameSearchForm";
import GameSearchList from "./GameSearchList";

const GameSearch = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  const [searchGames, { data, error, isLoading }] = useSearchGamesMutation();

  const handleOnSubmit = (value: string) => {
    // setSearchTerm(value);
    searchGames(value);
  };

  //useEffect(() => {}, [searchTerm]);
  //const { data, error, isLoading } = useSearchGamesByNameQuery(searchResult);

  return (
    <>
      <div className="mt-3 mb-3">
        <GameSearchForm onSubmit={handleOnSubmit} />
      </div>
      <div>
        {error ? (
          <p className="text-danger">Error retrieivng games.</p>
        ) : isLoading ? (
          <p>Retrieivng games.</p>
        ) : data ? (
          <GameSearchList items={data} />
        ) : null}
      </div>
    </>
  );
};

export default GameSearch;
