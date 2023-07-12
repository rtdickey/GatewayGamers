import { Col, Row } from "react-bootstrap";
import HotGamesListGroup from "../components/boardgame-geek/HotGamesList";

const Home = () => {
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
    <>
      <h1>Welcome to Gateway Gamers</h1>
      <p>
        We are a local game group, who gets together monthly and learn, teach,
        and play many games!
      </p>
      <div>
        <Row>
          <Col>
            <HotGamesListGroup />
          </Col>
          <Col>
            <button id="list" onClick={() => list()}>
              List
            </button>
            {/* <button id="get" onClick={() => get()}>
              Get
            </button>
            <button id="update" onClick={() => update()}>
              Update
            </button>
            <button id="create" onClick={() => create()}>
              Create
            </button>
            <button id="delete" onClick={() => del()}>
              Delete
            </button> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
