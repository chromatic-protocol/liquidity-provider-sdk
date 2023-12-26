import type { CodegenConfig } from "@graphql-codegen/cli";

export const SUBGRAPH_API_URL =
  "https://graph-arbitrum-sepolia.api.chromatic.finance/subgraphs/name";

const INPUT = ["ChromaticRegistry.ts", "ChromaticBPFactory.ts", "ChromaticLP.ts"];
const GENERATED_PATH = "src/lib/graphql/sdk";

const common = {
  schema: `${SUBGRAPH_API_URL}/chromatic-lp`,
  plugins: ["typescript", "typescript-operations", "typescript-graphql-request"],
  config: {
    scalars: {
      Bytes: {
        input: "`0x${string}`",
        output: "`0x${string}`",
      },
      BigInt: {
        input: "string",
        output: "string",
      },
      citext: {
        input: "string",
        output: "string",
      },
      date: {
        input: "string",
        output: "string",
      },
    },
  },
};

function generates() {
  return INPUT.reduce((prev, curr) => {
    prev[`${GENERATED_PATH}/${curr}`] = {
      documents: `codegen/${curr}`,
      ...common,
    };
    return prev;
  }, {} as Record<string, any>);
}

const config: CodegenConfig = {
  overwrite: true,
  noSilentErrors: true,
  generates: generates(),
};

export default config;
