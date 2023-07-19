const CreatePerson = () => {
  const create = async () => {
    const data = {
      id: "2",
      userDetails: "rtdickey",
      identityProvider: "google",
    };

    const gql = `
            mutation create($item: CreateUserInput!) {
            createUser(item: $item) {
                id
                userDetails
                identityProvider
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
