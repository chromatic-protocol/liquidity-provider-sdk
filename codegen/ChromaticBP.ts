import { gql } from "graphql-request";

export const CURRENT_WARMUP_POOL = gql`
  query CurrentWarmupPool($currentTimestamp: BigInt!, $account: Bytes!) {
    chromaticBPs(
      skip: 0
      first: 100
      orderBy: id
      orderDirection: asc
      where: {
        startTimeOfWarmup_gte: $currentTimestamp
        initialEndTimeOfWarmup_lt: $currentTimestamp
      } # CURRENT && status == 1
      subgraphError: deny
    ) {
      id
      totalReward
      minRaisingTarget
      maxRaisingTarget
      startTimeOfWarmup
      lp {
        id
        longShortInfo
        market
        settlementToken
        settlementTokenSymbol
        settlementTokenDecimals
        oracleProvider
        oracleDescription
        feeRates
        clbTokenIds
        lpTokenName
        lpTokenSymbol
        lpTokenDecimals
        distributionRates
        rebalanceBPS
        rebalanceCheckingInterval
        utilizationTargetBPS
        metas(skip: 0, first: 1, orderBy: blockNumber, orderDirection: desc) {
          lpName
          lpTag
        }
        configs(skip: 0, first: 1, orderBy: blockNumber, orderDirection: desc) {
          automationFeeReserved
          minHoldingValueToRebalance
        }
      }

      statuses(skip: 0, first: 1, orderBy: blockNumber, orderDirection: desc) {
        endTimeOfWarmup
        endTimeOfLockup
        currentPeriod
        status
      }

      totalRaised(skip: 0, first: 1, orderBy: blockNumber, orderDirection: desc) {
        amount
      }

      deposits(
        skip: 0
        first: 1
        orderBy: blockNumber
        orderDirection: desc
        where: { provider: $account }
      ) {
        amount
      }

      refunds(
        skip: 0
        first: 1
        orderBy: blockNumber
        orderDirection: desc
        where: { provider: $account }
      ) {
        amount
      }

      claims(
        skip: 0
        first: 1
        orderBy: blockNumber
        orderDirection: desc
        where: { provider: $account }
      ) {
        bpTokenAmount
        lpTokenAmount
      }
    }
  }
`;

export const UPCOMING_WARMUP_POOL = gql`
  query UpcomingWarmupPool($currentTimestamp: BigInt!) {
    chromaticBPs(
      skip: 0
      first: 100
      orderBy: id
      orderDirection: asc
      where: { startTimeOfWarmup_lt: $currentTimestamp } # UPCOMING
      subgraphError: deny
    ) {
      id
      totalReward
      minRaisingTarget
      maxRaisingTarget
      startTimeOfWarmup
      lp {
        id
        longShortInfo
        market
        settlementToken
        settlementTokenSymbol
        settlementTokenDecimals
        oracleProvider
        oracleDescription
        feeRates
        clbTokenIds
        lpTokenName
        lpTokenSymbol
        lpTokenDecimals
        distributionRates
        rebalanceBPS
        rebalanceCheckingInterval
        utilizationTargetBPS
        metas(skip: 0, first: 1, orderBy: blockNumber, orderDirection: desc) {
          lpName
          lpTag
        }
        configs(skip: 0, first: 1, orderBy: blockNumber, orderDirection: desc) {
          automationFeeReserved
          minHoldingValueToRebalance
        }
      }
      statuses(skip: 0, first: 1, orderBy: blockNumber, orderDirection: desc) {
        endTimeOfWarmup
        endTimeOfLockup
        currentPeriod
        status
      }
    }
  }
`;
