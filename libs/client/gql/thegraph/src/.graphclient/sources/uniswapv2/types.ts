// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Uniswapv2Types {
  export type Maybe<T> = T | null;
  export type InputMaybe<T> = Maybe<T>;
  export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
  export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
  };

  export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
  };

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
  };

  export type Bundle = {
    id: Scalars['ID'];
    ethPrice: Scalars['BigDecimal'];
  };

  export type Bundle_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    ethPrice?: InputMaybe<Scalars['BigDecimal']>;
    ethPrice_not?: InputMaybe<Scalars['BigDecimal']>;
    ethPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
    ethPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
    ethPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
    ethPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
    ethPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    ethPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Bundle_orderBy = 'id' | 'ethPrice';

  export type Burn = {
    id: Scalars['ID'];
    transaction: Transaction;
    timestamp: Scalars['BigInt'];
    pair: Pair;
    liquidity: Scalars['BigDecimal'];
    sender?: Maybe<Scalars['Bytes']>;
    amount0?: Maybe<Scalars['BigDecimal']>;
    amount1?: Maybe<Scalars['BigDecimal']>;
    to?: Maybe<Scalars['Bytes']>;
    logIndex?: Maybe<Scalars['BigInt']>;
    amountUSD?: Maybe<Scalars['BigDecimal']>;
    needsComplete: Scalars['Boolean'];
    feeTo?: Maybe<Scalars['Bytes']>;
    feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  };

  export type Burn_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pair?: InputMaybe<Scalars['String']>;
    pair_not?: InputMaybe<Scalars['String']>;
    pair_gt?: InputMaybe<Scalars['String']>;
    pair_lt?: InputMaybe<Scalars['String']>;
    pair_gte?: InputMaybe<Scalars['String']>;
    pair_lte?: InputMaybe<Scalars['String']>;
    pair_in?: InputMaybe<Array<Scalars['String']>>;
    pair_not_in?: InputMaybe<Array<Scalars['String']>>;
    pair_contains?: InputMaybe<Scalars['String']>;
    pair_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_not_contains?: InputMaybe<Scalars['String']>;
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_starts_with?: InputMaybe<Scalars['String']>;
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_starts_with?: InputMaybe<Scalars['String']>;
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_ends_with?: InputMaybe<Scalars['String']>;
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_ends_with?: InputMaybe<Scalars['String']>;
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_?: InputMaybe<Pair_filter>;
    liquidity?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    sender?: InputMaybe<Scalars['Bytes']>;
    sender_not?: InputMaybe<Scalars['Bytes']>;
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_contains?: InputMaybe<Scalars['Bytes']>;
    sender_not_contains?: InputMaybe<Scalars['Bytes']>;
    amount0?: InputMaybe<Scalars['BigDecimal']>;
    amount0_not?: InputMaybe<Scalars['BigDecimal']>;
    amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1?: InputMaybe<Scalars['BigDecimal']>;
    amount1_not?: InputMaybe<Scalars['BigDecimal']>;
    amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    logIndex?: InputMaybe<Scalars['BigInt']>;
    logIndex_not?: InputMaybe<Scalars['BigInt']>;
    logIndex_gt?: InputMaybe<Scalars['BigInt']>;
    logIndex_lt?: InputMaybe<Scalars['BigInt']>;
    logIndex_gte?: InputMaybe<Scalars['BigInt']>;
    logIndex_lte?: InputMaybe<Scalars['BigInt']>;
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUSD?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    needsComplete?: InputMaybe<Scalars['Boolean']>;
    needsComplete_not?: InputMaybe<Scalars['Boolean']>;
    needsComplete_in?: InputMaybe<Array<Scalars['Boolean']>>;
    needsComplete_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    feeTo?: InputMaybe<Scalars['Bytes']>;
    feeTo_not?: InputMaybe<Scalars['Bytes']>;
    feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>;
    feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    feeTo_contains?: InputMaybe<Scalars['Bytes']>;
    feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
    feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Burn_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'liquidity'
    | 'sender'
    | 'amount0'
    | 'amount1'
    | 'to'
    | 'logIndex'
    | 'amountUSD'
    | 'needsComplete'
    | 'feeTo'
    | 'feeLiquidity';

  export type LiquidityPosition = {
    id: Scalars['ID'];
    user: User;
    pair: Pair;
    liquidityTokenBalance: Scalars['BigDecimal'];
  };

  export type LiquidityPositionSnapshot = {
    id: Scalars['ID'];
    liquidityPosition: LiquidityPosition;
    timestamp: Scalars['Int'];
    block: Scalars['Int'];
    user: User;
    pair: Pair;
    token0PriceUSD: Scalars['BigDecimal'];
    token1PriceUSD: Scalars['BigDecimal'];
    reserve0: Scalars['BigDecimal'];
    reserve1: Scalars['BigDecimal'];
    reserveUSD: Scalars['BigDecimal'];
    liquidityTokenTotalSupply: Scalars['BigDecimal'];
    liquidityTokenBalance: Scalars['BigDecimal'];
  };

  export type LiquidityPositionSnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    liquidityPosition?: InputMaybe<Scalars['String']>;
    liquidityPosition_not?: InputMaybe<Scalars['String']>;
    liquidityPosition_gt?: InputMaybe<Scalars['String']>;
    liquidityPosition_lt?: InputMaybe<Scalars['String']>;
    liquidityPosition_gte?: InputMaybe<Scalars['String']>;
    liquidityPosition_lte?: InputMaybe<Scalars['String']>;
    liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
    liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
    liquidityPosition_contains?: InputMaybe<Scalars['String']>;
    liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
    liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
    liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
    liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
    liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
    liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
    liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
    liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityPosition_?: InputMaybe<LiquidityPosition_filter>;
    timestamp?: InputMaybe<Scalars['Int']>;
    timestamp_not?: InputMaybe<Scalars['Int']>;
    timestamp_gt?: InputMaybe<Scalars['Int']>;
    timestamp_lt?: InputMaybe<Scalars['Int']>;
    timestamp_gte?: InputMaybe<Scalars['Int']>;
    timestamp_lte?: InputMaybe<Scalars['Int']>;
    timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
    block?: InputMaybe<Scalars['Int']>;
    block_not?: InputMaybe<Scalars['Int']>;
    block_gt?: InputMaybe<Scalars['Int']>;
    block_lt?: InputMaybe<Scalars['Int']>;
    block_gte?: InputMaybe<Scalars['Int']>;
    block_lte?: InputMaybe<Scalars['Int']>;
    block_in?: InputMaybe<Array<Scalars['Int']>>;
    block_not_in?: InputMaybe<Array<Scalars['Int']>>;
    user?: InputMaybe<Scalars['String']>;
    user_not?: InputMaybe<Scalars['String']>;
    user_gt?: InputMaybe<Scalars['String']>;
    user_lt?: InputMaybe<Scalars['String']>;
    user_gte?: InputMaybe<Scalars['String']>;
    user_lte?: InputMaybe<Scalars['String']>;
    user_in?: InputMaybe<Array<Scalars['String']>>;
    user_not_in?: InputMaybe<Array<Scalars['String']>>;
    user_contains?: InputMaybe<Scalars['String']>;
    user_contains_nocase?: InputMaybe<Scalars['String']>;
    user_not_contains?: InputMaybe<Scalars['String']>;
    user_not_contains_nocase?: InputMaybe<Scalars['String']>;
    user_starts_with?: InputMaybe<Scalars['String']>;
    user_starts_with_nocase?: InputMaybe<Scalars['String']>;
    user_not_starts_with?: InputMaybe<Scalars['String']>;
    user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    user_ends_with?: InputMaybe<Scalars['String']>;
    user_ends_with_nocase?: InputMaybe<Scalars['String']>;
    user_not_ends_with?: InputMaybe<Scalars['String']>;
    user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    user_?: InputMaybe<User_filter>;
    pair?: InputMaybe<Scalars['String']>;
    pair_not?: InputMaybe<Scalars['String']>;
    pair_gt?: InputMaybe<Scalars['String']>;
    pair_lt?: InputMaybe<Scalars['String']>;
    pair_gte?: InputMaybe<Scalars['String']>;
    pair_lte?: InputMaybe<Scalars['String']>;
    pair_in?: InputMaybe<Array<Scalars['String']>>;
    pair_not_in?: InputMaybe<Array<Scalars['String']>>;
    pair_contains?: InputMaybe<Scalars['String']>;
    pair_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_not_contains?: InputMaybe<Scalars['String']>;
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_starts_with?: InputMaybe<Scalars['String']>;
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_starts_with?: InputMaybe<Scalars['String']>;
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_ends_with?: InputMaybe<Scalars['String']>;
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_ends_with?: InputMaybe<Scalars['String']>;
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_?: InputMaybe<Pair_filter>;
    token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
    token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
    token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve0?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type LiquidityPositionSnapshot_orderBy =
    | 'id'
    | 'liquidityPosition'
    | 'timestamp'
    | 'block'
    | 'user'
    | 'pair'
    | 'token0PriceUSD'
    | 'token1PriceUSD'
    | 'reserve0'
    | 'reserve1'
    | 'reserveUSD'
    | 'liquidityTokenTotalSupply'
    | 'liquidityTokenBalance';

  export type LiquidityPosition_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    user?: InputMaybe<Scalars['String']>;
    user_not?: InputMaybe<Scalars['String']>;
    user_gt?: InputMaybe<Scalars['String']>;
    user_lt?: InputMaybe<Scalars['String']>;
    user_gte?: InputMaybe<Scalars['String']>;
    user_lte?: InputMaybe<Scalars['String']>;
    user_in?: InputMaybe<Array<Scalars['String']>>;
    user_not_in?: InputMaybe<Array<Scalars['String']>>;
    user_contains?: InputMaybe<Scalars['String']>;
    user_contains_nocase?: InputMaybe<Scalars['String']>;
    user_not_contains?: InputMaybe<Scalars['String']>;
    user_not_contains_nocase?: InputMaybe<Scalars['String']>;
    user_starts_with?: InputMaybe<Scalars['String']>;
    user_starts_with_nocase?: InputMaybe<Scalars['String']>;
    user_not_starts_with?: InputMaybe<Scalars['String']>;
    user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    user_ends_with?: InputMaybe<Scalars['String']>;
    user_ends_with_nocase?: InputMaybe<Scalars['String']>;
    user_not_ends_with?: InputMaybe<Scalars['String']>;
    user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    user_?: InputMaybe<User_filter>;
    pair?: InputMaybe<Scalars['String']>;
    pair_not?: InputMaybe<Scalars['String']>;
    pair_gt?: InputMaybe<Scalars['String']>;
    pair_lt?: InputMaybe<Scalars['String']>;
    pair_gte?: InputMaybe<Scalars['String']>;
    pair_lte?: InputMaybe<Scalars['String']>;
    pair_in?: InputMaybe<Array<Scalars['String']>>;
    pair_not_in?: InputMaybe<Array<Scalars['String']>>;
    pair_contains?: InputMaybe<Scalars['String']>;
    pair_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_not_contains?: InputMaybe<Scalars['String']>;
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_starts_with?: InputMaybe<Scalars['String']>;
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_starts_with?: InputMaybe<Scalars['String']>;
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_ends_with?: InputMaybe<Scalars['String']>;
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_ends_with?: InputMaybe<Scalars['String']>;
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_?: InputMaybe<Pair_filter>;
    liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type LiquidityPosition_orderBy =
    | 'id'
    | 'user'
    | 'pair'
    | 'liquidityTokenBalance';

  export type Mint = {
    id: Scalars['ID'];
    transaction: Transaction;
    timestamp: Scalars['BigInt'];
    pair: Pair;
    to: Scalars['Bytes'];
    liquidity: Scalars['BigDecimal'];
    sender?: Maybe<Scalars['Bytes']>;
    amount0?: Maybe<Scalars['BigDecimal']>;
    amount1?: Maybe<Scalars['BigDecimal']>;
    logIndex?: Maybe<Scalars['BigInt']>;
    amountUSD?: Maybe<Scalars['BigDecimal']>;
    feeTo?: Maybe<Scalars['Bytes']>;
    feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  };

  export type Mint_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pair?: InputMaybe<Scalars['String']>;
    pair_not?: InputMaybe<Scalars['String']>;
    pair_gt?: InputMaybe<Scalars['String']>;
    pair_lt?: InputMaybe<Scalars['String']>;
    pair_gte?: InputMaybe<Scalars['String']>;
    pair_lte?: InputMaybe<Scalars['String']>;
    pair_in?: InputMaybe<Array<Scalars['String']>>;
    pair_not_in?: InputMaybe<Array<Scalars['String']>>;
    pair_contains?: InputMaybe<Scalars['String']>;
    pair_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_not_contains?: InputMaybe<Scalars['String']>;
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_starts_with?: InputMaybe<Scalars['String']>;
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_starts_with?: InputMaybe<Scalars['String']>;
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_ends_with?: InputMaybe<Scalars['String']>;
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_ends_with?: InputMaybe<Scalars['String']>;
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_?: InputMaybe<Pair_filter>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    liquidity?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    sender?: InputMaybe<Scalars['Bytes']>;
    sender_not?: InputMaybe<Scalars['Bytes']>;
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_contains?: InputMaybe<Scalars['Bytes']>;
    sender_not_contains?: InputMaybe<Scalars['Bytes']>;
    amount0?: InputMaybe<Scalars['BigDecimal']>;
    amount0_not?: InputMaybe<Scalars['BigDecimal']>;
    amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1?: InputMaybe<Scalars['BigDecimal']>;
    amount1_not?: InputMaybe<Scalars['BigDecimal']>;
    amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    logIndex?: InputMaybe<Scalars['BigInt']>;
    logIndex_not?: InputMaybe<Scalars['BigInt']>;
    logIndex_gt?: InputMaybe<Scalars['BigInt']>;
    logIndex_lt?: InputMaybe<Scalars['BigInt']>;
    logIndex_gte?: InputMaybe<Scalars['BigInt']>;
    logIndex_lte?: InputMaybe<Scalars['BigInt']>;
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUSD?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    feeTo?: InputMaybe<Scalars['Bytes']>;
    feeTo_not?: InputMaybe<Scalars['Bytes']>;
    feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>;
    feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    feeTo_contains?: InputMaybe<Scalars['Bytes']>;
    feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
    feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
    feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Mint_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'to'
    | 'liquidity'
    | 'sender'
    | 'amount0'
    | 'amount1'
    | 'logIndex'
    | 'amountUSD'
    | 'feeTo'
    | 'feeLiquidity';

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = 'asc' | 'desc';

  export type Pair = {
    id: Scalars['ID'];
    token0: Token;
    token1: Token;
    reserve0: Scalars['BigDecimal'];
    reserve1: Scalars['BigDecimal'];
    totalSupply: Scalars['BigDecimal'];
    reserveETH: Scalars['BigDecimal'];
    reserveUSD: Scalars['BigDecimal'];
    trackedReserveETH: Scalars['BigDecimal'];
    token0Price: Scalars['BigDecimal'];
    token1Price: Scalars['BigDecimal'];
    volumeToken0: Scalars['BigDecimal'];
    volumeToken1: Scalars['BigDecimal'];
    volumeUSD: Scalars['BigDecimal'];
    untrackedVolumeUSD: Scalars['BigDecimal'];
    txCount: Scalars['BigInt'];
    createdAtTimestamp: Scalars['BigInt'];
    createdAtBlockNumber: Scalars['BigInt'];
    liquidityProviderCount: Scalars['BigInt'];
  };

  export type PairDayData = {
    id: Scalars['ID'];
    date: Scalars['Int'];
    pairAddress: Scalars['Bytes'];
    token0: Token;
    token1: Token;
    reserve0: Scalars['BigDecimal'];
    reserve1: Scalars['BigDecimal'];
    totalSupply: Scalars['BigDecimal'];
    reserveUSD: Scalars['BigDecimal'];
    dailyVolumeToken0: Scalars['BigDecimal'];
    dailyVolumeToken1: Scalars['BigDecimal'];
    dailyVolumeUSD: Scalars['BigDecimal'];
    dailyTxns: Scalars['BigInt'];
  };

  export type PairDayData_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    date?: InputMaybe<Scalars['Int']>;
    date_not?: InputMaybe<Scalars['Int']>;
    date_gt?: InputMaybe<Scalars['Int']>;
    date_lt?: InputMaybe<Scalars['Int']>;
    date_gte?: InputMaybe<Scalars['Int']>;
    date_lte?: InputMaybe<Scalars['Int']>;
    date_in?: InputMaybe<Array<Scalars['Int']>>;
    date_not_in?: InputMaybe<Array<Scalars['Int']>>;
    pairAddress?: InputMaybe<Scalars['Bytes']>;
    pairAddress_not?: InputMaybe<Scalars['Bytes']>;
    pairAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
    pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    pairAddress_contains?: InputMaybe<Scalars['Bytes']>;
    pairAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
    token0?: InputMaybe<Scalars['String']>;
    token0_not?: InputMaybe<Scalars['String']>;
    token0_gt?: InputMaybe<Scalars['String']>;
    token0_lt?: InputMaybe<Scalars['String']>;
    token0_gte?: InputMaybe<Scalars['String']>;
    token0_lte?: InputMaybe<Scalars['String']>;
    token0_in?: InputMaybe<Array<Scalars['String']>>;
    token0_not_in?: InputMaybe<Array<Scalars['String']>>;
    token0_contains?: InputMaybe<Scalars['String']>;
    token0_contains_nocase?: InputMaybe<Scalars['String']>;
    token0_not_contains?: InputMaybe<Scalars['String']>;
    token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token0_starts_with?: InputMaybe<Scalars['String']>;
    token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token0_not_starts_with?: InputMaybe<Scalars['String']>;
    token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token0_ends_with?: InputMaybe<Scalars['String']>;
    token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token0_not_ends_with?: InputMaybe<Scalars['String']>;
    token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token0_?: InputMaybe<Token_filter>;
    token1?: InputMaybe<Scalars['String']>;
    token1_not?: InputMaybe<Scalars['String']>;
    token1_gt?: InputMaybe<Scalars['String']>;
    token1_lt?: InputMaybe<Scalars['String']>;
    token1_gte?: InputMaybe<Scalars['String']>;
    token1_lte?: InputMaybe<Scalars['String']>;
    token1_in?: InputMaybe<Array<Scalars['String']>>;
    token1_not_in?: InputMaybe<Array<Scalars['String']>>;
    token1_contains?: InputMaybe<Scalars['String']>;
    token1_contains_nocase?: InputMaybe<Scalars['String']>;
    token1_not_contains?: InputMaybe<Scalars['String']>;
    token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token1_starts_with?: InputMaybe<Scalars['String']>;
    token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token1_not_starts_with?: InputMaybe<Scalars['String']>;
    token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token1_ends_with?: InputMaybe<Scalars['String']>;
    token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token1_not_ends_with?: InputMaybe<Scalars['String']>;
    token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token1_?: InputMaybe<Token_filter>;
    reserve0?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalSupply?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTxns?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type PairDayData_orderBy =
    | 'id'
    | 'date'
    | 'pairAddress'
    | 'token0'
    | 'token1'
    | 'reserve0'
    | 'reserve1'
    | 'totalSupply'
    | 'reserveUSD'
    | 'dailyVolumeToken0'
    | 'dailyVolumeToken1'
    | 'dailyVolumeUSD'
    | 'dailyTxns';

  export type PairHourData = {
    id: Scalars['ID'];
    hourStartUnix: Scalars['Int'];
    pair: Pair;
    reserve0: Scalars['BigDecimal'];
    reserve1: Scalars['BigDecimal'];
    reserveUSD: Scalars['BigDecimal'];
    hourlyVolumeToken0: Scalars['BigDecimal'];
    hourlyVolumeToken1: Scalars['BigDecimal'];
    hourlyVolumeUSD: Scalars['BigDecimal'];
    hourlyTxns: Scalars['BigInt'];
  };

  export type PairHourData_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    hourStartUnix?: InputMaybe<Scalars['Int']>;
    hourStartUnix_not?: InputMaybe<Scalars['Int']>;
    hourStartUnix_gt?: InputMaybe<Scalars['Int']>;
    hourStartUnix_lt?: InputMaybe<Scalars['Int']>;
    hourStartUnix_gte?: InputMaybe<Scalars['Int']>;
    hourStartUnix_lte?: InputMaybe<Scalars['Int']>;
    hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
    hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
    pair?: InputMaybe<Scalars['String']>;
    pair_not?: InputMaybe<Scalars['String']>;
    pair_gt?: InputMaybe<Scalars['String']>;
    pair_lt?: InputMaybe<Scalars['String']>;
    pair_gte?: InputMaybe<Scalars['String']>;
    pair_lte?: InputMaybe<Scalars['String']>;
    pair_in?: InputMaybe<Array<Scalars['String']>>;
    pair_not_in?: InputMaybe<Array<Scalars['String']>>;
    pair_contains?: InputMaybe<Scalars['String']>;
    pair_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_not_contains?: InputMaybe<Scalars['String']>;
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_starts_with?: InputMaybe<Scalars['String']>;
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_starts_with?: InputMaybe<Scalars['String']>;
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_ends_with?: InputMaybe<Scalars['String']>;
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_ends_with?: InputMaybe<Scalars['String']>;
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_?: InputMaybe<Pair_filter>;
    reserve0?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyTxns?: InputMaybe<Scalars['BigInt']>;
    hourlyTxns_not?: InputMaybe<Scalars['BigInt']>;
    hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type PairHourData_orderBy =
    | 'id'
    | 'hourStartUnix'
    | 'pair'
    | 'reserve0'
    | 'reserve1'
    | 'reserveUSD'
    | 'hourlyVolumeToken0'
    | 'hourlyVolumeToken1'
    | 'hourlyVolumeUSD'
    | 'hourlyTxns';

  export type Pair_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    token0?: InputMaybe<Scalars['String']>;
    token0_not?: InputMaybe<Scalars['String']>;
    token0_gt?: InputMaybe<Scalars['String']>;
    token0_lt?: InputMaybe<Scalars['String']>;
    token0_gte?: InputMaybe<Scalars['String']>;
    token0_lte?: InputMaybe<Scalars['String']>;
    token0_in?: InputMaybe<Array<Scalars['String']>>;
    token0_not_in?: InputMaybe<Array<Scalars['String']>>;
    token0_contains?: InputMaybe<Scalars['String']>;
    token0_contains_nocase?: InputMaybe<Scalars['String']>;
    token0_not_contains?: InputMaybe<Scalars['String']>;
    token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token0_starts_with?: InputMaybe<Scalars['String']>;
    token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token0_not_starts_with?: InputMaybe<Scalars['String']>;
    token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token0_ends_with?: InputMaybe<Scalars['String']>;
    token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token0_not_ends_with?: InputMaybe<Scalars['String']>;
    token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token0_?: InputMaybe<Token_filter>;
    token1?: InputMaybe<Scalars['String']>;
    token1_not?: InputMaybe<Scalars['String']>;
    token1_gt?: InputMaybe<Scalars['String']>;
    token1_lt?: InputMaybe<Scalars['String']>;
    token1_gte?: InputMaybe<Scalars['String']>;
    token1_lte?: InputMaybe<Scalars['String']>;
    token1_in?: InputMaybe<Array<Scalars['String']>>;
    token1_not_in?: InputMaybe<Array<Scalars['String']>>;
    token1_contains?: InputMaybe<Scalars['String']>;
    token1_contains_nocase?: InputMaybe<Scalars['String']>;
    token1_not_contains?: InputMaybe<Scalars['String']>;
    token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token1_starts_with?: InputMaybe<Scalars['String']>;
    token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token1_not_starts_with?: InputMaybe<Scalars['String']>;
    token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token1_ends_with?: InputMaybe<Scalars['String']>;
    token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token1_not_ends_with?: InputMaybe<Scalars['String']>;
    token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token1_?: InputMaybe<Token_filter>;
    reserve0?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalSupply?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveETH?: InputMaybe<Scalars['BigDecimal']>;
    reserveETH_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    trackedReserveETH?: InputMaybe<Scalars['BigDecimal']>;
    trackedReserveETH_not?: InputMaybe<Scalars['BigDecimal']>;
    trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    token0Price?: InputMaybe<Scalars['BigDecimal']>;
    token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
    token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
    token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
    token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
    token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
    token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    token1Price?: InputMaybe<Scalars['BigDecimal']>;
    token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
    token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
    token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
    token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
    token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
    token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
    volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    txCount?: InputMaybe<Scalars['BigInt']>;
    txCount_not?: InputMaybe<Scalars['BigInt']>;
    txCount_gt?: InputMaybe<Scalars['BigInt']>;
    txCount_lt?: InputMaybe<Scalars['BigInt']>;
    txCount_gte?: InputMaybe<Scalars['BigInt']>;
    txCount_lte?: InputMaybe<Scalars['BigInt']>;
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
    createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
    createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
    liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
    liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
    liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
    liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
    liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
    liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Pair_orderBy =
    | 'id'
    | 'token0'
    | 'token1'
    | 'reserve0'
    | 'reserve1'
    | 'totalSupply'
    | 'reserveETH'
    | 'reserveUSD'
    | 'trackedReserveETH'
    | 'token0Price'
    | 'token1Price'
    | 'volumeToken0'
    | 'volumeToken1'
    | 'volumeUSD'
    | 'untrackedVolumeUSD'
    | 'txCount'
    | 'createdAtTimestamp'
    | 'createdAtBlockNumber'
    | 'liquidityProviderCount';

  export type Query = {
    uniswapFactory?: Maybe<UniswapFactory>;
    uniswapFactories: Array<UniswapFactory>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    pair?: Maybe<Pair>;
    pairs: Array<Pair>;
    user?: Maybe<User>;
    users: Array<User>;
    liquidityPosition?: Maybe<LiquidityPosition>;
    liquidityPositions: Array<LiquidityPosition>;
    liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
    liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    mint?: Maybe<Mint>;
    mints: Array<Mint>;
    burn?: Maybe<Burn>;
    burns: Array<Burn>;
    swap?: Maybe<Swap>;
    swaps: Array<Swap>;
    bundle?: Maybe<Bundle>;
    bundles: Array<Bundle>;
    uniswapDayData?: Maybe<UniswapDayData>;
    uniswapDayDatas: Array<UniswapDayData>;
    pairHourData?: Maybe<PairHourData>;
    pairHourDatas: Array<PairHourData>;
    pairDayData?: Maybe<PairDayData>;
    pairDayDatas: Array<PairDayData>;
    tokenDayData?: Maybe<TokenDayData>;
    tokenDayDatas: Array<TokenDayData>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type QueryuniswapFactoryArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryuniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UniswapFactory_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UniswapFactory_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypairArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypairsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Pair_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Pair_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryuserArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryusersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<User_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<User_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryliquidityPositionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryliquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPosition_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPosition_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryliquidityPositionSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryliquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPositionSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransactionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transaction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transaction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymintArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymintsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Mint_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Mint_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryburnArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryburnsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Burn_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Burn_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryswapArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Swap_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Swap_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerybundleArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerybundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Bundle_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Bundle_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryuniswapDayDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryuniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UniswapDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UniswapDayData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypairHourDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PairHourData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PairHourData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypairDayDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PairDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PairDayData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytokenDayDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TokenDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TokenDayData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type Subscription = {
    uniswapFactory?: Maybe<UniswapFactory>;
    uniswapFactories: Array<UniswapFactory>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    pair?: Maybe<Pair>;
    pairs: Array<Pair>;
    user?: Maybe<User>;
    users: Array<User>;
    liquidityPosition?: Maybe<LiquidityPosition>;
    liquidityPositions: Array<LiquidityPosition>;
    liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
    liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    mint?: Maybe<Mint>;
    mints: Array<Mint>;
    burn?: Maybe<Burn>;
    burns: Array<Burn>;
    swap?: Maybe<Swap>;
    swaps: Array<Swap>;
    bundle?: Maybe<Bundle>;
    bundles: Array<Bundle>;
    uniswapDayData?: Maybe<UniswapDayData>;
    uniswapDayDatas: Array<UniswapDayData>;
    pairHourData?: Maybe<PairHourData>;
    pairHourDatas: Array<PairHourData>;
    pairDayData?: Maybe<PairDayData>;
    pairDayDatas: Array<PairDayData>;
    tokenDayData?: Maybe<TokenDayData>;
    tokenDayDatas: Array<TokenDayData>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type SubscriptionuniswapFactoryArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionuniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UniswapFactory_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UniswapFactory_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpairArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpairsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Pair_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Pair_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionuserArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionusersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<User_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<User_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionliquidityPositionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionliquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPosition_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPosition_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionliquidityPositionSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionliquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPositionSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransactionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transaction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transaction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmintArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmintsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Mint_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Mint_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionburnArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionburnsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Burn_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Burn_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionswapArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Swap_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Swap_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionbundleArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionbundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Bundle_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Bundle_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionuniswapDayDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionuniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UniswapDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UniswapDayData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpairHourDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PairHourData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PairHourData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpairDayDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PairDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PairDayData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontokenDayDataArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TokenDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TokenDayData_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type Swap = {
    id: Scalars['ID'];
    transaction: Transaction;
    timestamp: Scalars['BigInt'];
    pair: Pair;
    sender: Scalars['Bytes'];
    amount0In: Scalars['BigDecimal'];
    amount1In: Scalars['BigDecimal'];
    amount0Out: Scalars['BigDecimal'];
    amount1Out: Scalars['BigDecimal'];
    to: Scalars['Bytes'];
    logIndex?: Maybe<Scalars['BigInt']>;
    amountUSD: Scalars['BigDecimal'];
  };

  export type Swap_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pair?: InputMaybe<Scalars['String']>;
    pair_not?: InputMaybe<Scalars['String']>;
    pair_gt?: InputMaybe<Scalars['String']>;
    pair_lt?: InputMaybe<Scalars['String']>;
    pair_gte?: InputMaybe<Scalars['String']>;
    pair_lte?: InputMaybe<Scalars['String']>;
    pair_in?: InputMaybe<Array<Scalars['String']>>;
    pair_not_in?: InputMaybe<Array<Scalars['String']>>;
    pair_contains?: InputMaybe<Scalars['String']>;
    pair_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_not_contains?: InputMaybe<Scalars['String']>;
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pair_starts_with?: InputMaybe<Scalars['String']>;
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_starts_with?: InputMaybe<Scalars['String']>;
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair_ends_with?: InputMaybe<Scalars['String']>;
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_not_ends_with?: InputMaybe<Scalars['String']>;
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pair_?: InputMaybe<Pair_filter>;
    sender?: InputMaybe<Scalars['Bytes']>;
    sender_not?: InputMaybe<Scalars['Bytes']>;
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_contains?: InputMaybe<Scalars['Bytes']>;
    sender_not_contains?: InputMaybe<Scalars['Bytes']>;
    amount0In?: InputMaybe<Scalars['BigDecimal']>;
    amount0In_not?: InputMaybe<Scalars['BigDecimal']>;
    amount0In_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount0In_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount0In_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount0In_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount0In_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount0In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1In?: InputMaybe<Scalars['BigDecimal']>;
    amount1In_not?: InputMaybe<Scalars['BigDecimal']>;
    amount1In_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount1In_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount1In_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount1In_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount1In_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount0Out?: InputMaybe<Scalars['BigDecimal']>;
    amount0Out_not?: InputMaybe<Scalars['BigDecimal']>;
    amount0Out_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount0Out_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount0Out_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount0Out_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount0Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount0Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1Out?: InputMaybe<Scalars['BigDecimal']>;
    amount1Out_not?: InputMaybe<Scalars['BigDecimal']>;
    amount1Out_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount1Out_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount1Out_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount1Out_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount1Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount1Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    logIndex?: InputMaybe<Scalars['BigInt']>;
    logIndex_not?: InputMaybe<Scalars['BigInt']>;
    logIndex_gt?: InputMaybe<Scalars['BigInt']>;
    logIndex_lt?: InputMaybe<Scalars['BigInt']>;
    logIndex_gte?: InputMaybe<Scalars['BigInt']>;
    logIndex_lte?: InputMaybe<Scalars['BigInt']>;
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUSD?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Swap_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'sender'
    | 'amount0In'
    | 'amount1In'
    | 'amount0Out'
    | 'amount1Out'
    | 'to'
    | 'logIndex'
    | 'amountUSD';

  export type Token = {
    id: Scalars['ID'];
    symbol: Scalars['String'];
    name: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
    tradeVolume: Scalars['BigDecimal'];
    tradeVolumeUSD: Scalars['BigDecimal'];
    untrackedVolumeUSD: Scalars['BigDecimal'];
    txCount: Scalars['BigInt'];
    totalLiquidity: Scalars['BigDecimal'];
    derivedETH?: Maybe<Scalars['BigDecimal']>;
    mostLiquidPairs: Array<Maybe<PairDayData>>;
  };

  export type TokenmostLiquidPairsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PairDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PairDayData_filter>;
  };

  export type TokenDayData = {
    id: Scalars['ID'];
    date: Scalars['Int'];
    token: Token;
    dailyVolumeToken: Scalars['BigDecimal'];
    dailyVolumeETH: Scalars['BigDecimal'];
    dailyVolumeUSD: Scalars['BigDecimal'];
    dailyTxns: Scalars['BigInt'];
    totalLiquidityToken: Scalars['BigDecimal'];
    totalLiquidityETH: Scalars['BigDecimal'];
    totalLiquidityUSD: Scalars['BigDecimal'];
    priceUSD: Scalars['BigDecimal'];
    maxStored: Scalars['Int'];
    mostLiquidPairs: Array<PairDayData>;
  };

  export type TokenDayDatamostLiquidPairsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PairDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PairDayData_filter>;
  };

  export type TokenDayData_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    date?: InputMaybe<Scalars['Int']>;
    date_not?: InputMaybe<Scalars['Int']>;
    date_gt?: InputMaybe<Scalars['Int']>;
    date_lt?: InputMaybe<Scalars['Int']>;
    date_gte?: InputMaybe<Scalars['Int']>;
    date_lte?: InputMaybe<Scalars['Int']>;
    date_in?: InputMaybe<Array<Scalars['Int']>>;
    date_not_in?: InputMaybe<Array<Scalars['Int']>>;
    token?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_?: InputMaybe<Token_filter>;
    dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTxns?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
    dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    priceUSD?: InputMaybe<Scalars['BigDecimal']>;
    priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    maxStored?: InputMaybe<Scalars['Int']>;
    maxStored_not?: InputMaybe<Scalars['Int']>;
    maxStored_gt?: InputMaybe<Scalars['Int']>;
    maxStored_lt?: InputMaybe<Scalars['Int']>;
    maxStored_gte?: InputMaybe<Scalars['Int']>;
    maxStored_lte?: InputMaybe<Scalars['Int']>;
    maxStored_in?: InputMaybe<Array<Scalars['Int']>>;
    maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>;
    mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_?: InputMaybe<PairDayData_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type TokenDayData_orderBy =
    | 'id'
    | 'date'
    | 'token'
    | 'dailyVolumeToken'
    | 'dailyVolumeETH'
    | 'dailyVolumeUSD'
    | 'dailyTxns'
    | 'totalLiquidityToken'
    | 'totalLiquidityETH'
    | 'totalLiquidityUSD'
    | 'priceUSD'
    | 'maxStored'
    | 'mostLiquidPairs';

  export type Token_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    symbol?: InputMaybe<Scalars['String']>;
    symbol_not?: InputMaybe<Scalars['String']>;
    symbol_gt?: InputMaybe<Scalars['String']>;
    symbol_lt?: InputMaybe<Scalars['String']>;
    symbol_gte?: InputMaybe<Scalars['String']>;
    symbol_lte?: InputMaybe<Scalars['String']>;
    symbol_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_contains?: InputMaybe<Scalars['String']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_contains?: InputMaybe<Scalars['String']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_starts_with?: InputMaybe<Scalars['String']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_ends_with?: InputMaybe<Scalars['String']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    decimals?: InputMaybe<Scalars['BigInt']>;
    decimals_not?: InputMaybe<Scalars['BigInt']>;
    decimals_gt?: InputMaybe<Scalars['BigInt']>;
    decimals_lt?: InputMaybe<Scalars['BigInt']>;
    decimals_gte?: InputMaybe<Scalars['BigInt']>;
    decimals_lte?: InputMaybe<Scalars['BigInt']>;
    decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
    decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSupply?: InputMaybe<Scalars['BigInt']>;
    totalSupply_not?: InputMaybe<Scalars['BigInt']>;
    totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
    totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
    totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
    totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
    totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tradeVolume?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolume_not?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    txCount?: InputMaybe<Scalars['BigInt']>;
    txCount_not?: InputMaybe<Scalars['BigInt']>;
    txCount_gt?: InputMaybe<Scalars['BigInt']>;
    txCount_lt?: InputMaybe<Scalars['BigInt']>;
    txCount_gte?: InputMaybe<Scalars['BigInt']>;
    txCount_lte?: InputMaybe<Scalars['BigInt']>;
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    derivedETH?: InputMaybe<Scalars['BigDecimal']>;
    derivedETH_not?: InputMaybe<Scalars['BigDecimal']>;
    derivedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    derivedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    derivedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    derivedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidPairs_?: InputMaybe<PairDayData_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Token_orderBy =
    | 'id'
    | 'symbol'
    | 'name'
    | 'decimals'
    | 'totalSupply'
    | 'tradeVolume'
    | 'tradeVolumeUSD'
    | 'untrackedVolumeUSD'
    | 'txCount'
    | 'totalLiquidity'
    | 'derivedETH'
    | 'mostLiquidPairs';

  export type Transaction = {
    id: Scalars['ID'];
    blockNumber: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    mints: Array<Maybe<Mint>>;
    burns: Array<Maybe<Burn>>;
    swaps: Array<Maybe<Swap>>;
  };

  export type TransactionmintsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Mint_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Mint_filter>;
  };

  export type TransactionburnsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Burn_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Burn_filter>;
  };

  export type TransactionswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Swap_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Swap_filter>;
  };

  export type Transaction_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    mints?: InputMaybe<Array<Scalars['String']>>;
    mints_not?: InputMaybe<Array<Scalars['String']>>;
    mints_contains?: InputMaybe<Array<Scalars['String']>>;
    mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mints_not_contains?: InputMaybe<Array<Scalars['String']>>;
    mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mints_?: InputMaybe<Mint_filter>;
    burns?: InputMaybe<Array<Scalars['String']>>;
    burns_not?: InputMaybe<Array<Scalars['String']>>;
    burns_contains?: InputMaybe<Array<Scalars['String']>>;
    burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    burns_not_contains?: InputMaybe<Array<Scalars['String']>>;
    burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    burns_?: InputMaybe<Burn_filter>;
    swaps?: InputMaybe<Array<Scalars['String']>>;
    swaps_not?: InputMaybe<Array<Scalars['String']>>;
    swaps_contains?: InputMaybe<Array<Scalars['String']>>;
    swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    swaps_not_contains?: InputMaybe<Array<Scalars['String']>>;
    swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    swaps_?: InputMaybe<Swap_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Transaction_orderBy =
    | 'id'
    | 'blockNumber'
    | 'timestamp'
    | 'mints'
    | 'burns'
    | 'swaps';

  export type UniswapDayData = {
    id: Scalars['ID'];
    date: Scalars['Int'];
    dailyVolumeETH: Scalars['BigDecimal'];
    dailyVolumeUSD: Scalars['BigDecimal'];
    dailyVolumeUntracked: Scalars['BigDecimal'];
    totalVolumeETH: Scalars['BigDecimal'];
    totalLiquidityETH: Scalars['BigDecimal'];
    totalVolumeUSD: Scalars['BigDecimal'];
    totalLiquidityUSD: Scalars['BigDecimal'];
    maxStored?: Maybe<Scalars['Int']>;
    mostLiquidTokens: Array<TokenDayData>;
    txCount: Scalars['BigInt'];
  };

  export type UniswapDayDatamostLiquidTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TokenDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TokenDayData_filter>;
  };

  export type UniswapDayData_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    date?: InputMaybe<Scalars['Int']>;
    date_not?: InputMaybe<Scalars['Int']>;
    date_gt?: InputMaybe<Scalars['Int']>;
    date_lt?: InputMaybe<Scalars['Int']>;
    date_gte?: InputMaybe<Scalars['Int']>;
    date_lte?: InputMaybe<Scalars['Int']>;
    date_in?: InputMaybe<Array<Scalars['Int']>>;
    date_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    maxStored?: InputMaybe<Scalars['Int']>;
    maxStored_not?: InputMaybe<Scalars['Int']>;
    maxStored_gt?: InputMaybe<Scalars['Int']>;
    maxStored_lt?: InputMaybe<Scalars['Int']>;
    maxStored_gte?: InputMaybe<Scalars['Int']>;
    maxStored_lte?: InputMaybe<Scalars['Int']>;
    maxStored_in?: InputMaybe<Array<Scalars['Int']>>;
    maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>;
    mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_?: InputMaybe<TokenDayData_filter>;
    txCount?: InputMaybe<Scalars['BigInt']>;
    txCount_not?: InputMaybe<Scalars['BigInt']>;
    txCount_gt?: InputMaybe<Scalars['BigInt']>;
    txCount_lt?: InputMaybe<Scalars['BigInt']>;
    txCount_gte?: InputMaybe<Scalars['BigInt']>;
    txCount_lte?: InputMaybe<Scalars['BigInt']>;
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type UniswapDayData_orderBy =
    | 'id'
    | 'date'
    | 'dailyVolumeETH'
    | 'dailyVolumeUSD'
    | 'dailyVolumeUntracked'
    | 'totalVolumeETH'
    | 'totalLiquidityETH'
    | 'totalVolumeUSD'
    | 'totalLiquidityUSD'
    | 'maxStored'
    | 'mostLiquidTokens'
    | 'txCount';

  export type UniswapFactory = {
    id: Scalars['ID'];
    pairCount: Scalars['Int'];
    totalVolumeUSD: Scalars['BigDecimal'];
    totalVolumeETH: Scalars['BigDecimal'];
    untrackedVolumeUSD: Scalars['BigDecimal'];
    totalLiquidityUSD: Scalars['BigDecimal'];
    totalLiquidityETH: Scalars['BigDecimal'];
    txCount: Scalars['BigInt'];
    mostLiquidTokens: Array<TokenDayData>;
  };

  export type UniswapFactorymostLiquidTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TokenDayData_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TokenDayData_filter>;
  };

  export type UniswapFactory_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    pairCount?: InputMaybe<Scalars['Int']>;
    pairCount_not?: InputMaybe<Scalars['Int']>;
    pairCount_gt?: InputMaybe<Scalars['Int']>;
    pairCount_lt?: InputMaybe<Scalars['Int']>;
    pairCount_gte?: InputMaybe<Scalars['Int']>;
    pairCount_lte?: InputMaybe<Scalars['Int']>;
    pairCount_in?: InputMaybe<Array<Scalars['Int']>>;
    pairCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    txCount?: InputMaybe<Scalars['BigInt']>;
    txCount_not?: InputMaybe<Scalars['BigInt']>;
    txCount_gt?: InputMaybe<Scalars['BigInt']>;
    txCount_lt?: InputMaybe<Scalars['BigInt']>;
    txCount_gte?: InputMaybe<Scalars['BigInt']>;
    txCount_lte?: InputMaybe<Scalars['BigInt']>;
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mostLiquidTokens_?: InputMaybe<TokenDayData_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type UniswapFactory_orderBy =
    | 'id'
    | 'pairCount'
    | 'totalVolumeUSD'
    | 'totalVolumeETH'
    | 'untrackedVolumeUSD'
    | 'totalLiquidityUSD'
    | 'totalLiquidityETH'
    | 'txCount'
    | 'mostLiquidTokens';

  export type User = {
    id: Scalars['ID'];
    liquidityPositions?: Maybe<Array<LiquidityPosition>>;
    usdSwapped: Scalars['BigDecimal'];
  };

  export type UserliquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPosition_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPosition_filter>;
  };

  export type User_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
    usdSwapped?: InputMaybe<Scalars['BigDecimal']>;
    usdSwapped_not?: InputMaybe<Scalars['BigDecimal']>;
    usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']>;
    usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']>;
    usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']>;
    usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']>;
    usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type User_orderBy = 'id' | 'liquidityPositions' | 'usdSwapped';

  export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
  };

  /** The type for the top-level _meta field */
  export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
  };

  export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | 'allow'
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | 'deny';

  export type QuerySdk = {
    /** null **/
    uniswapFactory: InContextSdkMethod<
      Query['uniswapFactory'],
      QueryuniswapFactoryArgs,
      MeshContext
    >;
    /** null **/
    uniswapFactories: InContextSdkMethod<
      Query['uniswapFactories'],
      QueryuniswapFactoriesArgs,
      MeshContext
    >;
    /** null **/
    token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>;
    /** null **/
    tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>;
    /** null **/
    pair: InContextSdkMethod<Query['pair'], QuerypairArgs, MeshContext>;
    /** null **/
    pairs: InContextSdkMethod<Query['pairs'], QuerypairsArgs, MeshContext>;
    /** null **/
    user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>;
    /** null **/
    users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>;
    /** null **/
    liquidityPosition: InContextSdkMethod<
      Query['liquidityPosition'],
      QueryliquidityPositionArgs,
      MeshContext
    >;
    /** null **/
    liquidityPositions: InContextSdkMethod<
      Query['liquidityPositions'],
      QueryliquidityPositionsArgs,
      MeshContext
    >;
    /** null **/
    liquidityPositionSnapshot: InContextSdkMethod<
      Query['liquidityPositionSnapshot'],
      QueryliquidityPositionSnapshotArgs,
      MeshContext
    >;
    /** null **/
    liquidityPositionSnapshots: InContextSdkMethod<
      Query['liquidityPositionSnapshots'],
      QueryliquidityPositionSnapshotsArgs,
      MeshContext
    >;
    /** null **/
    transaction: InContextSdkMethod<
      Query['transaction'],
      QuerytransactionArgs,
      MeshContext
    >;
    /** null **/
    transactions: InContextSdkMethod<
      Query['transactions'],
      QuerytransactionsArgs,
      MeshContext
    >;
    /** null **/
    mint: InContextSdkMethod<Query['mint'], QuerymintArgs, MeshContext>;
    /** null **/
    mints: InContextSdkMethod<Query['mints'], QuerymintsArgs, MeshContext>;
    /** null **/
    burn: InContextSdkMethod<Query['burn'], QueryburnArgs, MeshContext>;
    /** null **/
    burns: InContextSdkMethod<Query['burns'], QueryburnsArgs, MeshContext>;
    /** null **/
    swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>;
    /** null **/
    swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>;
    /** null **/
    bundle: InContextSdkMethod<Query['bundle'], QuerybundleArgs, MeshContext>;
    /** null **/
    bundles: InContextSdkMethod<Query['bundles'], QuerybundlesArgs, MeshContext>;
    /** null **/
    uniswapDayData: InContextSdkMethod<
      Query['uniswapDayData'],
      QueryuniswapDayDataArgs,
      MeshContext
    >;
    /** null **/
    uniswapDayDatas: InContextSdkMethod<
      Query['uniswapDayDatas'],
      QueryuniswapDayDatasArgs,
      MeshContext
    >;
    /** null **/
    pairHourData: InContextSdkMethod<
      Query['pairHourData'],
      QuerypairHourDataArgs,
      MeshContext
    >;
    /** null **/
    pairHourDatas: InContextSdkMethod<
      Query['pairHourDatas'],
      QuerypairHourDatasArgs,
      MeshContext
    >;
    /** null **/
    pairDayData: InContextSdkMethod<
      Query['pairDayData'],
      QuerypairDayDataArgs,
      MeshContext
    >;
    /** null **/
    pairDayDatas: InContextSdkMethod<
      Query['pairDayDatas'],
      QuerypairDayDatasArgs,
      MeshContext
    >;
    /** null **/
    tokenDayData: InContextSdkMethod<
      Query['tokenDayData'],
      QuerytokenDayDataArgs,
      MeshContext
    >;
    /** null **/
    tokenDayDatas: InContextSdkMethod<
      Query['tokenDayDatas'],
      QuerytokenDayDatasArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>;
  };

  export type MutationSdk = {};

  export type SubscriptionSdk = {
    /** null **/
    uniswapFactory: InContextSdkMethod<
      Subscription['uniswapFactory'],
      SubscriptionuniswapFactoryArgs,
      MeshContext
    >;
    /** null **/
    uniswapFactories: InContextSdkMethod<
      Subscription['uniswapFactories'],
      SubscriptionuniswapFactoriesArgs,
      MeshContext
    >;
    /** null **/
    token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>;
    /** null **/
    tokens: InContextSdkMethod<
      Subscription['tokens'],
      SubscriptiontokensArgs,
      MeshContext
    >;
    /** null **/
    pair: InContextSdkMethod<Subscription['pair'], SubscriptionpairArgs, MeshContext>;
    /** null **/
    pairs: InContextSdkMethod<Subscription['pairs'], SubscriptionpairsArgs, MeshContext>;
    /** null **/
    user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>;
    /** null **/
    users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>;
    /** null **/
    liquidityPosition: InContextSdkMethod<
      Subscription['liquidityPosition'],
      SubscriptionliquidityPositionArgs,
      MeshContext
    >;
    /** null **/
    liquidityPositions: InContextSdkMethod<
      Subscription['liquidityPositions'],
      SubscriptionliquidityPositionsArgs,
      MeshContext
    >;
    /** null **/
    liquidityPositionSnapshot: InContextSdkMethod<
      Subscription['liquidityPositionSnapshot'],
      SubscriptionliquidityPositionSnapshotArgs,
      MeshContext
    >;
    /** null **/
    liquidityPositionSnapshots: InContextSdkMethod<
      Subscription['liquidityPositionSnapshots'],
      SubscriptionliquidityPositionSnapshotsArgs,
      MeshContext
    >;
    /** null **/
    transaction: InContextSdkMethod<
      Subscription['transaction'],
      SubscriptiontransactionArgs,
      MeshContext
    >;
    /** null **/
    transactions: InContextSdkMethod<
      Subscription['transactions'],
      SubscriptiontransactionsArgs,
      MeshContext
    >;
    /** null **/
    mint: InContextSdkMethod<Subscription['mint'], SubscriptionmintArgs, MeshContext>;
    /** null **/
    mints: InContextSdkMethod<Subscription['mints'], SubscriptionmintsArgs, MeshContext>;
    /** null **/
    burn: InContextSdkMethod<Subscription['burn'], SubscriptionburnArgs, MeshContext>;
    /** null **/
    burns: InContextSdkMethod<Subscription['burns'], SubscriptionburnsArgs, MeshContext>;
    /** null **/
    swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>;
    /** null **/
    swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>;
    /** null **/
    bundle: InContextSdkMethod<
      Subscription['bundle'],
      SubscriptionbundleArgs,
      MeshContext
    >;
    /** null **/
    bundles: InContextSdkMethod<
      Subscription['bundles'],
      SubscriptionbundlesArgs,
      MeshContext
    >;
    /** null **/
    uniswapDayData: InContextSdkMethod<
      Subscription['uniswapDayData'],
      SubscriptionuniswapDayDataArgs,
      MeshContext
    >;
    /** null **/
    uniswapDayDatas: InContextSdkMethod<
      Subscription['uniswapDayDatas'],
      SubscriptionuniswapDayDatasArgs,
      MeshContext
    >;
    /** null **/
    pairHourData: InContextSdkMethod<
      Subscription['pairHourData'],
      SubscriptionpairHourDataArgs,
      MeshContext
    >;
    /** null **/
    pairHourDatas: InContextSdkMethod<
      Subscription['pairHourDatas'],
      SubscriptionpairHourDatasArgs,
      MeshContext
    >;
    /** null **/
    pairDayData: InContextSdkMethod<
      Subscription['pairDayData'],
      SubscriptionpairDayDataArgs,
      MeshContext
    >;
    /** null **/
    pairDayDatas: InContextSdkMethod<
      Subscription['pairDayDatas'],
      SubscriptionpairDayDatasArgs,
      MeshContext
    >;
    /** null **/
    tokenDayData: InContextSdkMethod<
      Subscription['tokenDayData'],
      SubscriptiontokenDayDataArgs,
      MeshContext
    >;
    /** null **/
    tokenDayDatas: InContextSdkMethod<
      Subscription['tokenDayDatas'],
      SubscriptiontokenDayDatasArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>;
  };

  export type Context = {
    ['uniswapv2']: {
      Query: QuerySdk;
      Mutation: MutationSdk;
      Subscription: SubscriptionSdk;
    };
  };
}
