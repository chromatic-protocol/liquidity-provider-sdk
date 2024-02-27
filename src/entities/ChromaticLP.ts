import { Address, getContract } from "viem";
import { Client } from "../Client";
import { iChromaticLpABI, ierc20MetadataABI } from "../gen";
import type { ContractChromaticLP, ContractIErc20Metadata } from "../types";
import { checkClient, handleBytesError } from "../utils/helpers";

export const MIN_GAS_LIMIT_SETTLE_ALL = BigInt(5e7);

export function adjustMakerGasLimit(gas: bigint): bigint {
  return gas >= MIN_GAS_LIMIT_SETTLE_ALL ? gas : MIN_GAS_LIMIT_SETTLE_ALL;
}

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
          address: await this.settlementToken(lpAddress),
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

  async suspendMode(lpAddress: Address): Promise<number> {
    return await handleBytesError(async () => {
      // 0: not suspended
      // 1: addLiquidity only suspended
      // 2: addLiquidity/removeLiquidity both suspended
      return await this.contracts().lp(lpAddress).read.suspendMode();
    });
  }

  async marketOf(lpAddress: Address): Promise<Address> {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.market();
    });
  }

  async settlementToken(lpAddress: Address): Promise<Address> {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.settlementToken();
    });
  }

  async getLpName(lpAddress: Address): Promise<string> {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.lpName();
    });
  }
  async getLpTag(lpAddress: Address): Promise<string> {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.lpTag();
    });
  }
  async getReceiptIdsOf(lpAddress: Address, owner: Address): Promise<readonly bigint[]> {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.getReceiptIdsOf([owner]);
    });
  }

  async getReceipt(lpAddress: Address, receiptId: bigint) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.getReceipt([receiptId]);
    });
  }

  async utilization(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.utilization();
    });
  }

  async totalValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.totalValue();
    });
  }

  async valueInfo(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.valueInfo();
    });
  }

  async holdingValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.holdingValue();
    });
  }

  async pendingValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.pendingValue();
    });
  }

  async holdingClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.holdingClbValue();
    });
  }

  async pendingClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.pendingClbValue();
    });
  }

  async totalClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.totalClbValue();
    });
  }

  async feeRates(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.feeRates();
    });
  }

  async clbTokenIds(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.clbTokenIds();
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

  async lpTokenMeta(lpAddress: Address) {
    return await handleBytesError(async () => {
      const lpContract = this.contracts().lpToken(lpAddress);
      const [name, symbol, decimals] = await Promise.all([
        lpContract.read.name(),
        lpContract.read.symbol(),
        lpContract.read.decimals(),
      ]);
      return {
        name,
        symbol,
        decimals,
      };
    });
  }

  async totalSupply(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lpToken(lpAddress).read.totalSupply();
    });
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
  async automationFeeReserved(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.automationFeeReserved();
    });
  }
  async distributionRates(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.distributionRates();
    });
  }
  async rebalanceBPS(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.rebalanceBPS();
    });
  }
  async rebalanceCheckingInterval(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.rebalanceCheckingInterval();
    });
  }
  async utilizationTargetBPS(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.utilizationTargetBPS();
    });
  }
  async estimateMinAddLiquidityAmount(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.estimateMinAddLiquidityAmount();
    });
  }
  async estimateMinRemoveLiquidityAmount(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.estimateMinRemoveLiquidityAmount();
    });
  }
  async minHoldingValueToRebalance(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.minHoldingValueToRebalance();
    });
  }
  async longShortInfo(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.longShortInfo();
    });
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
    const allowance = async () =>
      await settlementToken.read.allowance([account, lpAddress], {
        account: account,
      });

    if (amount > (await allowance())) {
      const { request } = await settlementToken.simulate.approve([lpAddress, amount], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      if (receipt) {
        return (await allowance()) >= amount;
      }
      return false;
    }
    return true;
  }

  async approveLpTokenToLp(lpAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const lpToken = this.contracts().lpToken(lpAddress);
    const account = this._client.walletClient.account!.address;
    const allowance = async () =>
      await lpToken.read.allowance([account, lpAddress], {
        account: account,
      });
    if (amount > (await allowance())) {
      const { request } = await lpToken.simulate.approve([lpAddress, amount], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      if (receipt) {
        return (await allowance()) >= amount;
      }
      return false;
    }
    return true;
  }

  async addLiquidity(lpAddress: Address, amount: bigint, recipient?: Address) {
    checkClient(this._client);

    if (!(await this.approveSettlementTokenToLp(lpAddress, amount))) {
      throw new Error("SettlementToken: insufficient allowance");
    }

    return await handleBytesError(async () => {
      checkClient(this._client);

      const account = this._client.walletClient.account!.address;
      const args = [amount, recipient || account] as const;
      const options = {
        account: account,
      };
      const lp = this.contracts().lp(lpAddress);
      const { request } = await lp.simulate.addLiquidity(args, options);
      const estimatedGas = await lp.estimateGas.addLiquidity(args, options);
      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async removeLiquidity(lpAddress: Address, lpTokenAmount: bigint, recipient?: Address) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    if (!(await this.approveLpTokenToLp(lpAddress, lpTokenAmount))) {
      throw new Error("LpToken: insufficient allowance");
    }

    return await handleBytesError(async () => {
      checkClient(this._client);

      const account = this._client.walletClient.account!.address;
      const args = [lpTokenAmount, recipient || account] as const;
      const options = {
        account: account,
      };
      const lp = this.contracts().lp(lpAddress);

      const { request } = await lp.simulate.removeLiquidity(args, options);
      const estimatedGas = await lp.estimateGas.removeLiquidity(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
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
