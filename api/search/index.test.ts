import httpTrigger from "./index";
import { describe, expect, test, beforeEach } from "@jest/globals";
import { Context, HttpRequest } from "@azure/functions";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Search", () => {
  let context: Context;
  let request: HttpRequest;
  let mock = new MockAdapter(axios);

  beforeEach(() => {
    // Really crude and unsafe implementations that will be replaced soon
    context = { log: () => {} } as unknown as Context;
    request = { query: {} } as unknown as HttpRequest;
    mock.reset();
  });

  test("running a search with no search specified", async () => {
    mock
      .onGet()
      .reply(
        200,
        '<items total="0" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse"> </items>'
      );
    await httpTrigger(context, request);
    expect(context.res.status).toEqual(200);
    expect(context.res.body).toEqual({});
    console.log(context.res);
  });

  test("running a search with no search results found", async () => {
    request.query = { search: "somethingwewillneverfind2023" };
    mock
      .onGet()
      .reply(
        200,
        '<items total="0" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse"> </items>'
      );
    await httpTrigger(context, request);
    expect(context.res.status).toEqual(200);
    expect(context.res.body).toEqual([]);
  });

  test("running a search with results found", async () => {
    request.query = { search: "Kevin Bacon" };
    mock.onGet().reply(
      200,
      `<items total="1" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
      <item type="boardgame" id="12741">
      <name type="primary" value="Six Degrees of Kevin Bacon"/>
      <yearpublished value="1997"/>
      </item>
      </items>`
    );
    await httpTrigger(context, request);
    console.log(context.res.body);
    expect(context.res.status).toEqual(200);
    expect(context.res.body.name.value).toEqual("Six Degrees of Kevin Bacon");
    expect(context.res.body.id).toEqual("12741");
    expect(context.res.body.yearpublished.value).toEqual("1997");
    expect(context.res.body.type).toEqual("boardgame");
  });

  test("running a search with an connection error", async () => {
    request.query = { search: "Kevin Bacon" };
    mock.onGet().networkError();
    await httpTrigger(context, request);
    console.log(context.res.body);
    expect(context.res.status).toEqual(500);
  });
});
