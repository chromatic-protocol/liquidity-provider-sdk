import { Address, getContract } from "viem";
import { Client } from "../Client";
import { iChromaticBpABI, ierc20MetadataABI } from "../gen";
import type { ContractChromaticBP, ContractIErc20Metadata } from "../types";
import { checkClient, handleBytesError } from "../utils/helpers";

export enum BPPeriod {
  PREWARMUP,
  WARMUP,
  LOCKUP,
  POSTLOCKUP,
}

export enum BPStatus {
  UPCOMING,
  DEPOSITABLE,
  WAIT_BOOST,
  WAIT_SETTLE,
  LOCKUP,
  CLAIMABLE,
  REFUNDABLE,
}
export class ChromaticBP {
  constructor(private readonly _client: Client) {}

  contracts() {
    return {
      bp: (bpAddress: Address): ContractChromaticBP =>
        getContract({
          address: bpAddress,
          abi: iChromaticBpABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      settlementToken: async (bpAddress: Address): Promise<ContractIErc20Metadata> =>
        getContract({
          address: await this.settlementToken(bpAddress),
          abi: ierc20MetadataABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      bpToken: (bpAddress: Address): ContractIErc20Metadata =>
        getContract({
          address: bpAddress,
          abi: ierc20MetadataABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
    };
  }

  async totalRaised(bpAddress: Address): Promise<bigint> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.totalRaised();
    });
  }

  async minRaisingTarget(bpAddress: Address): Promise<bigint> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.minRaisingTarget();
    });
  }

  async maxRaisingTarget(bpAddress: Address): Promise<bigint> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.maxRaisingTarget();
    });
  }
  async startTimeOfWarmup(bpAddress: Address): Promise<bigint> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.startTimeOfWarmup();
    });
  }
  async endTimeOfWarmup(bpAddress: Address): Promise<bigint> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.endTimeOfWarmup();
    });
  }

  async targetLP(bpAddress: Address): Promise<Address> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.targetLP();
    });
  }

  async settlementToken(bpAddress: Address): Promise<Address> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.settlementToken();
    });
  }

  async currentPeriod(bpAddress: Address): Promise<BPPeriod> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.currentPeriod();
    });
  }

  async isDepositable(bpAddress: Address): Promise<boolean> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.isDepositable();
    });
  }

  async isRefundable(bpAddress: Address): Promise<boolean> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.isRefundable();
    });
  }

  async isClaimable(bpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.isClaimable();
    });
  }

  async totalReward(bpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.totalReward();
    });
  }

  async status(bpAddress: Address): Promise<BPStatus> {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.status();
    });
  }

  async bpTokenMeta(bpAddress: Address) {
    return await handleBytesError(async () => {
      const bpContract = this.contracts().bpToken(bpAddress);
      const [name, symbol, decimals] = await Promise.all([
        bpContract.read.name(),
        bpContract.read.symbol(),
        bpContract.read.decimals(),
      ]);
      return {
        name,
        symbol,
        decimals,
      };
    });
  }

  async totalSupply(bpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().bpToken(bpAddress).read.totalSupply();
    });
  }

  async balanceOf(bpAddress: Address, account: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().bpToken(bpAddress).read.balanceOf([account]);
    });
  }

  async allowance(bpAddress: Address, owner: Address, spender: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().bpToken(bpAddress).read.allowance([owner, spender]);
    });
  }

  async transferFrom(
    bpAddress: Address,
    from: Address,
    to: Address,
    amount: bigint
  ): Promise<boolean> {
    checkClient(this._client);
    const account = this._client.walletClient.account!.address;
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .bpToken(bpAddress)
        .simulate.transferFrom([from, to, amount], {
          account: account,
        });
      const hash = await this._client.walletClient.writeContract(request);
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    });
  }

  async approveSettlementTokenToBp(bpAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const settlementToken = await this.contracts().settlementToken(bpAddress);
    const account = this._client.walletClient.account!.address;
    const allowance = async () =>
      await settlementToken.read.allowance([account, bpAddress], {
        account: account,
      });
    const requiredAmount = amount - (await allowance());
    if (requiredAmount > 0) {
      const { request } = await settlementToken.simulate.approve([bpAddress, requiredAmount], {
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

  async approveBpTokenToBp(bpAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const bpToken = this.contracts().bpToken(bpAddress);
    const account = this._client.walletClient.account!.address;
    const allowance = async () =>
      await bpToken.read.allowance([account, bpAddress], {
        account: account,
      });
    const requiredAmount = amount - (await allowance());
    if (requiredAmount > 0) {
      const { request } = await bpToken.simulate.approve([bpAddress, requiredAmount], {
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

  async deposit(bpAddress: Address, amount: bigint) {
    checkClient(this._client);

    if (!(await this.approveSettlementTokenToBp(bpAddress, amount))) {
      throw new Error("SettlementToken: insufficient allowance");
    }
    const account = this._client.walletClient.account!.address;

    return await handleBytesError(async () => {
      checkClient(this._client);

      const { request } = await this.contracts().bp(bpAddress).simulate.deposit([amount], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async refund(bpAddress: Address) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    const account = this._client.walletClient.account!.address;

    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts().bp(bpAddress).simulate.refund({
        account: this._client.walletClient.account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async claimLiquidity(bpAddress: Address) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    const account = this._client.walletClient.account!.address;

    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts().bp(bpAddress).simulate.claimLiquidity({
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async boost(bpAddress: Address) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    const account = this._client.walletClient.account!.address;

    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts().bp(bpAddress).simulate.boost({
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  async checkBoost(bpAddress: Address): Promise<boolean> {
    // for debugging
    const canExec = await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.checkBoost({
        account: this._client.publicClient?.account,
      });
    });
    return canExec;
  }
}
