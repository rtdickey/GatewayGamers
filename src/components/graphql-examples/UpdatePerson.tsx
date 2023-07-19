const UpdatePerson = () => {
  const update = async () => {
    const id = "2";
    const identityProvider = "google";
    const data = {
      id: id,
      userDetails: "kevinrs",
      identityProvider: identityProvider,
    };

    const gql = `
          mutation update($id: ID!, $_partitionKeyValue: String!, $item: UpdateUserInput!) {
            updateUser(id: $id, _partitionKeyValue: $_partitionKeyValue, item: $item) {
              id
              userDetails
              identityProvider
            }
          }`;

    const query = {
      query: gql,
      variables: {
        id: id,
        _partitionKeyValue: identityProvider,
        item: data,
      },
    };

    const endpoint = "/data-api/graphql";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });

    const result = await res.json();
    console.table(result.data.updateUser);
  };
  return (
    <button type="button" onClick={() => update()}>
      Update
    </button>
  );
};

export default UpdatePerson;
