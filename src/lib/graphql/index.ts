import { GraphQLClient, RequestMiddleware, Variables } from "graphql-request";

import * as ChromaticBPFactory from "./sdk/ChromaticBPFactory";
import * as ChromaticLP from "./sdk/ChromaticLP";
import * as ChromaticRegistry from "./sdk/ChromaticRegistry";
import * as ChromaticBP from "./sdk/ChromaticBP";

import { SUBGRAPH_API_URL } from "../../../codegen/config";

type UrlMap = {
  operations: string[];
  url: string;
}[];

function getOperations(object: Object) {
  const documentSuffix = "Document";
  return Object.keys(object)
    .filter((k) => k.endsWith(documentSuffix))
    .map((k) => k.slice(0, -documentSuffix.length));
}

const urlMap: UrlMap = [
  {
    operations: getOperations(ChromaticBPFactory),
    url: `${SUBGRAPH_API_URL}/chromatic-lp`,
  },
  {
    operations: getOperations(ChromaticLP),
    url: `${SUBGRAPH_API_URL}/chromatic-lp`,
  },
  {
    operations: getOperations(ChromaticRegistry),
    url: `${SUBGRAPH_API_URL}/chromatic-lp`,
  },
];

const getRequestMiddleware =
  (urlMap: UrlMap): RequestMiddleware<Variables> =>
  (request) => {
    const url = urlMap.find((url) => url.operations.includes(request.operationName!))?.url;
    if (!url) {
      throw new Error("invalid operation");
    }
    return {
      ...request,
      url,
    };
  };

const graphClient = new GraphQLClient("", {
  requestMiddleware: getRequestMiddleware(urlMap),
});

const lpGraphSdk = ChromaticLP.getSdk(graphClient);
const bpFactoryGraphSdk = ChromaticBPFactory.getSdk(graphClient);
const registryGraphSdk = ChromaticRegistry.getSdk(graphClient);
const bpGraphSdk = ChromaticBP.getSdk(graphClient);

export { lpGraphSdk, bpFactoryGraphSdk, registryGraphSdk, bpGraphSdk };
