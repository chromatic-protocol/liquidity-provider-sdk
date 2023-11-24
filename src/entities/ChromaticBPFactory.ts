import { Address, getContract } from "viem";
import { Client } from "../Client";
import { chromaticBpFactoryABI, chromaticBpFactoryAddress } from "../gen";
import type { ContractChromaticBPFactory } from "../types";
import { handleBytesError } from "../utils/helpers";

export class ChromaticBPFactory {
  constructor(private readonly _client: Client) {}

  private getContract(registryAddress?: Address): ContractChromaticBPFactory {
    return getContract({
      address:
        registryAddress ||
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
      registry: this.getContract(),
    };
  }

  async bpList(): Promise<readonly Address[]> {
    return await handleBytesError(async () => {
      return await this.contracts().registry.read.bpList({
        account: this._client.publicClient?.account,
      });
    });
  }
  async bpListByLP(marketAddress: Address): Promise<readonly Address[]> {
    return await handleBytesError(async () => {
      return await this.contracts().registry.read.bpListByLP([marketAddress], {
        account: this._client.publicClient?.account,
      });
    });
  }
}
