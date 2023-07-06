import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { XMLParser } from "fast-xml-parser";
import fetch from "node-fetch";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log(`HTTP trigger function processed a request: {0}`, req);
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "",
  };
  const parser = new XMLParser(options);
  const searchParameter = req.query.search;
  if (!searchParameter) {
    context.res = {
      status: 200,
      body: {},
    };
    return;
  }

  const responseXml = await (
    await fetch(
      `https://api.geekdo.com/xmlapi2/search?query=${searchParameter}&type=boardgame`
    )
  ).text();
  // context.log(responseXml);
  const response = parser.parse(responseXml);
  // context.log(response.items.item);

  context.res = {
    status: 200,
    body: response.items.item ? response.items.item : [],
  };
};

export default httpTrigger;
