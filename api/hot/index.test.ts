import httpTrigger from "./index";
import { describe, expect, test, beforeEach } from "@jest/globals";
import { Context, HttpRequest } from "@azure/functions";

describe("Hot", () => {
  let context: Context;
  let request: HttpRequest;

  beforeEach(() => {
    // Really crude and unsafe implementations that will be replaced soon
    context = { log: () => {} } as unknown as Context;
    request = { query: {} } as unknown as HttpRequest;
  });

  test("retrieving hot items", async () => {
    await httpTrigger(context, request);
    expect(context.res.status).toEqual(200);
    expect(context.res.body).toBeTruthy();
  });
});
