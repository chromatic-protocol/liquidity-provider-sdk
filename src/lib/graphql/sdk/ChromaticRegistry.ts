import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: string; output: string; }
  Bytes: { input: `0x${string}`; output: `0x${string}`; }
  Int8: { input: any; output: any; }
};

export type AddLiquidity = {
  __typename?: 'AddLiquidity';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AddLiquiditySettled = {
  __typename?: 'AddLiquiditySettled';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  lp: Scalars['Bytes']['output'];
  lpTokenAmount: Scalars['BigInt']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  settlementAdded: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AddLiquiditySettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddLiquiditySettled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lpTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AddLiquiditySettled_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  settlementAdded?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementAdded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AddLiquiditySettled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Lp = 'lp',
  LpTokenAmount = 'lpTokenAmount',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  SettlementAdded = 'settlementAdded',
  TransactionHash = 'transactionHash'
}

export type AddLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AddLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AddLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AddLiquidity_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  OracleVersion = 'oracleVersion',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  TransactionHash = 'transactionHash'
}

export type BpBoostTaskExecuted = {
  __typename?: 'BPBoostTaskExecuted';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BpBoostTaskExecuted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BpBoostTaskExecuted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['Bytes']['input']>;
  bp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BpBoostTaskExecuted_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BpBoostTaskExecuted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type BpDeposited = {
  __typename?: 'BPDeposited';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  provider: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BpDeposited_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BpDeposited_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['Bytes']['input']>;
  bp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BpDeposited_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BpDeposited_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  Id = 'id',
  Provider = 'provider',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ChromaticBpCreated = {
  __typename?: 'ChromaticBPCreated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChromaticBpCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBpCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['Bytes']['input']>;
  bp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBpCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChromaticBpCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  Id = 'id',
  Lp = 'lp',
  TransactionHash = 'transactionHash'
}

export type ChromaticLp = {
  __typename?: 'ChromaticLP';
  clbTokenIds: Array<Scalars['BigInt']['output']>;
  distributionRates: Array<Scalars['Int']['output']>;
  feeRates: Array<Scalars['Int']['output']>;
  id: Scalars['Bytes']['output'];
  longShortInfo: Scalars['Int']['output'];
  lpTokenDecimals: Scalars['Int']['output'];
  lpTokenName: Scalars['String']['output'];
  lpTokenSymbol: Scalars['String']['output'];
  market: Scalars['Bytes']['output'];
  oracleDescription: Scalars['String']['output'];
  oracleProvider: Scalars['Bytes']['output'];
  rebalanceBPS: Scalars['BigInt']['output'];
  rebalanceCheckingInterval: Scalars['BigInt']['output'];
  settlementToken: Scalars['Bytes']['output'];
  settlementTokenDecimals: Scalars['Int']['output'];
  settlementTokenSymbol: Scalars['String']['output'];
  utilizationTargetBPS: Scalars['BigInt']['output'];
};

export type ChromaticLpConfig = {
  __typename?: 'ChromaticLPConfig';
  automationFeeReserved: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lp: Scalars['Bytes']['output'];
  minHoldingValueToRebalance: Scalars['BigInt']['output'];
};

export type ChromaticLpConfig_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpConfig_Filter>>>;
  automationFeeReserved?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_gt?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_gte?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  automationFeeReserved_lt?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_lte?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_not?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  minHoldingValueToRebalance?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minHoldingValueToRebalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpConfig_Filter>>>;
};

export enum ChromaticLpConfig_OrderBy {
  AutomationFeeReserved = 'automationFeeReserved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  MinHoldingValueToRebalance = 'minHoldingValueToRebalance'
}

export type ChromaticLpMeta = {
  __typename?: 'ChromaticLPMeta';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lp: Scalars['Bytes']['output'];
  lpName: Scalars['String']['output'];
  lpTag: Scalars['String']['output'];
};

export type ChromaticLpMeta_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpMeta_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lpName?: InputMaybe<Scalars['String']['input']>;
  lpName_contains?: InputMaybe<Scalars['String']['input']>;
  lpName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_gt?: InputMaybe<Scalars['String']['input']>;
  lpName_gte?: InputMaybe<Scalars['String']['input']>;
  lpName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpName_lt?: InputMaybe<Scalars['String']['input']>;
  lpName_lte?: InputMaybe<Scalars['String']['input']>;
  lpName_not?: InputMaybe<Scalars['String']['input']>;
  lpName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag?: InputMaybe<Scalars['String']['input']>;
  lpTag_contains?: InputMaybe<Scalars['String']['input']>;
  lpTag_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_gt?: InputMaybe<Scalars['String']['input']>;
  lpTag_gte?: InputMaybe<Scalars['String']['input']>;
  lpTag_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTag_lt?: InputMaybe<Scalars['String']['input']>;
  lpTag_lte?: InputMaybe<Scalars['String']['input']>;
  lpTag_not?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpMeta_Filter>>>;
};

export enum ChromaticLpMeta_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  LpName = 'lpName',
  LpTag = 'lpTag'
}

export type ChromaticLpRegistered = {
  __typename?: 'ChromaticLPRegistered';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChromaticLpRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChromaticLpRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  Market = 'market',
  TransactionHash = 'transactionHash'
}

export type ChromaticLpStat = {
  __typename?: 'ChromaticLPStat';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  holdingClbValue: Scalars['BigInt']['output'];
  holdingValue: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lp: Scalars['Bytes']['output'];
  pendingClbValue: Scalars['BigInt']['output'];
  pendingValue: Scalars['BigInt']['output'];
  totalValue: Scalars['BigInt']['output'];
  utilization: Scalars['Int']['output'];
};

export type ChromaticLpStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpStat_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingClbValue?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingClbValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingValue?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpStat_Filter>>>;
  pendingClbValue?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingClbValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingValue?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValue?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  utilization?: InputMaybe<Scalars['Int']['input']>;
  utilization_gt?: InputMaybe<Scalars['Int']['input']>;
  utilization_gte?: InputMaybe<Scalars['Int']['input']>;
  utilization_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  utilization_lt?: InputMaybe<Scalars['Int']['input']>;
  utilization_lte?: InputMaybe<Scalars['Int']['input']>;
  utilization_not?: InputMaybe<Scalars['Int']['input']>;
  utilization_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum ChromaticLpStat_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  HoldingClbValue = 'holdingClbValue',
  HoldingValue = 'holdingValue',
  Id = 'id',
  Lp = 'lp',
  PendingClbValue = 'pendingClbValue',
  PendingValue = 'pendingValue',
  TotalValue = 'totalValue',
  Utilization = 'utilization'
}

export type ChromaticLp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLp_Filter>>>;
  clbTokenIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  distributionRates?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  longShortInfo?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_gt?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_gte?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  longShortInfo_lt?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_lte?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_not?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lpTokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lpTokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lpTokenName?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_gt?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_gte?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenName_lt?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_lte?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLp_Filter>>>;
  oracleDescription?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_contains?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_gt?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_gte?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracleDescription_lt?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_lte?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracleDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleProvider?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracleProvider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rebalanceBPS?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rebalanceBPS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_not?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rebalanceCheckingInterval?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rebalanceCheckingInterval_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_not?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementToken?: InputMaybe<Scalars['Bytes']['input']>;
  settlementTokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  settlementTokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  settlementTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settlementTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settlementTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  settlementToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  utilizationTargetBPS?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  utilizationTargetBPS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_not?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ChromaticLp_OrderBy {
  ClbTokenIds = 'clbTokenIds',
  DistributionRates = 'distributionRates',
  FeeRates = 'feeRates',
  Id = 'id',
  LongShortInfo = 'longShortInfo',
  LpTokenDecimals = 'lpTokenDecimals',
  LpTokenName = 'lpTokenName',
  LpTokenSymbol = 'lpTokenSymbol',
  Market = 'market',
  OracleDescription = 'oracleDescription',
  OracleProvider = 'oracleProvider',
  RebalanceBps = 'rebalanceBPS',
  RebalanceCheckingInterval = 'rebalanceCheckingInterval',
  SettlementToken = 'settlementToken',
  SettlementTokenDecimals = 'settlementTokenDecimals',
  SettlementTokenSymbol = 'settlementTokenSymbol',
  UtilizationTargetBps = 'utilizationTargetBPS'
}

export type LpTokenTotalSupply = {
  __typename?: 'LPTokenTotalSupply';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['Bytes']['output'];
};

export type LpTokenTotalSupply_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<LpTokenTotalSupply_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LpTokenTotalSupply_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LpTokenTotalSupply_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Token = 'token'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addLiquidities: Array<AddLiquidity>;
  addLiquidity?: Maybe<AddLiquidity>;
  addLiquiditySettled?: Maybe<AddLiquiditySettled>;
  addLiquiditySettleds: Array<AddLiquiditySettled>;
  bpboostTaskExecuted?: Maybe<BpBoostTaskExecuted>;
  bpboostTaskExecuteds: Array<BpBoostTaskExecuted>;
  bpdeposited?: Maybe<BpDeposited>;
  bpdepositeds: Array<BpDeposited>;
  chromaticBPCreated?: Maybe<ChromaticBpCreated>;
  chromaticBPCreateds: Array<ChromaticBpCreated>;
  chromaticLP?: Maybe<ChromaticLp>;
  chromaticLPConfig?: Maybe<ChromaticLpConfig>;
  chromaticLPConfigs: Array<ChromaticLpConfig>;
  chromaticLPMeta?: Maybe<ChromaticLpMeta>;
  chromaticLPMetas: Array<ChromaticLpMeta>;
  chromaticLPRegistered?: Maybe<ChromaticLpRegistered>;
  chromaticLPRegistereds: Array<ChromaticLpRegistered>;
  chromaticLPStat?: Maybe<ChromaticLpStat>;
  chromaticLPStats: Array<ChromaticLpStat>;
  chromaticLPs: Array<ChromaticLp>;
  lptokenTotalSupplies: Array<LpTokenTotalSupply>;
  lptokenTotalSupply?: Maybe<LpTokenTotalSupply>;
  rebalanceAddLiquidities: Array<RebalanceAddLiquidity>;
  rebalanceAddLiquidity?: Maybe<RebalanceAddLiquidity>;
  rebalanceRemoveLiquidities: Array<RebalanceRemoveLiquidity>;
  rebalanceRemoveLiquidity?: Maybe<RebalanceRemoveLiquidity>;
  rebalanceSettled?: Maybe<RebalanceSettled>;
  rebalanceSettleds: Array<RebalanceSettled>;
  removeLiquidities: Array<RemoveLiquidity>;
  removeLiquidity?: Maybe<RemoveLiquidity>;
  removeLiquiditySettled?: Maybe<RemoveLiquiditySettled>;
  removeLiquiditySettleds: Array<RemoveLiquiditySettled>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquidity_Filter>;
};


export type QueryAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquiditySettled_Filter>;
};


export type QueryBpboostTaskExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBpboostTaskExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpBoostTaskExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpBoostTaskExecuted_Filter>;
};


export type QueryBpdepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBpdepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpDeposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpDeposited_Filter>;
};


export type QueryChromaticBpCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpCreated_Filter>;
};


export type QueryChromaticLpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpConfig_Filter>;
};


export type QueryChromaticLpMetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpMetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpMeta_Filter>;
};


export type QueryChromaticLpRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpRegistered_Filter>;
};


export type QueryChromaticLpStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpStat_Filter>;
};


export type QueryChromaticLPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLp_Filter>;
};


export type QueryLptokenTotalSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpTokenTotalSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpTokenTotalSupply_Filter>;
};


export type QueryLptokenTotalSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceAddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceAddLiquidity_Filter>;
};


export type QueryRebalanceAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceRemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceRemoveLiquidity_Filter>;
};


export type QueryRebalanceRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceSettled_Filter>;
};


export type QueryRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquidity_Filter>;
};


export type QueryRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquiditySettled_Filter>;
};

export type RebalanceAddLiquidity = {
  __typename?: 'RebalanceAddLiquidity';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  currentUtility: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  receiptId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RebalanceAddLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RebalanceAddLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceAddLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RebalanceAddLiquidity_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CurrentUtility = 'currentUtility',
  Id = 'id',
  Lp = 'lp',
  OracleVersion = 'oracleVersion',
  ReceiptId = 'receiptId',
  TransactionHash = 'transactionHash'
}

export type RebalanceRemoveLiquidity = {
  __typename?: 'RebalanceRemoveLiquidity';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  currentUtility: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  receiptId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RebalanceRemoveLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RebalanceRemoveLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceRemoveLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RebalanceRemoveLiquidity_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CurrentUtility = 'currentUtility',
  Id = 'id',
  Lp = 'lp',
  OracleVersion = 'oracleVersion',
  ReceiptId = 'receiptId',
  TransactionHash = 'transactionHash'
}

export type RebalanceSettled = {
  __typename?: 'RebalanceSettled';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  lp: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RebalanceSettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RebalanceSettled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceSettled_Filter>>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RebalanceSettled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Lp = 'lp',
  ReceiptId = 'receiptId',
  TransactionHash = 'transactionHash'
}

export type RemoveLiquidity = {
  __typename?: 'RemoveLiquidity';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  lpTokenAmount: Scalars['BigInt']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RemoveLiquiditySettled = {
  __typename?: 'RemoveLiquiditySettled';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  burningAmount: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  lp: Scalars['Bytes']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  refundedAmount: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  withdrawnSettlementAmount: Scalars['BigInt']['output'];
};

export type RemoveLiquiditySettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveLiquiditySettled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burningAmount?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burningAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveLiquiditySettled_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  refundedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  refundedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  withdrawnSettlementAmount?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawnSettlementAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum RemoveLiquiditySettled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  BurningAmount = 'burningAmount',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Lp = 'lp',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  RefundedAmount = 'refundedAmount',
  TransactionHash = 'transactionHash',
  WithdrawnSettlementAmount = 'withdrawnSettlementAmount'
}

export type RemoveLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lpTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RemoveLiquidity_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  LpTokenAmount = 'lpTokenAmount',
  OracleVersion = 'oracleVersion',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  TransactionHash = 'transactionHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addLiquidities: Array<AddLiquidity>;
  addLiquidity?: Maybe<AddLiquidity>;
  addLiquiditySettled?: Maybe<AddLiquiditySettled>;
  addLiquiditySettleds: Array<AddLiquiditySettled>;
  bpboostTaskExecuted?: Maybe<BpBoostTaskExecuted>;
  bpboostTaskExecuteds: Array<BpBoostTaskExecuted>;
  bpdeposited?: Maybe<BpDeposited>;
  bpdepositeds: Array<BpDeposited>;
  chromaticBPCreated?: Maybe<ChromaticBpCreated>;
  chromaticBPCreateds: Array<ChromaticBpCreated>;
  chromaticLP?: Maybe<ChromaticLp>;
  chromaticLPConfig?: Maybe<ChromaticLpConfig>;
  chromaticLPConfigs: Array<ChromaticLpConfig>;
  chromaticLPMeta?: Maybe<ChromaticLpMeta>;
  chromaticLPMetas: Array<ChromaticLpMeta>;
  chromaticLPRegistered?: Maybe<ChromaticLpRegistered>;
  chromaticLPRegistereds: Array<ChromaticLpRegistered>;
  chromaticLPStat?: Maybe<ChromaticLpStat>;
  chromaticLPStats: Array<ChromaticLpStat>;
  chromaticLPs: Array<ChromaticLp>;
  lptokenTotalSupplies: Array<LpTokenTotalSupply>;
  lptokenTotalSupply?: Maybe<LpTokenTotalSupply>;
  rebalanceAddLiquidities: Array<RebalanceAddLiquidity>;
  rebalanceAddLiquidity?: Maybe<RebalanceAddLiquidity>;
  rebalanceRemoveLiquidities: Array<RebalanceRemoveLiquidity>;
  rebalanceRemoveLiquidity?: Maybe<RebalanceRemoveLiquidity>;
  rebalanceSettled?: Maybe<RebalanceSettled>;
  rebalanceSettleds: Array<RebalanceSettled>;
  removeLiquidities: Array<RemoveLiquidity>;
  removeLiquidity?: Maybe<RemoveLiquidity>;
  removeLiquiditySettled?: Maybe<RemoveLiquiditySettled>;
  removeLiquiditySettleds: Array<RemoveLiquiditySettled>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquidity_Filter>;
};


export type SubscriptionAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquiditySettled_Filter>;
};


export type SubscriptionBpboostTaskExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBpboostTaskExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpBoostTaskExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpBoostTaskExecuted_Filter>;
};


export type SubscriptionBpdepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBpdepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpDeposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpDeposited_Filter>;
};


export type SubscriptionChromaticBpCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpCreated_Filter>;
};


export type SubscriptionChromaticLpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpConfig_Filter>;
};


export type SubscriptionChromaticLpMetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpMetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpMeta_Filter>;
};


export type SubscriptionChromaticLpRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpRegistered_Filter>;
};


export type SubscriptionChromaticLpStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpStat_Filter>;
};


export type SubscriptionChromaticLPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLp_Filter>;
};


export type SubscriptionLptokenTotalSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpTokenTotalSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpTokenTotalSupply_Filter>;
};


export type SubscriptionLptokenTotalSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceAddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceAddLiquidity_Filter>;
};


export type SubscriptionRebalanceAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceRemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceRemoveLiquidity_Filter>;
};


export type SubscriptionRebalanceRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceSettled_Filter>;
};


export type SubscriptionRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquidity_Filter>;
};


export type SubscriptionRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquiditySettled_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type LpListQueryVariables = Exact<{ [key: string]: never; }>;


export type LpListQuery = { __typename?: 'Query', chromaticLPs: Array<{ __typename?: 'ChromaticLP', id: `0x${string}` }> };

export type LpListByMarketQueryVariables = Exact<{
  market: Scalars['Bytes']['input'];
}>;


export type LpListByMarketQuery = { __typename?: 'Query', chromaticLPs: Array<{ __typename?: 'ChromaticLP', id: `0x${string}` }> };

export type LpListBySettlementTokenQueryVariables = Exact<{
  settlementToken: Scalars['Bytes']['input'];
}>;


export type LpListBySettlementTokenQuery = { __typename?: 'Query', chromaticLPs: Array<{ __typename?: 'ChromaticLP', id: `0x${string}` }> };


export const LpListDocument = gql`
    query LpList {
  chromaticLPs {
    id
  }
}
    `;
export const LpListByMarketDocument = gql`
    query LpListByMarket($market: Bytes!) {
  chromaticLPs(where: {market: $market}) {
    id
  }
}
    `;
export const LpListBySettlementTokenDocument = gql`
    query LpListBySettlementToken($settlementToken: Bytes!) {
  chromaticLPs(where: {settlementToken: $settlementToken}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LpList(variables?: LpListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LpListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LpListQuery>(LpListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LpList', 'query');
    },
    LpListByMarket(variables: LpListByMarketQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LpListByMarketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LpListByMarketQuery>(LpListByMarketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LpListByMarket', 'query');
    },
    LpListBySettlementToken(variables: LpListBySettlementTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LpListBySettlementTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LpListBySettlementTokenQuery>(LpListBySettlementTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LpListBySettlementToken', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;