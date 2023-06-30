import httpTrigger from "./index";
import { describe, expect, test, beforeEach } from "@jest/globals";
import { Context, HttpRequest } from "@azure/functions";

describe("Hot", () => {
  let context: Context;
  let request: HttpRequest;

  let xmlResponse: string;

  global.fetch = jest.fn(() => {
    return Promise.resolve({
      text: () => Promise.resolve(xmlResponse),
    });
  }) as jest.Mock;

  beforeEach(() => {
    // Really crude and unsafe implementations that will be replaced soon
    context = { log: () => {} } as Context;
    request = { query: {} } as HttpRequest;
  });

  test("empty hot items", async () => {
    xmlResponse = "<items></items>";
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

    await httpTrigger(context, request);

    expect(context.res.status).toEqual(200);
    expect(context.res.body).toHaveLength(2);
    expect(context.res.body[0]).toMatchObject(expectedHotItem);
  });
});
