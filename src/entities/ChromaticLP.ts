import { Address, getContract } from "viem";
import { Client } from "../Client";
import { iChromaticLpABI, ierc20MetadataABI } from "../gen";
import { lpGraphSdk } from "../lib/graphql";
import type { ContractChromaticLP, ContractIErc20Metadata } from "../types";
import { MAX_UINT256, checkClient, convertLpInfoType, handleBytesError } from "../utils/helpers";

export const iChromaticMarketABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tradingFeeRates", internalType: "int16[]", type: "int16[]" }],
    name: "getBinValues",
    outputs: [{ name: "values", internalType: "uint256[]", type: "uint256[]" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "clbToken",
    outputs: [{ name: "", internalType: "contract ICLBToken", type: "address" }],
  },
] as const;

export const clbTokenABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "ids", internalType: "uint256[]", type: "uint256[]" }],
    name: "totalSupplyBatch",
    outputs: [{ name: "", internalType: "uint256[]", type: "uint256[]" }],
  },
] as const;

export class ChromaticLP {
  constructor(private readonly _client: Client) {}

  contracts() {
    return {
      lp: (lpAddress: Address): ContractChromaticLP =>
        getContract({
          address: lpAddress,
          abi: iChromaticLpABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      settlementToken: async (lpAddress: Address): Promise<ContractIErc20Metadata> =>
        getContract({
          address: (await this.getLpInfo(lpAddress)).settlementToken,
          abi: ierc20MetadataABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      lpToken: (lpAddress: Address): ContractIErc20Metadata =>
        getContract({
          address: lpAddress,
          abi: ierc20MetadataABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      market: (marketAddress: Address) =>
        getContract({
          address: marketAddress,
          abi: iChromaticMarketABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      clbToken: async (marketAddress: Address) => {
        const market = this.contracts().market(marketAddress);
        const clbTokenAddress = await market.read.clbToken();
        return getContract({
          address: clbTokenAddress,
          abi: clbTokenABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        });
      },
    };
  }

  async getLpStat(lpAddress: Address): Promise<LpStat> {
    const result = await lpGraphSdk.LpStat({ lpAddress });
    if (result.chromaticLPStats.length < 1) {
      return {
        pendingClbValue: 0n,
        pendingValue: 0n,
        totalValue: 0n,
        utilization: 0,
        holdingValue: 0n,
        holdingClbValue: 0n,
      };
    }
    const lpStat = result.chromaticLPStats[0];
    return {
      pendingClbValue: BigInt(lpStat.pendingClbValue),
      pendingValue: BigInt(lpStat.pendingValue),
      totalValue: BigInt(lpStat.totalValue),
      utilization: lpStat.utilization,
      holdingValue: BigInt(lpStat.holdingValue),
      holdingClbValue: BigInt(lpStat.holdingClbValue),
    };
  }

  async getLpInfo(lpAddress: Address): Promise<LpInfo> {
    const result = await lpGraphSdk.Lp({ lpAddress });
    if (!result.chromaticLP) {
      throw Error("invalid lpAddress");
    }
    const lpInfo = result.chromaticLP;
    if (lpInfo.configs.length < 1 || lpInfo.metas.length < 1) {
      throw Error("invalid lpAddress");
    }

    return convertLpInfoType(lpInfo);
  }

  async getReceiptsOf(lpAddress: Address, owner: Address): Promise<LpReceipt[]> {
    const result = await lpGraphSdk.GetReceiptsOf({ lpAddress, owner });
    const addLiquidityReceipts: LpReceipt[] = result.addLiquidities.map((e) => ({
      receiptType: "ADD",
      ...e,
      receiptId: BigInt(e.receiptId),
      oracleVersion: BigInt(e.oracleVersion),
      amount: BigInt(e.amount),
    }));
    const removeLiquidityReceipts: LpReceipt[] = result.removeLiquidities.map((e) => ({
      receiptType: "REMOVE",
      ...e,
      receiptId: BigInt(e.receiptId),
      oracleVersion: BigInt(e.oracleVersion),
      amount: BigInt(e.lpTokenAmount),
    }));
    const receipts: LpReceipt[] = [...addLiquidityReceipts, ...removeLiquidityReceipts];
    return receipts.sort((a, b) => Number(b.receiptId - a.receiptId)); // DESC
  }

  async getReceipt(lpAddress: Address, receiptId: bigint) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.getReceipt([receiptId]);
    });
  }

  async totalClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.totalClbValue();
    });
  }

  async clbTokenBalances(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.clbTokenBalances();
    });
  }

  async clbTokenValues(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.clbTokenValues();
    });
  }

  async totalSupply(lpAddress: Address): Promise<BigInt> {
    const result = await lpGraphSdk.LpTotalSupply({ lpAddress });
    if (result.lptokenTotalSupplies.length < 1) {
      return 0n;
    }
    return BigInt(result.lptokenTotalSupplies[0].amount);
  }

  async balanceOf(lpAddress: Address, account: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lpToken(lpAddress).read.balanceOf([account]);
    });
  }

  async allowance(lpAddress: Address, owner: Address, spender: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lpToken(lpAddress).read.allowance([owner, spender]);
    });
  }

  async estimateMinAddLiquidityAmount(lpAddress: Address) {
    const result = await lpGraphSdk.EstimateMinAddLiquidityAmount({ lpAddress });
    if (!result.chromaticLP || result.chromaticLP.configs.length < 1) {
      return 0;
    }
    const automationFeeReserved = BigInt(result.chromaticLP.configs[0].automationFeeReserved);
    const utilizationTargetBPS = BigInt(result.chromaticLP!.utilizationTargetBPS);

    // s_config.automationFeeReserved +
    //         s_config.automationFeeReserved.mulDiv(BPS, BPS - s_config.utilizationTargetBPS);
    return (
      automationFeeReserved + (automationFeeReserved * 10000n) / (10000n - utilizationTargetBPS)
    );
  }
  async estimateMinRemoveLiquidityAmount(lpAddress: Address) {
    const result = await lpGraphSdk.EstimateMinRemoveLiquidityAmount({
      lpAddress,
    });
    if (
      result.chromaticLPConfigs.length < 1 ||
      result.lptokenTotalSupplies.length < 1 ||
      result.chromaticLPStats.length < 1
    ) {
      return 0;
    }

    const automationFeeReserved = BigInt(result.chromaticLPConfigs[0].automationFeeReserved);
    const totalSupply = BigInt(result.lptokenTotalSupplies[0].amount);
    const holdingValue = BigInt(result.chromaticLPStats[0].holdingValue);

    // return s_config.automationFeeReserved.mulDiv(totalSupply(), holdingValue());
    return (automationFeeReserved * totalSupply) / holdingValue;
  }

  async transferFrom(
    lpAddress: Address,
    from: Address,
    to: Address,
    amount: bigint
  ): Promise<boolean> {
    checkClient(this._client);
    const account = this._client.walletClient.account!.address;
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .lpToken(lpAddress)
        .simulate.transferFrom([from, to, amount], {
          account: account,
        });
      const hash = await this._client.walletClient.writeContract(request);
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    });
  }

  async approveSettlementTokenToLp(lpAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const settlementToken = await this.contracts().settlementToken(lpAddress);
    const account = this._client.walletClient.account!.address;
    const allowance = await settlementToken.read.allowance([account, lpAddress], {
      account: account,
    });
    if (allowance < amount) {
      const { request } = await settlementToken.simulate.approve([lpAddress, MAX_UINT256], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      // TODO false condition
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    }
    return true;
  }

  async approveLpTokenToLp(lpAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const lpToken = await this.contracts().lpToken(lpAddress);
    const account = this._client.walletClient.account!.address;
    const allowance = await lpToken.read.allowance([account, lpAddress], {
      account: account,
    });
    if (allowance < amount) {
      const { request } = await lpToken.simulate.approve([lpAddress, MAX_UINT256], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      // TODO false condition
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    }
    return true;
  }

  async addLiquidity(lpAddress: Address, amount: bigint, recipient?: Address) {
    checkClient(this._client);

    if (!(await this.approveSettlementTokenToLp(lpAddress, amount))) {
      return;
    }
    const account = this._client.walletClient.account!.address;

    return await handleBytesError(async () => {
      checkClient(this._client);

      const { request } = await this.contracts()
        .lp(lpAddress)
        .simulate.addLiquidity([amount, recipient || account], {
          account: account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async removeLiquidity(lpAddress: Address, lpTokenAmount: bigint, recipient?: Address) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    if (!(await this.approveLpTokenToLp(lpAddress, lpTokenAmount))) {
      return;
    }
    const account = this._client.walletClient.account!.address;

    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .lp(lpAddress)
        .simulate.removeLiquidity([lpTokenAmount, recipient || account], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async settle(lpAddress: Address, receiptId: bigint) {
    // for debugging
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    const account = this._client.walletClient.account!.address;

    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts().lp(lpAddress).simulate.settle([receiptId], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async checkSettle(lpAddress: Address, receiptId: bigint): Promise<boolean> {
    // for debugging
    const canExec = await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.checkSettle([receiptId], {
        account: this._client.publicClient?.account,
      });
    });
    return canExec;
  }

  async checkRebalance(lpAddress: Address): Promise<boolean> {
    // for debugging
    const canExec = await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.checkRebalance({
        account: this._client.publicClient?.account,
      });
    });
    return canExec;
  }
}

export type LpInfo = {
  longShortInfo: number;
  lpTokenDecimals: number;
  lpTokenSymbol: string;
  lpTokenName: string;
  market: Address;
  oracleDescription: string;
  oracleProvider: Address;
  rebalanceBPS: bigint;
  rebalanceCheckingInterval: bigint;
  settlementTokenDecimals: number;
  settlementToken: Address;
  settlementTokenSymbol: string;
  utilizationTargetBPS: bigint;
  clbTokenIds: Array<bigint>;
  distributionRates: Array<number>;
  feeRates: Array<number>;
  lpName: string;
  lpTag: string;
  minHoldingValueToRebalance: bigint;
  automationFeeReserved: bigint;
};

export type LpStat = {
  pendingClbValue: bigint;
  pendingValue: bigint;
  totalValue: bigint;
  utilization: number;
  holdingValue: bigint;
  holdingClbValue: bigint;
};

export type LpReceipt = {
  receiptType: string;
  receiptId: bigint;
  provider: Address;
  recipient: Address;
  oracleVersion: bigint;
  amount: bigint;
};
