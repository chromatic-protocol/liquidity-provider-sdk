import { Address, getContract } from "viem";
import { Client } from "../Client";
import { chromaticBpFactoryABI, chromaticBpFactoryAddress } from "../gen";
import { bpFactoryGraphSdk } from "../lib/graphql";
import type { ContractChromaticBPFactory } from "../types";

export class ChromaticBPFactory {
  constructor(private readonly _client: Client) {}

  private getContract(factoryAddress?: Address): ContractChromaticBPFactory {
    return getContract({
      address:
        factoryAddress ||
        (chromaticBpFactoryAddress as Record<number, Address>)[
          this._client.publicClient?.chain?.id || 0
        ],
      abi: chromaticBpFactoryABI,
      publicClient: this._client.publicClient,
      walletClient: this._client.walletClient,
    });
  }

  contracts() {
    return {
      factory: this.getContract(),
    };
  }

  async bpList(): Promise<readonly Address[]> {
    const result = await bpFactoryGraphSdk.BpList();
    return result.chromaticBPCreateds.map((e) => e.bp);
  }
  async bpListByLP(lpAddress: Address): Promise<readonly Address[]> {
    const result = await bpFactoryGraphSdk.BpListByLp({ lp: lpAddress });
    return result.chromaticBPCreateds.map((e) => e.bp);
  }
}
