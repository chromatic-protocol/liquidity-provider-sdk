import { chromaticLpABI, chromaticLpRegistryABI, ierc20MetadataABI } from "./gen";
import { Contract } from "./utils/helpers";

/** @ignore */
export interface ContractChromaticLP extends Contract<typeof chromaticLpABI> {}

/** @ignore */
export interface ContractChromaticLPRegistry extends Contract<typeof chromaticLpRegistryABI> {}

/** @ignore */
export interface ContractIErc20Metadata extends Contract<typeof ierc20MetadataABI> {}
