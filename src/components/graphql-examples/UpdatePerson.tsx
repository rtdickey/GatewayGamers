const UpdatePerson = () => {
  const update = async () => {
    const id = "1";
    const data = {
      id: id,
      Name: "Bryce",
    };

    const gql = `
          mutation update($id: ID!, $_partitionKeyValue: String!, $item: UpdatePersonInput!) {
            updatePerson(id: $id, _partitionKeyValue: $_partitionKeyValue, item: $item) {
              id
              Name
            }
          }`;

    const query = {
      query: gql,
      variables: {
        id: id,
        _partitionKeyValue: id,
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
    console.table(result.data.updatePerson);
  };
  return (
    <button type="button" onClick={() => update()}>
      Update
    </button>
  );
};

export default UpdatePerson;
