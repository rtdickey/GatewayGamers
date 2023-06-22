import { useEffect, useState } from "react";

const TestAPI = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/BoardGameAPI`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
};

export default TestAPI;
