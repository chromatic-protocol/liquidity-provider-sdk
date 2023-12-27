import { Address, getContract, zeroAddress } from "viem";
import { Client } from "../Client";
import { iChromaticBpABI, ierc20MetadataABI } from "../gen";
import type { ContractChromaticBP, ContractIErc20Metadata } from "../types";
import { MAX_UINT256, checkClient, convertBpInfoType, handleBytesError } from "../utils/helpers";
import { bpGraphSdk } from "../lib/graphql";
import { LpInfo } from "./ChromaticLP";

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

  async currentPools(): Promise<BPInfo[]> {
    const currentTimestamp = `${Math.floor(Date.now() / 1000)}`;
    const account = this._client.publicClient?.account ?? zeroAddress;
    const result = await bpGraphSdk.CurrentWarmupPool({ currentTimestamp, account });
    const targetPools = result.chromaticBPs.filter(
      (e) => e.statuses.length > 0 && e.statuses[0].status === 1
    );
    return targetPools.map((e) => convertBpInfoType(e));
  }

  async upcomingPools(): Promise<BPInfo[]> {
    const currentTimestamp = `${Math.floor(Date.now() / 1000)}`;
    const result = await bpGraphSdk.UpcomingWarmupPool({ currentTimestamp });
    const targetPools = result.chromaticBPs.filter(
      (e) => e.statuses.length > 0 && e.statuses[0].status === 0
    );
    return targetPools.map((e) => convertBpInfoType(e));
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

  async settlementToken(bpAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().bp(bpAddress).read.settlementToken();
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
    const allowance = await settlementToken.read.allowance([account, bpAddress], {
      account: account,
    });
    if (allowance < amount) {
      const { request } = await settlementToken.simulate.approve([bpAddress, MAX_UINT256], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    }
    return true;
  }

  async approveBpTokenToBp(bpAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const bpToken = await this.contracts().bpToken(bpAddress);
    const account = this._client.walletClient.account!.address;
    const allowance = await bpToken.read.allowance([account, bpAddress], {
      account: account,
    });
    if (allowance < amount) {
      const { request } = await bpToken.simulate.approve([bpAddress, MAX_UINT256], {
        account: account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    }
    return true;
  }

  async deposit(bpAddress: Address, amount: bigint) {
    checkClient(this._client);

    if (!(await this.approveSettlementTokenToBp(bpAddress, amount))) {
      return;
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

export type BPInfo = {
  address: Address;
  totalReward: bigint;
  minRaisingTarget: bigint;
  maxRaisingTarget: bigint;
  startTimeOfWarmup: bigint;
  lp: LpInfo;
  endTimeOfWarmup: bigint;
  endTimeOfLockup: bigint;
  currentPeriod: number;
  status: number;
  totalRaisedAmount: bigint;
  depositedAmount: bigint;
  refundedAmount: bigint;
  claimedBpTokenAmount: bigint;
  claimedLpTokenAmount: bigint;
};
