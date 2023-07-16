import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { XMLParser } from "fast-xml-parser";
import axios from "axios";

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

  try {
    const responseXml = await axios.get(`https://api.geekdo.com/xmlapi2/hot`);
    const response = parser.parse(responseXml.data);
    context.res = {
      status: 200,
      body: response.items.item ? response.items.item : [],
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
