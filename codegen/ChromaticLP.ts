import { gql } from "graphql-request";

export const Lp = gql`
  query Lp($lpAddress: ID!) {
    chromaticLP(id: $lpAddress) {
      id
      distributionRates
      clbTokenIds
      feeRates
      longShortInfo
      lpTokenDecimals
      lpTokenName
      lpTokenSymbol
      market
      oracleDescription
      oracleProvider
      rebalanceBPS
      rebalanceCheckingInterval
      settlementToken
      settlementTokenDecimals
      settlementTokenSymbol
      utilizationTargetBPS
      metas(orderBy: blockNumber, orderDirection: desc, first: 1) {
        lpName
        lpTag
      }
      configs(orderBy: blockNumber, orderDirection: desc, first: 1) {
        automationFeeReserved
        minHoldingValueToRebalance
      }
    }
  }
`;

export const LP_STAT = gql`
  query LpStat($lpAddress: Bytes!) {
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
  query EstimateMinAddLiquidityAmount($lpAddress: ID!) {
    chromaticLP(id: $lpAddress) {
      utilizationTargetBPS
      configs(orderBy: blockNumber, orderDirection: desc, first: 1) {
        automationFeeReserved
      }
    }
  }
`;

export const ESTIMATE_MIN_REMOVE_LIQUIDITY_AMOUNT = gql`
  query EstimateMinRemoveLiquidityAmount($lpAddress: Bytes!) {
    chromaticLPConfigs(
      orderBy: blockNumber
      orderDirection: desc
      first: 1
      where: { lp_: { id: $lpAddress } }
    ) {
      automationFeeReserved
    }
    lptokenTotalSupplies(
      where: { token: $lpAddress }
      first: 1
      orderBy: blockNumber
      orderDirection: desc
    ) {
      amount
    }
    chromaticLPStats(
      orderBy: blockNumber
      orderDirection: desc
      first: 1
      where: { lp: $lpAddress }
    ) {
      holdingValue
    }
  }
`;

export const LP_TOTAL_SUPPLY = gql`
  query LpTotalSupply($lpAddress: Bytes!) {
    lptokenTotalSupplies(
      where: { token: $lpAddress }
      first: 1
      orderBy: blockNumber
      orderDirection: desc
    ) {
      amount
    }
  }
`;
