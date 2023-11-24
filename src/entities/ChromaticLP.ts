import { Address, getContract } from "viem";
import { Client } from "../Client";
import { iChromaticLpABI, ierc20MetadataABI } from "../gen";
import type { ContractChromaticLP, ContractIErc20Metadata } from "../types";
import { MAX_UINT256, checkClient, handleBytesError } from "../utils/helpers";

export const iChromaticMarketABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "ids", internalType: "uint256[]", type: "uint256[]" }],
    name: "totalSupplyBatch",
    outputs: [{ name: "", internalType: "uint256[]", type: "uint256[]" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tradingFeeRates", internalType: "int16[]", type: "int16[]" }],
    name: "getBinValues",
    outputs: [{ name: "values", internalType: "uint256[]", type: "uint256[]" }],
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
    };
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
      return await this.contracts().lp(lpAddress).read.getReceiptIdsOf([owner], {
        account: this._client.publicClient?.account,
      });
    });
  }

  async getReceipt(lpAddress: Address, receiptId: bigint) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.getReceipt([receiptId], {
        account: this._client.publicClient?.account,
      });
    });
  }

  async utilization(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.utilization({
        account: this._client.publicClient?.account,
      });
    });
  }

  async totalValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.totalValue({
        account: this._client.publicClient?.account,
      });
    });
  }

  async valueInfo(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.valueInfo({
        account: this._client.publicClient?.account,
      });
    });
  }

  async holdingValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.holdingValue({
        account: this._client.publicClient?.account,
      });
    });
  }

  async pendingValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.pendingValue({
        account: this._client.publicClient?.account,
      });
    });
  }

  async holdingClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.holdingClbValue({
        account: this._client.publicClient?.account,
      });
    });
  }

  async pendingClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.pendingClbValue({
        account: this._client.publicClient?.account,
      });
    });
  }

  async totalClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.totalClbValue({
        account: this._client.publicClient?.account,
      });
    });
  }

  async feeRates(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.feeRates({
        account: this._client.publicClient?.account,
      });
    });
  }

  async clbTokenIds(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.clbTokenIds({
        account: this._client.publicClient?.account,
      });
    });
  }

  async clbTokenBalances(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.clbTokenBalances({
        account: this._client.publicClient?.account,
      });
    });
  }

  async clbTokenValues(lpAddress: Address) {
    const marketAddress = await this.marketOf(lpAddress);
    const market = this.contracts().market(marketAddress);

    const totalSupplies = await market.read.totalSupplyBatch([await this.clbTokenIds(lpAddress)]);
    const binValues = await market.read.getBinValues([await this.feeRates(lpAddress)]);
    const clbBalances = await this.clbTokenBalances(lpAddress);
    const values = totalSupplies.map((x, i) =>
      x == 0n ? 0n : (binValues[i] * clbBalances[i]) / x
    );
    return values;
  }

  async lpTokenMeta(lpAddress: Address) {
    return await handleBytesError(async () => {
      const lpContract = await this.contracts().lpToken(lpAddress);
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
      return await this.contracts().lpToken(lpAddress).read.totalSupply({
        account: this._client.publicClient?.account,
      });
    });
  }

  async balanceOf(lpAddress: Address, account: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lpToken(lpAddress).read.balanceOf([account], {
        account: this._client.publicClient?.account,
      });
    });
  }

  async allowance(lpAddress: Address, owner: Address, spender: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lpToken(lpAddress).read.allowance([owner, spender], {
        account: this._client.publicClient?.account,
      });
    });
  }
  async automationFeeReserved(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.automationFeeReserved({
        account: this._client.publicClient?.account,
      });
    });
  }
  async distributionRates(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.distributionRates({
        account: this._client.publicClient?.account,
      });
    });
  }
  async rebalanceBPS(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.rebalanceBPS({
        account: this._client.publicClient?.account,
      });
    });
  }
  async rebalanceCheckingInterval(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.rebalanceCheckingInterval({
        account: this._client.publicClient?.account,
      });
    });
  }
  async settleCheckingInterval(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.settleCheckingInterval({
        account: this._client.publicClient?.account,
      });
    });
  }
  async utilizationTargetBPS(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.utilizationTargetBPS({
        account: this._client.publicClient?.account,
      });
    });
  }
  async estimateMinAddLiquidityAmount(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.estimateMinAddLiquidityAmount({
        account: this._client.publicClient?.account,
      });
    });
  }
  async estimateMinRemoveLiquidityAmount(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.estimateMinRemoveLiquidityAmount({
        account: this._client.publicClient?.account,
      });
    });
  }
  async minHoldingValueToRebalance(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.minHoldingValueToRebalance({
        account: this._client.publicClient?.account,
      });
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

  async resolveSettle(lpAddress: Address, receiptId: bigint): Promise<boolean> {
    // for debugging
    const [canExec] = await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.resolveSettle([receiptId], {
        account: this._client.publicClient?.account,
      });
    });
    return canExec;
  }

  async resolveRebalance(lpAddress: Address): Promise<boolean> {
    // for debugging
    const [canExec] = await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.resolveRebalance({
        account: this._client.publicClient?.account,
      });
    });
    return canExec;
  }
}
