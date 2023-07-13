const GetPerson = () => {
  const get = async () => {
    const id = "1";

    const gql = `
            query getById($id: ID!) {
              person_by_pk(id: $id) {
                id
                Name
              }
            }`;

    const query = {
      query: gql,
      variables: {
        id: id,
      },
    };

    const endpoint = "/data-api/graphql";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });
    const result = await response.json();
    console.table(result.data.person_by_pk);
  };

  return (
    <button type="button" onClick={() => get()}>
      Get
    </button>
  );
};

export default GetPerson;
