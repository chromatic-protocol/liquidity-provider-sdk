import { chromaticLpRegistryABI, iChromaticLpABI, ierc20MetadataABI } from "./gen";
import { chromaticBpFactoryABI, iChromaticBpABI } from "./gen";

import { Contract } from "./utils/helpers";

/** @ignore */
export interface ContractChromaticLP extends Contract<typeof iChromaticLpABI> {}

/** @ignore */
export interface ContractChromaticLPRegistry extends Contract<typeof chromaticLpRegistryABI> {}

/** @ignore */
export interface ContractIErc20Metadata extends Contract<typeof ierc20MetadataABI> {}

/** @ignore */
export interface ContractChromaticBPFactory extends Contract<typeof chromaticBpFactoryABI> {}

/** @ignore */
export interface ContractChromaticBP extends Contract<typeof iChromaticBpABI> {}
