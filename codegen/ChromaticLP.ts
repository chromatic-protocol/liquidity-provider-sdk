import { gql } from "graphql-request";

export const LP = gql`
  query LP($lpAddress: ID!) {
    chromaticLP(id: $lpAddress) {
      id
      longShortInfo
      lpTokenDecimals
      lpTokenSymbol
      lpTokenName
      market
      oracleDescription
      oracleProvider
      rebalanceBPS
      rebalanceCheckingInterval
      settlementTokenDecimals
      settlementToken
      settlementTokenSymbol
      utilizationTargetBPS
      clbTokenIds
      distributionRates
      feeRates
    }
  }
`;

export const LP_META = gql`
  query LPMeta($lpAddress: Bytes!) {
    chromaticLPMetas(
      orderBy: blockNumber
      orderDirection: desc
      first: 1
      where: { lp: $lpAddress }
    ) {
      lpName
      lpTag
    }
  }
`;

export const LP_CONFIG = gql`
  query LPConfig($lpAddress: Bytes!) {
    chromaticLPConfigs(
      orderBy: blockNumber
      orderDirection: desc
      first: 1
      where: { lp: $lpAddress }
    ) {
      minHoldingValueToRebalance
      automationFeeReserved
    }
  }
`;

export const LP_STAT = gql`
  query LPStat($lpAddress: Bytes!) {
    chromaticLPStats(
      orderBy: blockNumber
      orderDirection: desc
      first: 1
      where: { lp: $lpAddress }
    ) {
      pendingClbValue # valueInfo
      pendingValue # valueInfo
      totalValue
      utilization
      holdingValue # valueInfo
      holdingClbValue # valueInfo
    }
  }
`;

export const GET_RECEIPTS_OF = gql`
  query GetReceiptsOf($lpAddress: Bytes!, $owner: Bytes) {
    addLiquidities(where: { lp: $lpAddress, provider: $owner }) {
      receiptId
      provider
      recipient
      oracleVersion
      amount
    }
    removeLiquidities(where: { lp: $lpAddress, provider: $owner }) {
      receiptId
      provider
      recipient
      oracleVersion
      lpTokenAmount
    }
  }
`;

export const ESTIMATE_MIN_ADD_LIQUIDITY_AMOUNT = gql`
  query EstimateMinAddLiquidityAmount($lpId: ID!, $lpAddress: Bytes!) {
    chromaticLP(id: $lpId) {
      utilizationTargetBPS
    }
    chromaticLPConfigs(
      orderBy: blockNumber
      orderDirection: desc
      first: 1
      where: { lp: $lpAddress }
    ) {
      automationFeeReserved
    }
  }
`;
