const CreatePerson = () => {
  const create = async () => {
    const data = {
      id: "2",
      Name: "Ryan",
    };

    const gql = `
            mutation create($item: CreatePersonInput!) {
            createPerson(item: $item) {
                id
                Name
            }
        }`;

    const query = {
      query: gql,
      variables: {
        item: data,
      },
    };

    const endpoint = "/data-api/graphql";
    const result = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });

    const response = await result.json();
    console.table(response.data.createPerson);
  };
  return (
    <button type="button" onClick={() => create()}>
      Create
    </button>
  );
};

export default CreatePerson;
