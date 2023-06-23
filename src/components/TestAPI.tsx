import { useEffect, useState } from "react";

const TestAPI = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      const { body } = await (await fetch(`/api/BoardGameAPI`)).json();
      //console.log(response);
      //const resJson = await response.json();
      //console.log(resJson);
      setData(body);
    })();
  });

  return <div>{data}</div>;
};

export default TestAPI;
