// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Compoundv2Types {
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
    Bytes: any;
    BigInt: any;
    BigDecimal: any;
  };

  export type Query = {
    comptroller?: Maybe<Comptroller>;
    comptrollers: Array<Comptroller>;
    market?: Maybe<Market>;
    markets: Array<Market>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    accountCToken?: Maybe<AccountCToken>;
    accountCTokens: Array<AccountCToken>;
    accountCTokenTransaction?: Maybe<AccountCTokenTransaction>;
    accountCTokenTransactions: Array<AccountCTokenTransaction>;
    transferEvent?: Maybe<TransferEvent>;
    transferEvents: Array<TransferEvent>;
    mintEvent?: Maybe<MintEvent>;
    mintEvents: Array<MintEvent>;
    redeemEvent?: Maybe<RedeemEvent>;
    redeemEvents: Array<RedeemEvent>;
    liquidationEvent?: Maybe<LiquidationEvent>;
    liquidationEvents: Array<LiquidationEvent>;
    borrowEvent?: Maybe<BorrowEvent>;
    borrowEvents: Array<BorrowEvent>;
    repayEvent?: Maybe<RepayEvent>;
    repayEvents: Array<RepayEvent>;
    ctokenTransfer?: Maybe<CTokenTransfer>;
    ctokenTransfers: Array<CTokenTransfer>;
    underlyingTransfer?: Maybe<UnderlyingTransfer>;
    underlyingTransfers: Array<UnderlyingTransfer>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type QuerycomptrollerArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerycomptrollersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Comptroller_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Comptroller_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Market_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Market_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Account_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Account_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountCTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountCTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AccountCToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AccountCToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountCTokenTransactionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountCTokenTransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AccountCTokenTransaction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransferEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransferEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymintEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymintEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MintEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MintEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryredeemEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryredeemEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RedeemEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RedeemEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryliquidationEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryliquidationEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidationEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidationEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryborrowEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryborrowEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BorrowEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BorrowEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryrepayEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryrepayEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RepayEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RepayEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryctokenTransferArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryctokenTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CTokenTransfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<CTokenTransfer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryunderlyingTransferArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryunderlyingTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UnderlyingTransfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UnderlyingTransfer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
  };

  export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | 'allow'
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | 'deny';

  /** The Comptroller type has protocol level variables stored */
  export type Comptroller = {
    /** ID is set to 1 */
    id: Scalars['ID'];
    /** Address of price oracle the comptroller uses */
    priceOracle?: Maybe<Scalars['Bytes']>;
    /** Factor used to determine repayAmount for liquidating */
    closeFactor?: Maybe<Scalars['BigInt']>;
    /** The percent bonus liquidators get for liquidating */
    liquidationIncentive?: Maybe<Scalars['BigInt']>;
    /** Max assets a single user can enter */
    maxAssets?: Maybe<Scalars['BigInt']>;
  };

  export type Comptroller_orderBy =
    | 'id'
    | 'priceOracle'
    | 'closeFactor'
    | 'liquidationIncentive'
    | 'maxAssets';

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = 'asc' | 'desc';

  export type Comptroller_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    priceOracle?: InputMaybe<Scalars['Bytes']>;
    priceOracle_not?: InputMaybe<Scalars['Bytes']>;
    priceOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
    priceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    priceOracle_contains?: InputMaybe<Scalars['Bytes']>;
    priceOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
    closeFactor?: InputMaybe<Scalars['BigInt']>;
    closeFactor_not?: InputMaybe<Scalars['BigInt']>;
    closeFactor_gt?: InputMaybe<Scalars['BigInt']>;
    closeFactor_lt?: InputMaybe<Scalars['BigInt']>;
    closeFactor_gte?: InputMaybe<Scalars['BigInt']>;
    closeFactor_lte?: InputMaybe<Scalars['BigInt']>;
    closeFactor_in?: InputMaybe<Array<Scalars['BigInt']>>;
    closeFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidationIncentive?: InputMaybe<Scalars['BigInt']>;
    liquidationIncentive_not?: InputMaybe<Scalars['BigInt']>;
    liquidationIncentive_gt?: InputMaybe<Scalars['BigInt']>;
    liquidationIncentive_lt?: InputMaybe<Scalars['BigInt']>;
    liquidationIncentive_gte?: InputMaybe<Scalars['BigInt']>;
    liquidationIncentive_lte?: InputMaybe<Scalars['BigInt']>;
    liquidationIncentive_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidationIncentive_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    maxAssets?: InputMaybe<Scalars['BigInt']>;
    maxAssets_not?: InputMaybe<Scalars['BigInt']>;
    maxAssets_gt?: InputMaybe<Scalars['BigInt']>;
    maxAssets_lt?: InputMaybe<Scalars['BigInt']>;
    maxAssets_gte?: InputMaybe<Scalars['BigInt']>;
    maxAssets_lte?: InputMaybe<Scalars['BigInt']>;
    maxAssets_in?: InputMaybe<Array<Scalars['BigInt']>>;
    maxAssets_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
  };

  /** Market stores all high level variables for a cToken market */
  export type Market = {
    /** Yearly borrow rate. With 2102400 blocks per year */
    borrowRate: Scalars['BigDecimal'];
    /** The cToken contract balance of ERC20 or ETH */
    cash: Scalars['BigDecimal'];
    /** Collateral factor determining how much one can borrow */
    collateralFactor: Scalars['BigDecimal'];
    /** Exchange rate of tokens / cTokens */
    exchangeRate: Scalars['BigDecimal'];
    /** Address of the interest rate model */
    interestRateModelAddress: Scalars['Bytes'];
    /** Name of the cToken */
    name: Scalars['String'];
    /** Reserves stored in the contract */
    reserves: Scalars['BigDecimal'];
    /** Yearly supply rate. With 2104400 blocks per year */
    supplyRate: Scalars['BigDecimal'];
    /** CToken symbol */
    symbol: Scalars['String'];
    /** CToken address */
    id: Scalars['ID'];
    /** Borrows in the market */
    totalBorrows: Scalars['BigDecimal'];
    /** CToken supply. CTokens have 8 decimals */
    totalSupply: Scalars['BigDecimal'];
    /** Underlying token address */
    underlyingAddress: Scalars['Bytes'];
    /** Underlying token name */
    underlyingName: Scalars['String'];
    /** Underlying price of token in ETH (ex. 0.007 DAI) */
    underlyingPrice: Scalars['BigDecimal'];
    /** Underlying token symbol */
    underlyingSymbol: Scalars['String'];
    /** Block the market is updated to */
    accrualBlockNumber: Scalars['Int'];
    /** Timestamp the market was most recently updated */
    blockTimestamp: Scalars['Int'];
    /** The history of the markets borrow index return (Think S&P 500) */
    borrowIndex: Scalars['BigDecimal'];
    /** The factor determining interest that goes to reserves */
    reserveFactor: Scalars['BigInt'];
    /** Underlying token price in USD */
    underlyingPriceUSD: Scalars['BigDecimal'];
    /** Underlying token decimal length */
    underlyingDecimals: Scalars['Int'];
  };

  export type Market_orderBy =
    | 'borrowRate'
    | 'cash'
    | 'collateralFactor'
    | 'exchangeRate'
    | 'interestRateModelAddress'
    | 'name'
    | 'reserves'
    | 'supplyRate'
    | 'symbol'
    | 'id'
    | 'totalBorrows'
    | 'totalSupply'
    | 'underlyingAddress'
    | 'underlyingName'
    | 'underlyingPrice'
    | 'underlyingSymbol'
    | 'accrualBlockNumber'
    | 'blockTimestamp'
    | 'borrowIndex'
    | 'reserveFactor'
    | 'underlyingPriceUSD'
    | 'underlyingDecimals';

  export type Market_filter = {
    borrowRate?: InputMaybe<Scalars['BigDecimal']>;
    borrowRate_not?: InputMaybe<Scalars['BigDecimal']>;
    borrowRate_gt?: InputMaybe<Scalars['BigDecimal']>;
    borrowRate_lt?: InputMaybe<Scalars['BigDecimal']>;
    borrowRate_gte?: InputMaybe<Scalars['BigDecimal']>;
    borrowRate_lte?: InputMaybe<Scalars['BigDecimal']>;
    borrowRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrowRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cash?: InputMaybe<Scalars['BigDecimal']>;
    cash_not?: InputMaybe<Scalars['BigDecimal']>;
    cash_gt?: InputMaybe<Scalars['BigDecimal']>;
    cash_lt?: InputMaybe<Scalars['BigDecimal']>;
    cash_gte?: InputMaybe<Scalars['BigDecimal']>;
    cash_lte?: InputMaybe<Scalars['BigDecimal']>;
    cash_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cash_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralFactor?: InputMaybe<Scalars['BigDecimal']>;
    collateralFactor_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
    exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
    exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
    exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
    exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
    exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
    exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    interestRateModelAddress?: InputMaybe<Scalars['Bytes']>;
    interestRateModelAddress_not?: InputMaybe<Scalars['Bytes']>;
    interestRateModelAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
    interestRateModelAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    interestRateModelAddress_contains?: InputMaybe<Scalars['Bytes']>;
    interestRateModelAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    reserves?: InputMaybe<Scalars['BigDecimal']>;
    reserves_not?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserves_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyRate?: InputMaybe<Scalars['BigDecimal']>;
    supplyRate_not?: InputMaybe<Scalars['BigDecimal']>;
    supplyRate_gt?: InputMaybe<Scalars['BigDecimal']>;
    supplyRate_lt?: InputMaybe<Scalars['BigDecimal']>;
    supplyRate_gte?: InputMaybe<Scalars['BigDecimal']>;
    supplyRate_lte?: InputMaybe<Scalars['BigDecimal']>;
    supplyRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    totalBorrows?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrows_not?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrows_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrows_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrows_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrows_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalSupply?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingAddress?: InputMaybe<Scalars['Bytes']>;
    underlyingAddress_not?: InputMaybe<Scalars['Bytes']>;
    underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
    underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    underlyingAddress_contains?: InputMaybe<Scalars['Bytes']>;
    underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
    underlyingName?: InputMaybe<Scalars['String']>;
    underlyingName_not?: InputMaybe<Scalars['String']>;
    underlyingName_gt?: InputMaybe<Scalars['String']>;
    underlyingName_lt?: InputMaybe<Scalars['String']>;
    underlyingName_gte?: InputMaybe<Scalars['String']>;
    underlyingName_lte?: InputMaybe<Scalars['String']>;
    underlyingName_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingName_not_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingName_contains?: InputMaybe<Scalars['String']>;
    underlyingName_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingName_not_contains?: InputMaybe<Scalars['String']>;
    underlyingName_not_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingName_starts_with?: InputMaybe<Scalars['String']>;
    underlyingName_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingName_not_starts_with?: InputMaybe<Scalars['String']>;
    underlyingName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingName_ends_with?: InputMaybe<Scalars['String']>;
    underlyingName_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingName_not_ends_with?: InputMaybe<Scalars['String']>;
    underlyingName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingPrice?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPrice_not?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingSymbol?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accrualBlockNumber?: InputMaybe<Scalars['Int']>;
    accrualBlockNumber_not?: InputMaybe<Scalars['Int']>;
    accrualBlockNumber_gt?: InputMaybe<Scalars['Int']>;
    accrualBlockNumber_lt?: InputMaybe<Scalars['Int']>;
    accrualBlockNumber_gte?: InputMaybe<Scalars['Int']>;
    accrualBlockNumber_lte?: InputMaybe<Scalars['Int']>;
    accrualBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTimestamp?: InputMaybe<Scalars['Int']>;
    blockTimestamp_not?: InputMaybe<Scalars['Int']>;
    blockTimestamp_gt?: InputMaybe<Scalars['Int']>;
    blockTimestamp_lt?: InputMaybe<Scalars['Int']>;
    blockTimestamp_gte?: InputMaybe<Scalars['Int']>;
    blockTimestamp_lte?: InputMaybe<Scalars['Int']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
    borrowIndex?: InputMaybe<Scalars['BigDecimal']>;
    borrowIndex_not?: InputMaybe<Scalars['BigDecimal']>;
    borrowIndex_gt?: InputMaybe<Scalars['BigDecimal']>;
    borrowIndex_lt?: InputMaybe<Scalars['BigDecimal']>;
    borrowIndex_gte?: InputMaybe<Scalars['BigDecimal']>;
    borrowIndex_lte?: InputMaybe<Scalars['BigDecimal']>;
    borrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveFactor?: InputMaybe<Scalars['BigInt']>;
    reserveFactor_not?: InputMaybe<Scalars['BigInt']>;
    reserveFactor_gt?: InputMaybe<Scalars['BigInt']>;
    reserveFactor_lt?: InputMaybe<Scalars['BigInt']>;
    reserveFactor_gte?: InputMaybe<Scalars['BigInt']>;
    reserveFactor_lte?: InputMaybe<Scalars['BigInt']>;
    reserveFactor_in?: InputMaybe<Array<Scalars['BigInt']>>;
    reserveFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    underlyingPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingDecimals?: InputMaybe<Scalars['Int']>;
    underlyingDecimals_not?: InputMaybe<Scalars['Int']>;
    underlyingDecimals_gt?: InputMaybe<Scalars['Int']>;
    underlyingDecimals_lt?: InputMaybe<Scalars['Int']>;
    underlyingDecimals_gte?: InputMaybe<Scalars['Int']>;
    underlyingDecimals_lte?: InputMaybe<Scalars['Int']>;
    underlyingDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
    underlyingDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /**
   * Account is an ETH address, with a list of all cToken markets the account has
   * participated in, along with liquidation information.
   */
  export type Account = {
    /** User ETH address */
    id: Scalars['ID'];
    /** Array of CTokens user is in */
    tokens: Array<AccountCToken>;
    /** Count user has been liquidated */
    countLiquidated: Scalars['Int'];
    /** Count user has liquidated others */
    countLiquidator: Scalars['Int'];
    /** True if user has ever borrowed */
    hasBorrowed: Scalars['Boolean'];
    health?: Maybe<Scalars['BigDecimal']>;
    totalBorrowValueInEth: Scalars['BigDecimal'];
    totalCollateralValueInEth: Scalars['BigDecimal'];
  };

  /**
   * Account is an ETH address, with a list of all cToken markets the account has
   * participated in, along with liquidation information.
   */
  export type AccounttokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AccountCToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AccountCToken_filter>;
  };

  export type AccountCToken_orderBy =
    | 'id'
    | 'market'
    | 'symbol'
    | 'account'
    | 'transactions'
    | 'accrualBlockNumber'
    | 'enteredMarket'
    | 'cTokenBalance'
    | 'totalUnderlyingSupplied'
    | 'totalUnderlyingRedeemed'
    | 'accountBorrowIndex'
    | 'totalUnderlyingBorrowed'
    | 'totalUnderlyingRepaid'
    | 'storedBorrowBalance';

  export type AccountCToken_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
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
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<Account_filter>;
    transactions_?: InputMaybe<AccountCTokenTransaction_filter>;
    accrualBlockNumber?: InputMaybe<Scalars['BigInt']>;
    accrualBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    accrualBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    accrualBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    accrualBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    accrualBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    accrualBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    enteredMarket?: InputMaybe<Scalars['Boolean']>;
    enteredMarket_not?: InputMaybe<Scalars['Boolean']>;
    enteredMarket_in?: InputMaybe<Array<Scalars['Boolean']>>;
    enteredMarket_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    cTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
    cTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
    cTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
    cTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
    cTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
    cTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
    cTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingSupplied?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingSupplied_not?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingSupplied_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingSupplied_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingSupplied_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingSupplied_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingSupplied_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingSupplied_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingRedeemed?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRedeemed_not?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRedeemed_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRedeemed_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRedeemed_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRedeemed_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRedeemed_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingRedeemed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrowIndex?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrowIndex_not?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrowIndex_gt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrowIndex_lt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrowIndex_gte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrowIndex_lte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingBorrowed?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingBorrowed_not?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingBorrowed_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingBorrowed_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingBorrowed_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingBorrowed_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingBorrowed_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingBorrowed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingRepaid?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRepaid_not?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRepaid_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRepaid_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRepaid_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRepaid_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalUnderlyingRepaid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalUnderlyingRepaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    storedBorrowBalance?: InputMaybe<Scalars['BigDecimal']>;
    storedBorrowBalance_not?: InputMaybe<Scalars['BigDecimal']>;
    storedBorrowBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
    storedBorrowBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
    storedBorrowBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
    storedBorrowBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
    storedBorrowBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    storedBorrowBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Account_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    tokens_?: InputMaybe<AccountCToken_filter>;
    countLiquidated?: InputMaybe<Scalars['Int']>;
    countLiquidated_not?: InputMaybe<Scalars['Int']>;
    countLiquidated_gt?: InputMaybe<Scalars['Int']>;
    countLiquidated_lt?: InputMaybe<Scalars['Int']>;
    countLiquidated_gte?: InputMaybe<Scalars['Int']>;
    countLiquidated_lte?: InputMaybe<Scalars['Int']>;
    countLiquidated_in?: InputMaybe<Array<Scalars['Int']>>;
    countLiquidated_not_in?: InputMaybe<Array<Scalars['Int']>>;
    countLiquidator?: InputMaybe<Scalars['Int']>;
    countLiquidator_not?: InputMaybe<Scalars['Int']>;
    countLiquidator_gt?: InputMaybe<Scalars['Int']>;
    countLiquidator_lt?: InputMaybe<Scalars['Int']>;
    countLiquidator_gte?: InputMaybe<Scalars['Int']>;
    countLiquidator_lte?: InputMaybe<Scalars['Int']>;
    countLiquidator_in?: InputMaybe<Array<Scalars['Int']>>;
    countLiquidator_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hasBorrowed?: InputMaybe<Scalars['Boolean']>;
    hasBorrowed_not?: InputMaybe<Scalars['Boolean']>;
    hasBorrowed_in?: InputMaybe<Array<Scalars['Boolean']>>;
    hasBorrowed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type AccountCTokenTransaction_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<AccountCToken_filter>;
    tx_hash?: InputMaybe<Scalars['Bytes']>;
    tx_hash_not?: InputMaybe<Scalars['Bytes']>;
    tx_hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    tx_hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    tx_hash_contains?: InputMaybe<Scalars['Bytes']>;
    tx_hash_not_contains?: InputMaybe<Scalars['Bytes']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['BigInt']>;
    logIndex_not?: InputMaybe<Scalars['BigInt']>;
    logIndex_gt?: InputMaybe<Scalars['BigInt']>;
    logIndex_lt?: InputMaybe<Scalars['BigInt']>;
    logIndex_gte?: InputMaybe<Scalars['BigInt']>;
    logIndex_lte?: InputMaybe<Scalars['BigInt']>;
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /**
   * AccountCToken is a single account within a single cToken market, with data such
   * as interest earned or paid
   */
  export type AccountCToken = {
    /** Concatenation of CToken address and user address */
    id: Scalars['ID'];
    /** Relation to market */
    market: Market;
    /** Symbol of the cToken */
    symbol: Scalars['String'];
    /** Relation to user */
    account: Account;
    /** Transactions data */
    transactions: Array<AccountCTokenTransaction>;
    /** Block number this asset was updated at in the contract */
    accrualBlockNumber: Scalars['BigInt'];
    /** True if user is entered, false if they are exited */
    enteredMarket: Scalars['Boolean'];
    /** CToken balance of the user */
    cTokenBalance: Scalars['BigDecimal'];
    /** Total amount of underlying supplied */
    totalUnderlyingSupplied: Scalars['BigDecimal'];
    /** Total amount of underling redeemed */
    totalUnderlyingRedeemed: Scalars['BigDecimal'];
    /** The value of the borrow index upon users last interaction */
    accountBorrowIndex: Scalars['BigDecimal'];
    /** Total amount underlying borrowed, exclusive of interest */
    totalUnderlyingBorrowed: Scalars['BigDecimal'];
    /** Total amount underlying repaid */
    totalUnderlyingRepaid: Scalars['BigDecimal'];
    /** Current borrow balance stored in contract (exclusive of interest since accrualBlockNumber) */
    storedBorrowBalance: Scalars['BigDecimal'];
    supplyBalanceUnderlying: Scalars['BigDecimal'];
    lifetimeSupplyInterestAccrued: Scalars['BigDecimal'];
    borrowBalanceUnderlying: Scalars['BigDecimal'];
    lifetimeBorrowInterestAccrued: Scalars['BigDecimal'];
  };

  /**
   * AccountCToken is a single account within a single cToken market, with data such
   * as interest earned or paid
   */
  export type AccountCTokentransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AccountCTokenTransaction_filter>;
  };

  export type AccountCTokenTransaction_orderBy =
    | 'id'
    | 'account'
    | 'tx_hash'
    | 'timestamp'
    | 'block'
    | 'logIndex';

  /** Auxiliary entity for AccountCToken */
  export type AccountCTokenTransaction = {
    id: Scalars['ID'];
    account: AccountCToken;
    tx_hash: Scalars['Bytes'];
    timestamp: Scalars['BigInt'];
    block: Scalars['BigInt'];
    logIndex: Scalars['BigInt'];
  };

  export type Account_orderBy =
    | 'id'
    | 'tokens'
    | 'countLiquidated'
    | 'countLiquidator'
    | 'hasBorrowed';

  /**
   * TransferEvent will be stored for every mint, redeem, liquidation, and any normal
   * transfer between two accounts.
   */
  export type TransferEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** cTokens transferred */
    amount: Scalars['BigDecimal'];
    /** Account that received tokens */
    to: Scalars['Bytes'];
    /** Account that sent tokens */
    from: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String'];
  };

  /**
   * An interface for a transfer of any cToken. TransferEvent, MintEvent,
   * RedeemEvent, and LiquidationEvent all use this interface
   */
  export type CTokenTransfer = {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** cTokens transferred */
    amount: Scalars['BigDecimal'];
    /** Account that received tokens */
    to: Scalars['Bytes'];
    /** Account that sent tokens */
    from: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String'];
  };

  export type TransferEvent_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol';

  export type TransferEvent_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    from?: InputMaybe<Scalars['Bytes']>;
    from_not?: InputMaybe<Scalars['Bytes']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_contains?: InputMaybe<Scalars['Bytes']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cTokenSymbol?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /**
   * MintEvent stores information for mints. From address will always be a cToken
   * market address
   */
  export type MintEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** cTokens transferred */
    amount: Scalars['BigDecimal'];
    /** Account that received tokens (minter) */
    to: Scalars['Bytes'];
    /** Account that sent tokens (CToken contract) */
    from: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String'];
    /** Underlying token amount transferred */
    underlyingAmount?: Maybe<Scalars['BigDecimal']>;
  };

  export type MintEvent_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol'
    | 'underlyingAmount';

  export type MintEvent_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    from?: InputMaybe<Scalars['Bytes']>;
    from_not?: InputMaybe<Scalars['Bytes']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_contains?: InputMaybe<Scalars['Bytes']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cTokenSymbol?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingAmount?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /**
   * RedeemEvent stores information for redeems. To address will always be a
   * cToken market address
   */
  export type RedeemEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** cTokens transferred */
    amount: Scalars['BigDecimal'];
    /** Account that received tokens (CToken contract) */
    to: Scalars['Bytes'];
    /** Account that sent tokens (redeemer) */
    from: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String'];
    /** Underlying token amount transferred */
    underlyingAmount?: Maybe<Scalars['BigDecimal']>;
  };

  export type RedeemEvent_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol'
    | 'underlyingAmount';

  export type RedeemEvent_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    from?: InputMaybe<Scalars['Bytes']>;
    from_not?: InputMaybe<Scalars['Bytes']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_contains?: InputMaybe<Scalars['Bytes']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cTokenSymbol?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingAmount?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /**
   * LiquidationEvent stores information for liquidations. The event is emitted from
   * the cToken market address.
   */
  export type LiquidationEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** cTokens seized */
    amount: Scalars['BigDecimal'];
    /** Liquidator receiving tokens */
    to: Scalars['Bytes'];
    /** Account being liquidated (borrower) */
    from: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** cToken that was sezied as collateral */
    cTokenSymbol: Scalars['String'];
    /** Symbol of the underlying asset repaid through liquidation */
    underlyingSymbol: Scalars['String'];
    /** Underlying cToken amount that was repaid by liquidator */
    underlyingRepayAmount: Scalars['BigDecimal'];
  };

  export type LiquidationEvent_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol'
    | 'underlyingSymbol'
    | 'underlyingRepayAmount';

  export type LiquidationEvent_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    from?: InputMaybe<Scalars['Bytes']>;
    from_not?: InputMaybe<Scalars['Bytes']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_contains?: InputMaybe<Scalars['Bytes']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cTokenSymbol?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingRepayAmount?: InputMaybe<Scalars['BigDecimal']>;
    underlyingRepayAmount_not?: InputMaybe<Scalars['BigDecimal']>;
    underlyingRepayAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingRepayAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
    underlyingRepayAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingRepayAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
    underlyingRepayAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    underlyingRepayAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /** BorrowEvent stores information for borrows */
  export type BorrowEvent = UnderlyingTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** Amount of underlying borrowed */
    amount: Scalars['BigDecimal'];
    /** Total borrows of this asset the account has */
    accountBorrows: Scalars['BigDecimal'];
    /** Account that borrowed the tokens */
    borrower: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** Symbol of the borrowed underlying asset */
    underlyingSymbol: Scalars['String'];
  };

  /**
   * Underlying transfers are transfers of underlying collateral for both borrows
   * and repays
   */
  export type UnderlyingTransfer = {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** Amount of underlying borrowed */
    amount: Scalars['BigDecimal'];
    /** Total borrows of this asset the account has */
    accountBorrows: Scalars['BigDecimal'];
    /** Account that borrowed the tokens */
    borrower: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** Symbol of the borrowed underlying asset */
    underlyingSymbol: Scalars['String'];
  };

  export type BorrowEvent_orderBy =
    | 'id'
    | 'amount'
    | 'accountBorrows'
    | 'borrower'
    | 'blockNumber'
    | 'blockTime'
    | 'underlyingSymbol';

  export type BorrowEvent_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrows?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrower?: InputMaybe<Scalars['Bytes']>;
    borrower_not?: InputMaybe<Scalars['Bytes']>;
    borrower_in?: InputMaybe<Array<Scalars['Bytes']>>;
    borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    borrower_contains?: InputMaybe<Scalars['Bytes']>;
    borrower_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    underlyingSymbol?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /**
   * RepayEvent stores information for repays. Payer is not always the same as
   * borrower, such as in the event of a Liquidation
   */
  export type RepayEvent = UnderlyingTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID'];
    /** Amount of underlying repaid */
    amount: Scalars['BigDecimal'];
    /** Total borrows of this asset the account has */
    accountBorrows: Scalars['BigDecimal'];
    /** Account that borrowed the tokens */
    borrower: Scalars['Bytes'];
    /** Block number */
    blockNumber: Scalars['Int'];
    /** Block time */
    blockTime: Scalars['Int'];
    /** Symbol of the borrowed underlying asset */
    underlyingSymbol: Scalars['String'];
    /** Payer of the borrow funds */
    payer: Scalars['Bytes'];
  };

  export type RepayEvent_orderBy =
    | 'id'
    | 'amount'
    | 'accountBorrows'
    | 'borrower'
    | 'blockNumber'
    | 'blockTime'
    | 'underlyingSymbol'
    | 'payer';

  export type RepayEvent_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrows?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrower?: InputMaybe<Scalars['Bytes']>;
    borrower_not?: InputMaybe<Scalars['Bytes']>;
    borrower_in?: InputMaybe<Array<Scalars['Bytes']>>;
    borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    borrower_contains?: InputMaybe<Scalars['Bytes']>;
    borrower_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    underlyingSymbol?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    payer?: InputMaybe<Scalars['Bytes']>;
    payer_not?: InputMaybe<Scalars['Bytes']>;
    payer_in?: InputMaybe<Array<Scalars['Bytes']>>;
    payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    payer_contains?: InputMaybe<Scalars['Bytes']>;
    payer_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type CTokenTransfer_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol';

  export type CTokenTransfer_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    from?: InputMaybe<Scalars['Bytes']>;
    from_not?: InputMaybe<Scalars['Bytes']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_contains?: InputMaybe<Scalars['Bytes']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cTokenSymbol?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>;
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>;
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type UnderlyingTransfer_orderBy =
    | 'id'
    | 'amount'
    | 'accountBorrows'
    | 'borrower'
    | 'blockNumber'
    | 'blockTime'
    | 'underlyingSymbol';

  export type UnderlyingTransfer_filter = {
    id?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    amount?: InputMaybe<Scalars['BigDecimal']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrows?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>;
    accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrower?: InputMaybe<Scalars['Bytes']>;
    borrower_not?: InputMaybe<Scalars['Bytes']>;
    borrower_in?: InputMaybe<Array<Scalars['Bytes']>>;
    borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    borrower_contains?: InputMaybe<Scalars['Bytes']>;
    borrower_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['Int']>;
    blockNumber_not?: InputMaybe<Scalars['Int']>;
    blockNumber_gt?: InputMaybe<Scalars['Int']>;
    blockNumber_lt?: InputMaybe<Scalars['Int']>;
    blockNumber_gte?: InputMaybe<Scalars['Int']>;
    blockNumber_lte?: InputMaybe<Scalars['Int']>;
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime?: InputMaybe<Scalars['Int']>;
    blockTime_not?: InputMaybe<Scalars['Int']>;
    blockTime_gt?: InputMaybe<Scalars['Int']>;
    blockTime_lt?: InputMaybe<Scalars['Int']>;
    blockTime_gte?: InputMaybe<Scalars['Int']>;
    blockTime_lte?: InputMaybe<Scalars['Int']>;
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>;
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
    underlyingSymbol?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>;
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>;
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
    underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  /** The type for the top-level _meta field */
  export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
  };

  export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
  };

  export type Subscription = {
    comptroller?: Maybe<Comptroller>;
    comptrollers: Array<Comptroller>;
    market?: Maybe<Market>;
    markets: Array<Market>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    accountCToken?: Maybe<AccountCToken>;
    accountCTokens: Array<AccountCToken>;
    accountCTokenTransaction?: Maybe<AccountCTokenTransaction>;
    accountCTokenTransactions: Array<AccountCTokenTransaction>;
    transferEvent?: Maybe<TransferEvent>;
    transferEvents: Array<TransferEvent>;
    mintEvent?: Maybe<MintEvent>;
    mintEvents: Array<MintEvent>;
    redeemEvent?: Maybe<RedeemEvent>;
    redeemEvents: Array<RedeemEvent>;
    liquidationEvent?: Maybe<LiquidationEvent>;
    liquidationEvents: Array<LiquidationEvent>;
    borrowEvent?: Maybe<BorrowEvent>;
    borrowEvents: Array<BorrowEvent>;
    repayEvent?: Maybe<RepayEvent>;
    repayEvents: Array<RepayEvent>;
    ctokenTransfer?: Maybe<CTokenTransfer>;
    ctokenTransfers: Array<CTokenTransfer>;
    underlyingTransfer?: Maybe<UnderlyingTransfer>;
    underlyingTransfers: Array<UnderlyingTransfer>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type SubscriptioncomptrollerArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptioncomptrollersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Comptroller_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Comptroller_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Market_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Market_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Account_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Account_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountCTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountCTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AccountCToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AccountCToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountCTokenTransactionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountCTokenTransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AccountCTokenTransaction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransferEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransferEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmintEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmintEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MintEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MintEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionredeemEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionredeemEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RedeemEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RedeemEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionliquidationEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionliquidationEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidationEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidationEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionborrowEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionborrowEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BorrowEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BorrowEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionrepayEventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionrepayEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RepayEvent_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RepayEvent_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionctokenTransferArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionctokenTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CTokenTransfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<CTokenTransfer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionunderlyingTransferArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionunderlyingTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UnderlyingTransfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UnderlyingTransfer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type QuerySdk = {
    /**  **/
    comptroller: InContextSdkMethod<
      Query['comptroller'],
      QuerycomptrollerArgs,
      MeshContext
    >;
    /**  **/
    comptrollers: InContextSdkMethod<
      Query['comptrollers'],
      QuerycomptrollersArgs,
      MeshContext
    >;
    /**  **/
    market: InContextSdkMethod<Query['market'], QuerymarketArgs, MeshContext>;
    /**  **/
    markets: InContextSdkMethod<Query['markets'], QuerymarketsArgs, MeshContext>;
    /**  **/
    account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>;
    /**  **/
    accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>;
    /**  **/
    accountCToken: InContextSdkMethod<
      Query['accountCToken'],
      QueryaccountCTokenArgs,
      MeshContext
    >;
    /**  **/
    accountCTokens: InContextSdkMethod<
      Query['accountCTokens'],
      QueryaccountCTokensArgs,
      MeshContext
    >;
    /**  **/
    accountCTokenTransaction: InContextSdkMethod<
      Query['accountCTokenTransaction'],
      QueryaccountCTokenTransactionArgs,
      MeshContext
    >;
    /**  **/
    accountCTokenTransactions: InContextSdkMethod<
      Query['accountCTokenTransactions'],
      QueryaccountCTokenTransactionsArgs,
      MeshContext
    >;
    /**  **/
    transferEvent: InContextSdkMethod<
      Query['transferEvent'],
      QuerytransferEventArgs,
      MeshContext
    >;
    /**  **/
    transferEvents: InContextSdkMethod<
      Query['transferEvents'],
      QuerytransferEventsArgs,
      MeshContext
    >;
    /**  **/
    mintEvent: InContextSdkMethod<Query['mintEvent'], QuerymintEventArgs, MeshContext>;
    /**  **/
    mintEvents: InContextSdkMethod<Query['mintEvents'], QuerymintEventsArgs, MeshContext>;
    /**  **/
    redeemEvent: InContextSdkMethod<
      Query['redeemEvent'],
      QueryredeemEventArgs,
      MeshContext
    >;
    /**  **/
    redeemEvents: InContextSdkMethod<
      Query['redeemEvents'],
      QueryredeemEventsArgs,
      MeshContext
    >;
    /**  **/
    liquidationEvent: InContextSdkMethod<
      Query['liquidationEvent'],
      QueryliquidationEventArgs,
      MeshContext
    >;
    /**  **/
    liquidationEvents: InContextSdkMethod<
      Query['liquidationEvents'],
      QueryliquidationEventsArgs,
      MeshContext
    >;
    /**  **/
    borrowEvent: InContextSdkMethod<
      Query['borrowEvent'],
      QueryborrowEventArgs,
      MeshContext
    >;
    /**  **/
    borrowEvents: InContextSdkMethod<
      Query['borrowEvents'],
      QueryborrowEventsArgs,
      MeshContext
    >;
    /**  **/
    repayEvent: InContextSdkMethod<Query['repayEvent'], QueryrepayEventArgs, MeshContext>;
    /**  **/
    repayEvents: InContextSdkMethod<
      Query['repayEvents'],
      QueryrepayEventsArgs,
      MeshContext
    >;
    /**  **/
    ctokenTransfer: InContextSdkMethod<
      Query['ctokenTransfer'],
      QueryctokenTransferArgs,
      MeshContext
    >;
    /**  **/
    ctokenTransfers: InContextSdkMethod<
      Query['ctokenTransfers'],
      QueryctokenTransfersArgs,
      MeshContext
    >;
    /**  **/
    underlyingTransfer: InContextSdkMethod<
      Query['underlyingTransfer'],
      QueryunderlyingTransferArgs,
      MeshContext
    >;
    /**  **/
    underlyingTransfers: InContextSdkMethod<
      Query['underlyingTransfers'],
      QueryunderlyingTransfersArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>;
  };

  export type MutationSdk = {};

  export type SubscriptionSdk = {
    /**  **/
    comptroller: InContextSdkMethod<
      Subscription['comptroller'],
      SubscriptioncomptrollerArgs,
      MeshContext
    >;
    /**  **/
    comptrollers: InContextSdkMethod<
      Subscription['comptrollers'],
      SubscriptioncomptrollersArgs,
      MeshContext
    >;
    /**  **/
    market: InContextSdkMethod<
      Subscription['market'],
      SubscriptionmarketArgs,
      MeshContext
    >;
    /**  **/
    markets: InContextSdkMethod<
      Subscription['markets'],
      SubscriptionmarketsArgs,
      MeshContext
    >;
    /**  **/
    account: InContextSdkMethod<
      Subscription['account'],
      SubscriptionaccountArgs,
      MeshContext
    >;
    /**  **/
    accounts: InContextSdkMethod<
      Subscription['accounts'],
      SubscriptionaccountsArgs,
      MeshContext
    >;
    /**  **/
    accountCToken: InContextSdkMethod<
      Subscription['accountCToken'],
      SubscriptionaccountCTokenArgs,
      MeshContext
    >;
    /**  **/
    accountCTokens: InContextSdkMethod<
      Subscription['accountCTokens'],
      SubscriptionaccountCTokensArgs,
      MeshContext
    >;
    /**  **/
    accountCTokenTransaction: InContextSdkMethod<
      Subscription['accountCTokenTransaction'],
      SubscriptionaccountCTokenTransactionArgs,
      MeshContext
    >;
    /**  **/
    accountCTokenTransactions: InContextSdkMethod<
      Subscription['accountCTokenTransactions'],
      SubscriptionaccountCTokenTransactionsArgs,
      MeshContext
    >;
    /**  **/
    transferEvent: InContextSdkMethod<
      Subscription['transferEvent'],
      SubscriptiontransferEventArgs,
      MeshContext
    >;
    /**  **/
    transferEvents: InContextSdkMethod<
      Subscription['transferEvents'],
      SubscriptiontransferEventsArgs,
      MeshContext
    >;
    /**  **/
    mintEvent: InContextSdkMethod<
      Subscription['mintEvent'],
      SubscriptionmintEventArgs,
      MeshContext
    >;
    /**  **/
    mintEvents: InContextSdkMethod<
      Subscription['mintEvents'],
      SubscriptionmintEventsArgs,
      MeshContext
    >;
    /**  **/
    redeemEvent: InContextSdkMethod<
      Subscription['redeemEvent'],
      SubscriptionredeemEventArgs,
      MeshContext
    >;
    /**  **/
    redeemEvents: InContextSdkMethod<
      Subscription['redeemEvents'],
      SubscriptionredeemEventsArgs,
      MeshContext
    >;
    /**  **/
    liquidationEvent: InContextSdkMethod<
      Subscription['liquidationEvent'],
      SubscriptionliquidationEventArgs,
      MeshContext
    >;
    /**  **/
    liquidationEvents: InContextSdkMethod<
      Subscription['liquidationEvents'],
      SubscriptionliquidationEventsArgs,
      MeshContext
    >;
    /**  **/
    borrowEvent: InContextSdkMethod<
      Subscription['borrowEvent'],
      SubscriptionborrowEventArgs,
      MeshContext
    >;
    /**  **/
    borrowEvents: InContextSdkMethod<
      Subscription['borrowEvents'],
      SubscriptionborrowEventsArgs,
      MeshContext
    >;
    /**  **/
    repayEvent: InContextSdkMethod<
      Subscription['repayEvent'],
      SubscriptionrepayEventArgs,
      MeshContext
    >;
    /**  **/
    repayEvents: InContextSdkMethod<
      Subscription['repayEvents'],
      SubscriptionrepayEventsArgs,
      MeshContext
    >;
    /**  **/
    ctokenTransfer: InContextSdkMethod<
      Subscription['ctokenTransfer'],
      SubscriptionctokenTransferArgs,
      MeshContext
    >;
    /**  **/
    ctokenTransfers: InContextSdkMethod<
      Subscription['ctokenTransfers'],
      SubscriptionctokenTransfersArgs,
      MeshContext
    >;
    /**  **/
    underlyingTransfer: InContextSdkMethod<
      Subscription['underlyingTransfer'],
      SubscriptionunderlyingTransferArgs,
      MeshContext
    >;
    /**  **/
    underlyingTransfers: InContextSdkMethod<
      Subscription['underlyingTransfers'],
      SubscriptionunderlyingTransfersArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>;
  };

  export type Context = {
    ['compoundv2']: {
      Query: QuerySdk;
      Mutation: MutationSdk;
      Subscription: SubscriptionSdk;
    };
  };
}
