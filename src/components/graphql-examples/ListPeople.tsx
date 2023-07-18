const ListPeople = () => {
  const list = async function () {
    const query = `
            {
              users {
                items {
                  id
                  userDetails
                  identityProvider
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
    console.table(result.data.users.items);
  };

  return (
    <button type="button" onClick={() => list()}>
      List
    </button>
  );
};

export default ListPeople;
