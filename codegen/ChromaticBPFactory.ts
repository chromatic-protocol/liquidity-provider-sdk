import { gql } from "graphql-request";

export const BP_LIST = gql`
  query BpList {
    chromaticBPCreateds {
      bp
    }
  }
`;

export const LP_LIST_BY_LP = gql`
    query BpListByLp($lp: Bytes!) {
      chromaticBPCreateds(where: {lp: $lp}) {
        bp
      }
    }
`;
