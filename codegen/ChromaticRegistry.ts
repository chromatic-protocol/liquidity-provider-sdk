import { gql } from "graphql-request";

export const LP_LIST = gql`
  query LpList {
    chromaticLPs {
      id
    }
  }
`;

export const LP_LIST_BY_MARKET = gql`
  query LpListByMarket($market: Bytes!) {
    chromaticLPs(where: { market: $market }) {
      id
    }
  }
`;

export const LP_LIST_BY_SETTLEMENT_TOKEN = gql`
  query LpListBySettlementToken($settlementToken: Bytes!) {
    chromaticLPs(where: { settlementToken: $settlementToken }) {
      id
    }
  }
`;
