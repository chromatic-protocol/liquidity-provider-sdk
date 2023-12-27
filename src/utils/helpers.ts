import { omit } from "lodash";
import { Client } from "../Client";
import { BPInfo } from "../entities";
import { LpInfo } from "../entities/ChromaticLP";
import {
  chromaticBpFactoryABI,
  chromaticLpRegistryABI,
  iChromaticBpABI,
  iChromaticLpABI,
} from "../gen";

import {
  Abi,
  AbiErrorSignatureNotFoundError,
  Address,
  ContractFunctionExecutionError,
  ContractFunctionRevertedError,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  hexToBigInt,
  keccak256,
  toHex,
} from "viem";

export type Contract<TAbi extends Abi> = GetContractReturnType<
  TAbi,
  PublicClient,
  WalletClient,
  Address
>;

export function checkPublicClient(
  client: Client
): asserts client is Client & { publicClient: PublicClient } {
  if (!client.publicClient) throw new Error("Public client is not set");
}
export function checkWalletClient(
  client: Client
): asserts client is Client & { walletClient: WalletClient } {
  if (!client.walletClient) throw new Error("Wallet client is not set");
}

export function checkClient(
  client: Client
): asserts client is Client & { publicClient: PublicClient; walletClient: WalletClient } {
  if (!client.walletClient) throw new Error("Wallet client is not set");
  if (!client.publicClient) throw new Error("Public client is not set");
}

export async function PromiseOnlySuccess<T>(values: Iterable<T | PromiseLike<T>>) {
  const result = await Promise.allSettled(values);
  return (
    result
      .filter((v): v is PromiseFulfilledResult<Awaited<T>> => v.status === "fulfilled")
      .map(({ value }) => value) || ([] as T[])
  );
}

export async function handleBytesError<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    if (
      e instanceof ContractFunctionExecutionError &&
      e.cause instanceof ContractFunctionRevertedError
    ) {
      const error = (e.cause as any).cause;
      if (error instanceof AbiErrorSignatureNotFoundError) {
        const signature = (error as any).signature;
        if (signature) {
          throw Error(`call reverted with error: ${errorSignitures[signature]}`);
        }
      }
    }

    throw e;
  }
}

interface ErrorSignatures {
  [key: string]: string;
}

export const errorSignitures: ErrorSignatures = [
  ...iChromaticLpABI,
  ...chromaticLpRegistryABI,
  ...chromaticBpFactoryABI,
  ...iChromaticBpABI,
]
  .filter((abi) => abi.type === "error")
  .reduce((prevErrMap, currErrAbi) => {
    const errName = (currErrAbi as any)["name"];
    const signature = keccak256(toHex(`${errName}()`)).substring(0, 10);
    prevErrMap[signature] = errName;
    return prevErrMap;
  }, {} as ErrorSignatures);

export const MAX_UINT256 = hexToBigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

export function convertBpInfoType(queryResult: BpQueryResult): BPInfo {
  const totalRaised = queryResult.totalRaised ?? [];
  const deposits = queryResult.deposits ?? [];
  const refunds = queryResult.refunds ?? [];
  const claims = queryResult.claims ?? [];
  return {
    address: queryResult.id,
    totalReward: BigInt(queryResult.totalReward),
    minRaisingTarget: BigInt(queryResult.minRaisingTarget),
    maxRaisingTarget: BigInt(queryResult.maxRaisingTarget),
    startTimeOfWarmup: BigInt(queryResult.startTimeOfWarmup),
    lp: convertLpInfoType(queryResult.lp),
    endTimeOfWarmup: BigInt(queryResult.statuses[0].endTimeOfWarmup),
    endTimeOfLockup: BigInt(queryResult.statuses[0].endTimeOfLockup),
    currentPeriod: queryResult.statuses[0].currentPeriod,
    status: queryResult.statuses[0].status,
    totalRaisedAmount: totalRaised.length < 1 ? 0n : BigInt(totalRaised[0].amount),
    depositedAmount: deposits.length < 1 ? 0n : BigInt(deposits[0].amount),
    refundedAmount: refunds.length < 1 ? 0n : BigInt(refunds[0].amount),
    claimedBpTokenAmount: claims.length < 1 ? 0n : BigInt(claims[0].bpTokenAmount),
    claimedLpTokenAmount: claims.length < 1 ? 0n : BigInt(claims[0].lpTokenAmount),
  };
}

export function convertLpInfoType(queryResult: LpQueryResult): LpInfo {
  return {
    ...omit(queryResult, ["__typename", "configs", "metas"]),
    rebalanceBPS: BigInt(queryResult.rebalanceBPS),
    rebalanceCheckingInterval: BigInt(queryResult.rebalanceCheckingInterval),
    utilizationTargetBPS: BigInt(queryResult.utilizationTargetBPS),
    clbTokenIds: queryResult.clbTokenIds.map((e) => BigInt(e)),
    lpName: queryResult.metas[0].lpName,
    lpTag: queryResult.metas[0].lpTag,
    minHoldingValueToRebalance: BigInt(queryResult.configs[0].minHoldingValueToRebalance),
    automationFeeReserved: BigInt(queryResult.configs[0].automationFeeReserved),
  };
}

type BpQueryResult = {
  __typename?: "ChromaticBP";
  id: `0x${string}`;
  totalReward: string;
  minRaisingTarget: string;
  maxRaisingTarget: string;
  startTimeOfWarmup: string;
  lp: LpQueryResult;
  statuses: Array<{
    __typename?: "ChromaticBPStatus";
    endTimeOfWarmup: string;
    endTimeOfLockup: string;
    currentPeriod: number;
    status: number;
  }>;
  totalRaised?: Array<{ __typename?: "ChromaticBPTotalRaised"; amount: string }>;
  deposits?: Array<{ __typename?: "ChromaticBPDeposit"; amount: string }>;
  refunds?: Array<{ __typename?: "ChromaticBPRefund"; amount: string }>;
  claims?: Array<{
    __typename?: "ChromaticBPClaim";
    bpTokenAmount: string;
    lpTokenAmount: string;
  }>;
};

type LpQueryResult = {
  __typename?: "ChromaticLP";
  id: `0x${string}`;
  longShortInfo: number;
  market: `0x${string}`;
  settlementToken: `0x${string}`;
  settlementTokenSymbol: string;
  settlementTokenDecimals: number;
  oracleProvider: `0x${string}`;
  oracleDescription: string;
  feeRates: Array<number>;
  clbTokenIds: Array<string>;
  lpTokenName: string;
  lpTokenSymbol: string;
  lpTokenDecimals: number;
  distributionRates: Array<number>;
  rebalanceBPS: string;
  rebalanceCheckingInterval: string;
  utilizationTargetBPS: string;
  metas: Array<{ __typename?: "ChromaticLPMeta"; lpName: string; lpTag: string }>;
  configs: Array<{
    __typename?: "ChromaticLPConfig";
    automationFeeReserved: string;
    minHoldingValueToRebalance: string;
  }>;
};
