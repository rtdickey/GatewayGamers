import httpTrigger from "./index";
import { describe, expect, test, beforeEach } from "@jest/globals";
import { Context, HttpRequest } from "@azure/functions";

describe("Search", () => {
  let context: Context;
  let request: HttpRequest;

  beforeEach(() => {
    // Really crude and unsafe implementations that will be replaced soon
    context = { log: () => {} } as unknown as Context;
    request = { query: {} } as unknown as HttpRequest;
  });

  test("running a search with no search specified", async () => {
    await httpTrigger(context, request);
    expect(context.res.status).toEqual(200);
    expect(context.res.body).toEqual({});
    console.log(context.res);
  });

  test("running a search with no search results found", async () => {
    request.query = { search: "somethingwewillneverfind2023" };
    await httpTrigger(context, request);
    expect(context.res.status).toEqual(200);
    expect(context.res.body).toEqual([]);
  });

  test("running a search with results found", async () => {
    request.query = { search: "Kevin Bacon" };
    await httpTrigger(context, request);
    console.log(context.res.body);
    expect(context.res.status).toEqual(200);
    expect(context.res.body.name.value).toEqual("Six Degrees of Kevin Bacon");
    expect(context.res.body.id).toEqual("12741");
    expect(context.res.body.yearpublished.value).toEqual("1997");
    expect(context.res.body.type).toEqual("boardgame");
  });
});
