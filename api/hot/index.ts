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

  const responseXml = await (
    await fetch(`https://api.geekdo.com/xmlapi2/hot`)
  ).text();
  // context.log(responseXml);
  const response = parser.parse(responseXml);
  // context.log(response);

  context.res = {
    status: 200,
    body: response.items?.item ?? [],
  };
};

export default httpTrigger;
