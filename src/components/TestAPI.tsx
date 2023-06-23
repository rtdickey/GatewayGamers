import { useEffect, useState } from "react";

const TestAPI = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    let ignore = false;
    fetch("/api/BoardGameAPI")
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          try {
            console.log("respond data?", data);
            setResult(data);
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

  // useEffect(() => {
  //   (async function () {
  //     await fetch(`/api/BoardGameAPI`).then(async (response) => {
  //       try {
  //         const { body } = await response.json();
  //         console.log("respond data?", body);
  //         setData(body);
  //       } catch (error) {
  //         console.log("Error happened here!");
  //         console.error(error);
  //       }
  //     });
  //   })();
  // }, []);

  return <div>{result}</div>;
};

export default TestAPI;
