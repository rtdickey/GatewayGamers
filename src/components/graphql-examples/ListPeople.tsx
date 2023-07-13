const ListPeople = () => {
  const list = async function () {
    const query = `
            {
              people {
                items {
                  id
                  Name
                }
              }
            }`;

    const endpoint = "/data-api/graphql";
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query }),
      })
    ).json();
    console.table(result.data.people.items);
  };

  return (
    <button type="button" onClick={() => list()}>
      List
    </button>
  );
};

export default ListPeople;
