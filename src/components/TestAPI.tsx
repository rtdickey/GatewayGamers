import { useSearchGamesByNameQuery } from "../redux/services/gameSearch";

const TestAPI = () => {
  const { data, error, isLoading } = useSearchGamesByNameQuery("Kevin");

  return (
    <div>
      {error ? (
        <span className="text-danger">Error while retrieving games.</span>
      ) : isLoading ? (
        <span>Searching Games...</span>
      ) : data ? (
        data.map((game) => <span key={game.id}>{game.name.value}</span>)
      ) : null}
    </div>
  );

  // const [result, setResult] = useState("");

  // useEffect(() => {
  //   let ignore = false;
  //   fetch("/api/BoardGameAPI?search=Kevin")    //http://localhost:4280/api/BoardGameAPI/index?search=Space
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!ignore) {
  //         try {
  //           console.log("respond data?", JSON.stringify(data));
  //           setResult(JSON.stringify(data));
  //         } catch (error) {
  //           console.log("Error happened here!");
  //           console.error(error);
  //         }
  //       }
  //     });
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  // return <div>{result}</div>;
};

export default TestAPI;
