import httpTrigger from "./index";
import { describe, expect, test, beforeEach } from "@jest/globals";
import { Context, HttpRequest } from "@azure/functions";
import axios from "axios";
import * as MockAdapter from "axios-mock-adapter";

describe("Hot", () => {
  let context: Context;
  let request: HttpRequest;
  let mock = new MockAdapter(axios);
  let xmlResponse: string;

  beforeEach(() => {
    context = { log: () => {} } as Context;
    request = { query: {} } as HttpRequest;
    mock.reset();
  });

  test("empty hot items", async () => {
    xmlResponse = "<items></items>";
    mock.onGet().reply(200, xmlResponse);
    await httpTrigger(context, request);

    expect(context.res.status).toEqual(200);
    expect(context.res.body).toHaveLength(0);
  });

  test("retrieving hot items", async () => {
    xmlResponse = `
      <items termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
        <item id="183685" rank="1">
          <thumbnail value="https://cf.geekdo-images.com/xneRUjohOxhdjMhLb6DUAg__thumb/img/3e0Mq0seyptqdZ22FActfJpjiDk=/fit-in/200x150/filters:strip_icc()/pic6977091.jpg"/>
          <name value="Mr. President: The American Presidency, 2001-2020"/>
          <yearpublished value="2023"/>
        </item>
        <item id="383607" rank="2">
          <thumbnail value="https://cf.geekdo-images.com/clBx1kfB-8OpO86B2-vsgg__thumb/img/8w625ctGlolYNodQdbXJtyOC3wg=/fit-in/200x150/filters:strip_icc()/pic7442376.jpg"/>
          <name value="Barcelona"/>
          <yearpublished value="2023"/>
        </item>
      </items>
      `;

    const expectedHotItem = {
      thumbnail: {
        value:
          "https://cf.geekdo-images.com/xneRUjohOxhdjMhLb6DUAg__thumb/img/3e0Mq0seyptqdZ22FActfJpjiDk=/fit-in/200x150/filters:strip_icc()/pic6977091.jpg",
      },
      name: {
        value: "Mr. President: The American Presidency, 2001-2020",
      },
      yearpublished: {
        value: "2023",
      },
      id: "183685",
      rank: "1",
    };

    mock.onGet().reply(200, xmlResponse);
    await httpTrigger(context, request);

    expect(context.res.status).toEqual(200);
    expect(context.res.body).toHaveLength(2);
    expect(context.res.body[0]).toMatchObject(expectedHotItem);
  });

  test("running hot items with an connection error", async () => {
    mock.onGet().networkError();
    await httpTrigger(context, request);
    console.log(context.res.body);
    expect(context.res.status).toEqual(500);
  });
});
