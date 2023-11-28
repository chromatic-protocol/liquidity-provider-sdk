import { Address, getContract } from "viem";
import { Client } from "../Client";
import { chromaticBpFactoryABI, chromaticBpFactoryAddress } from "../gen";
import type { ContractChromaticBPFactory } from "../types";
import { handleBytesError } from "../utils/helpers";

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
    return await handleBytesError(async () => {
      return await this.contracts().factory.read.bpList({
        account: this._client.publicClient?.account,
      });
    });
  }
  async bpListByLP(marketAddress: Address): Promise<readonly Address[]> {
    return await handleBytesError(async () => {
      return await this.contracts().factory.read.bpListByLP([marketAddress], {
        account: this._client.publicClient?.account,
      });
    });
  }
}
