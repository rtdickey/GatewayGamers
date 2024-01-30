import { useSearchGamesMutation } from "../../redux/services/gameSearch";
import GameSearchForm from "./GameSearchForm";
import GameSearchList from "./GameSearchList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameSearch = () => {
  const [searchGames, { data, error, isLoading }] = useSearchGamesMutation();

  const handleOnSubmit = (value: string) => {
    searchGames(value);
  };

  return (
    <>
      <div className="mt-3 mb-3">
        <GameSearchForm onSubmit={handleOnSubmit} />
      </div>
      <div>
        {error ? (
          <p className="text-danger">Error retrieivng games.</p>
        ) : isLoading ? (
          <p>
            <Skeleton count={10} height={55} />
          </p>
        ) : data ? (
          <GameSearchList items={data} />
        ) : null}
      </div>
    </>
  );
};

export default GameSearch;
