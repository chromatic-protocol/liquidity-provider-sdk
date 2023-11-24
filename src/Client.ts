import type { PublicClient, WalletClient } from "viem";
import { ChromaticBP, ChromaticBPFactory, ChromaticLP, ChromaticRegistry } from "./entities";
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

  registry(): ChromaticRegistry {
    return new ChromaticRegistry(this);
  }

  lp(): ChromaticLP {
    return new ChromaticLP(this);
  }

  bpFactory(): ChromaticBPFactory {
    return new ChromaticBPFactory(this);
  }
  bp(): ChromaticBP {
    return new ChromaticBP(this);
  }
}
