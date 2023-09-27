import { Address, getContract } from "viem";
import { Client } from "../Client";
import { chromaticLpABI, ierc20MetadataABI } from "../gen";
import type { ContractChromaticLP, ContractIErc20Metadata } from "../types";
import { MAX_UINT256, checkClient, handleBytesError } from "../utils/helpers";

export class ChromaticLP {
  constructor(private readonly _client: Client) {}

  contracts() {
    return {
      lp: (lpAddress: Address): ContractChromaticLP =>
        getContract({
          address: lpAddress,
          abi: chromaticLpABI,
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
      lpToken: async (lpAddress: Address): Promise<ContractIErc20Metadata> =>
        getContract({
          address: lpAddress,
          abi: ierc20MetadataABI,
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

  async getReceiptIdsOf(lpAddress: Address, owner: Address): Promise<readonly bigint[]> {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.getReceiptIdsOf([owner], {
        account: this._client.walletClient!.account,
      });
    });
  }

  async getReceipt(lpAddress: Address, receiptId: bigint) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.getReceipt([receiptId], {
        account: this._client.walletClient!.account,
      });
    });
  }

  async utilization(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.utilization({
        account: this._client.walletClient!.account,
      });
    });
  }

  async totalValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.totalValue({
        account: this._client.walletClient!.account,
      });
    });
  }

  async valueInfo(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.valueInfo({
        account: this._client.walletClient!.account,
      });
    });
  }

  async holdingValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.holdingValue({
        account: this._client.walletClient!.account,
      });
    });
  }

  async pendingValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.pendingValue({
        account: this._client.walletClient!.account,
      });
    });
  }

  async holdingClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.holdingClbValue({
        account: this._client.walletClient!.account,
      });
    });
  }

  async pendingClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.pendingClbValue({
        account: this._client.walletClient!.account,
      });
    });
  }

  async totalClbValue(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.totalClbValue({
        account: this._client.walletClient!.account,
      });
    });
  }

  async feeRates(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.feeRates({
        account: this._client.walletClient!.account,
      });
    });
  }

  async clbTokenIds(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.clbTokenIds({
        account: this._client.walletClient!.account,
      });
    });
  }

  async clbTokenBalances(lpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.clbTokenIds({
        account: this._client.walletClient!.account,
      });
    });
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
      return await this.contracts().lp(lpAddress).read.totalSupply({
        account: this._client.walletClient!.account,
      });
    });
  }

  async balanceOf(lpAddress: Address, account: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.balanceOf([account], {
        account: this._client.walletClient!.account,
      });
    });
  }

  async allowance(lpAddress: Address, owner: Address, spender: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.allowance([owner, spender], {
        account: this._client.walletClient!.account,
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
        .lp(lpAddress)
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
      return await this.contracts().lp(lpAddress).read.resolveSettle([receiptId]);
    });
    return canExec;
  }
  async resolveRebalance(lpAddress: Address): Promise<boolean> {
    // for debugging
    const [canExec] = await handleBytesError(async () => {
      return await this.contracts().lp(lpAddress).read.resolveRebalance();
    });
    return canExec;
  }
}
