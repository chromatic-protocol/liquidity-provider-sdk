import { chromaticLpABI, chromaticLpRegistryABI } from "./gen";
import { Contract } from "./utils/helpers";

/** @ignore */
export interface ContractChromaticLP extends Contract<typeof chromaticLpABI> {}

/** @ignore */
export interface ContractChromaticLPRegistry extends Contract<typeof chromaticLpRegistryABI> {}
