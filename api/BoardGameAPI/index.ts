import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { XMLParser} from "fast-xml-parser";
import fetch from "node-fetch";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log(`HTTP trigger function processed a request: {0}`, req);
  const parser = new XMLParser();
  const responseXml = await (await fetch(`https://api.geekdo.com/xmlapi2/search?query=${req.query.search}&type=boardgame`)).text();
  const response = parser.parse(responseXml);

  context.res = {
    status: 200,
    jsonBody: response,
  };
};

export default httpTrigger;
