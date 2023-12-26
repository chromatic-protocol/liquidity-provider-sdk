import { Address, getContract } from "viem";
import { Client } from "../Client";
import { chromaticLpRegistryABI, chromaticLpRegistryAddress } from "../gen";
import type { ContractChromaticLPRegistry } from "../types";
import { registryGraphSdk } from "../lib/graphql";

export class ChromaticRegistry {
  constructor(private readonly _client: Client) {}

  private getContract(registryAddress?: Address): ContractChromaticLPRegistry {
    return getContract({
      address:
        registryAddress ||
        (chromaticLpRegistryAddress as Record<number, Address>)[
          this._client.publicClient?.chain?.id || 0
        ],
      abi: chromaticLpRegistryABI,
      publicClient: this._client.publicClient,
      walletClient: this._client.walletClient,
    });
  }

  contracts() {
    return {
      registry: this.getContract(),
    };
  }

  async lpList(): Promise<readonly Address[]> {
    const result = await registryGraphSdk.LpList();
    return result.chromaticLPs.map((e) => e.id);
  }
  async lpListByMarket(marketAddress: Address): Promise<readonly Address[]> {
    const result = await registryGraphSdk.LpListByMarket({ market: marketAddress });
    return result.chromaticLPs.map((e) => e.id);
  }
  async lpListBySettlementToken(settlementTokenAddress: Address): Promise<readonly Address[]> {
    const result = await registryGraphSdk.LpListBySettlementToken({
      settlementToken: settlementTokenAddress,
    });
    return result.chromaticLPs.map((e) => e.id);
  }
}
