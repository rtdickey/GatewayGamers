const DeletePerson = () => {
  const del = async () => {
    const id = "2";
    const identityProvider = "google";

    const gql = `
    mutation del($id: ID!, $_partitionKeyValue: String!) {
      deleteUser(id: $id, _partitionKeyValue: $_partitionKeyValue) {
        id
      }
    }`;

    const query = {
      query: gql,
      variables: {
        id: id,
        _partitionKeyValue: identityProvider,
      },
    };

    const endpoint = "/data-api/graphql";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });

    const result = await response.json();
    console.log(`Record deleted: ${JSON.stringify(result.data)}`);
  };

  return (
    <button type="button" onClick={() => del()}>
      Delete
    </button>
  );
};

export default DeletePerson;
