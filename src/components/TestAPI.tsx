import { useEffect, useState } from "react";

const TestAPI = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    let ignore = false;
    fetch("/api/BoardGameAPI?search=Kevin")
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          try {
            console.log("respond data?", data.message);
            setResult(data.message);
          } catch (error) {
            console.log("Error happened here!");
            console.error(error);
          }
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  return <div>{result}</div>; //<div>{result}</div>;
};

export default TestAPI;
