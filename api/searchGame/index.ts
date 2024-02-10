import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request: {0}", req);
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

  try {
    const responseXml = await axios.get(
      `https://api.geekdo.com/xmlapi/boardgame/${searchParameter}`
    );
    const response = parser.parse(responseXml.data);
    context.res = {
      status: 200,
      body: response?.boardgames?.boardgame ?? [],
    };
  } catch (error) {
    console.error(error);
    context.res = {
      status: 500,
      body: error,
    };
  }
};

export default httpTrigger;
