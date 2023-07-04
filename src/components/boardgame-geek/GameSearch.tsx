import { useState } from "react";
import { useSearchGamesByNameQuery } from "../../redux/services/gameSearch";
import GameSearchForm from "./GameSearchForm";
import GameSearchList from "./GameSearchList";

const GameSearch = () => {
  const [searchResult, setSearchResult] = useState("");

  const handleOnSubmit = (value: string) => {
    setSearchResult(value);
  };
  const { data, error, isLoading } = useSearchGamesByNameQuery(searchResult);

  return (
    <>
      <div className="mt-3 mb-3">
        <GameSearchForm onSubmit={handleOnSubmit} />
      </div>
      <div>
        {searchResult.length > 0 &&
          (error ? (
            <p className="text-danger">Error retrieivng games.</p>
          ) : isLoading ? (
            <p>Retrieivng games.</p>
          ) : data ? (
            <GameSearchList items={data} />
          ) : null)}
      </div>
    </>
  );
};

export default GameSearch;
