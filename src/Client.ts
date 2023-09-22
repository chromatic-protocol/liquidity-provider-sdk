import type { PublicClient, WalletClient } from "viem";
import { Address, getContract } from "viem";
import { chromaticLpABI, chromaticLpRegistryABI, chromaticLpRegistryAddress } from "./gen";
import type { ContractChromaticLP, ContractChromaticLPRegistry } from "./types";

export class Client {
  public walletClient: WalletClient | undefined;
  public publicClient: PublicClient | undefined;
  constructor({
    publicClient,
    walletClient,
  }: {
    publicClient?: PublicClient | null;
    walletClient?: WalletClient | null;
  } = {}) {
    if (publicClient) this.publicClient = publicClient;
    if (walletClient) this.walletClient = walletClient;
  }

  get chainName() {
    return this.publicClient?.chain?.name;
  }

  registry(address?: Address): ContractChromaticLPRegistry {
    const deployedRegistryAddress = (chromaticLpRegistryAddress as Record<number, Address>)[
      this.publicClient?.chain?.id || 0
    ];
    return getContract({
      address: address || deployedRegistryAddress,
      abi: chromaticLpRegistryABI,
      publicClient: this.publicClient,
      walletClient: this.walletClient,
    });
  }

  lp(lpAddress: Address): ContractChromaticLP {
    return getContract({
      address: lpAddress,
      abi: chromaticLpABI,
      publicClient: this.publicClient,
      walletClient: this.walletClient,
    });
  }
}
