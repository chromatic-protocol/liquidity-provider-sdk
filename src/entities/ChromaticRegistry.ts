import { Address, getContract } from "viem";
import { Client } from "../Client";
import { chromaticLpRegistryABI, chromaticLpRegistryAddress } from "../gen";
import type { ContractChromaticLPRegistry } from "../types";
import { handleBytesError } from "../utils/helpers";

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

  async lpListByMarket(marketAddress: Address): Promise<readonly Address[]> {
    return await handleBytesError(async () => {
      return await this.contracts().registry.read.lpListByMarket([marketAddress], {
        account: this._client.walletClient!.account,
      });
    });
  }
  async lpListBySettlementToken(settlementTokenAddress: Address): Promise<readonly Address[]> {
    return await handleBytesError(async () => {
      return await this.contracts().registry.read.lpListBySettlementToken(
        [settlementTokenAddress],
        {
          account: this._client.walletClient!.account,
        }
      );
    });
  }
}
