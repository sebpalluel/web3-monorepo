import { fetchData } from '@client/hasura/fetcher';
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
  float8: any;
  timestamp: any;
};

export type BalanceTokenData = {
  __typename?: 'BalanceTokenData';
  address?: Maybe<Scalars['String']>;
  balanceUsd?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Transaction" */
export type Transaction = {
  __typename?: 'Transaction';
  blockHash: Scalars['String'];
  blockNumber: Scalars['float8'];
  contractAddress?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamp'];
  data: Scalars['String'];
  fromAddress: Scalars['String'];
  gasFee: Scalars['float8'];
  gasFeeUsd: Scalars['float8'];
  gasLimit: Scalars['float8'];
  gasPrice: Scalars['float8'];
  gasUsed: Scalars['float8'];
  id: Scalars['String'];
  input: Scalars['String'];
  nonce: Scalars['Int'];
  status: Scalars['Boolean'];
  toAddress: Scalars['String'];
  transaction: Scalars['String'];
  updatedAt: Scalars['timestamp'];
  value: Scalars['float8'];
  walletId?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Transaction" */
export type Transaction_Aggregate = {
  __typename?: 'Transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "Transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'Transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};

/** aggregate fields of "Transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'Transaction_avg_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gasFee?: Maybe<Scalars['Float']>;
  gasFeeUsd?: Maybe<Scalars['Float']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  blockHash?: InputMaybe<String_Comparison_Exp>;
  blockNumber?: InputMaybe<Float8_Comparison_Exp>;
  contractAddress?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  data?: InputMaybe<String_Comparison_Exp>;
  fromAddress?: InputMaybe<String_Comparison_Exp>;
  gasFee?: InputMaybe<Float8_Comparison_Exp>;
  gasFeeUsd?: InputMaybe<Float8_Comparison_Exp>;
  gasLimit?: InputMaybe<Float8_Comparison_Exp>;
  gasPrice?: InputMaybe<Float8_Comparison_Exp>;
  gasUsed?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  input?: InputMaybe<String_Comparison_Exp>;
  nonce?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Boolean_Comparison_Exp>;
  toAddress?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  value?: InputMaybe<Float8_Comparison_Exp>;
  walletId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Transaction" */
export const enum Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionPkey = 'Transaction_pkey',
}

/** input type for incrementing numeric columns in table "Transaction" */
export type Transaction_Inc_Input = {
  blockNumber?: InputMaybe<Scalars['float8']>;
  gasFee?: InputMaybe<Scalars['float8']>;
  gasFeeUsd?: InputMaybe<Scalars['float8']>;
  gasLimit?: InputMaybe<Scalars['float8']>;
  gasPrice?: InputMaybe<Scalars['float8']>;
  gasUsed?: InputMaybe<Scalars['float8']>;
  nonce?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "Transaction" */
export type Transaction_Insert_Input = {
  blockHash?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['float8']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['String']>;
  fromAddress?: InputMaybe<Scalars['String']>;
  gasFee?: InputMaybe<Scalars['float8']>;
  gasFeeUsd?: InputMaybe<Scalars['float8']>;
  gasLimit?: InputMaybe<Scalars['float8']>;
  gasPrice?: InputMaybe<Scalars['float8']>;
  gasUsed?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  toAddress?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['float8']>;
  walletId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'Transaction_max_fields';
  blockHash?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['float8']>;
  contractAddress?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  data?: Maybe<Scalars['String']>;
  fromAddress?: Maybe<Scalars['String']>;
  gasFee?: Maybe<Scalars['float8']>;
  gasFeeUsd?: Maybe<Scalars['float8']>;
  gasLimit?: Maybe<Scalars['float8']>;
  gasPrice?: Maybe<Scalars['float8']>;
  gasUsed?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  toAddress?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  value?: Maybe<Scalars['float8']>;
  walletId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'Transaction_min_fields';
  blockHash?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['float8']>;
  contractAddress?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  data?: Maybe<Scalars['String']>;
  fromAddress?: Maybe<Scalars['String']>;
  gasFee?: Maybe<Scalars['float8']>;
  gasFeeUsd?: Maybe<Scalars['float8']>;
  gasLimit?: Maybe<Scalars['float8']>;
  gasPrice?: Maybe<Scalars['float8']>;
  gasUsed?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  toAddress?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  value?: Maybe<Scalars['float8']>;
  walletId?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'Transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** on_conflict condition type for table "Transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "Transaction". */
export type Transaction_Order_By = {
  blockHash?: InputMaybe<Order_By>;
  blockNumber?: InputMaybe<Order_By>;
  contractAddress?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  fromAddress?: InputMaybe<Order_By>;
  gasFee?: InputMaybe<Order_By>;
  gasFeeUsd?: InputMaybe<Order_By>;
  gasLimit?: InputMaybe<Order_By>;
  gasPrice?: InputMaybe<Order_By>;
  gasUsed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  toAddress?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  walletId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Transaction */
export type Transaction_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Transaction" */
export const enum Transaction_Select_Column {
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  ContractAddress = 'contractAddress',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  FromAddress = 'fromAddress',
  /** column name */
  GasFee = 'gasFee',
  /** column name */
  GasFeeUsd = 'gasFeeUsd',
  /** column name */
  GasLimit = 'gasLimit',
  /** column name */
  GasPrice = 'gasPrice',
  /** column name */
  GasUsed = 'gasUsed',
  /** column name */
  Id = 'id',
  /** column name */
  Input = 'input',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  Status = 'status',
  /** column name */
  ToAddress = 'toAddress',
  /** column name */
  Transaction = 'transaction',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value',
  /** column name */
  WalletId = 'walletId',
}

/** input type for updating data in table "Transaction" */
export type Transaction_Set_Input = {
  blockHash?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['float8']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['String']>;
  fromAddress?: InputMaybe<Scalars['String']>;
  gasFee?: InputMaybe<Scalars['float8']>;
  gasFeeUsd?: InputMaybe<Scalars['float8']>;
  gasLimit?: InputMaybe<Scalars['float8']>;
  gasPrice?: InputMaybe<Scalars['float8']>;
  gasUsed?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  toAddress?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['float8']>;
  walletId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'Transaction_stddev_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gasFee?: Maybe<Scalars['Float']>;
  gasFeeUsd?: Maybe<Scalars['Float']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'Transaction_stddev_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gasFee?: Maybe<Scalars['Float']>;
  gasFeeUsd?: Maybe<Scalars['Float']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'Transaction_stddev_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gasFee?: Maybe<Scalars['Float']>;
  gasFeeUsd?: Maybe<Scalars['Float']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  blockHash?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['float8']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['String']>;
  fromAddress?: InputMaybe<Scalars['String']>;
  gasFee?: InputMaybe<Scalars['float8']>;
  gasFeeUsd?: InputMaybe<Scalars['float8']>;
  gasLimit?: InputMaybe<Scalars['float8']>;
  gasPrice?: InputMaybe<Scalars['float8']>;
  gasUsed?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  toAddress?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['float8']>;
  walletId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'Transaction_sum_fields';
  blockNumber?: Maybe<Scalars['float8']>;
  gasFee?: Maybe<Scalars['float8']>;
  gasFeeUsd?: Maybe<Scalars['float8']>;
  gasLimit?: Maybe<Scalars['float8']>;
  gasPrice?: Maybe<Scalars['float8']>;
  gasUsed?: Maybe<Scalars['float8']>;
  nonce?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['float8']>;
};

/** update columns of table "Transaction" */
export const enum Transaction_Update_Column {
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  ContractAddress = 'contractAddress',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  FromAddress = 'fromAddress',
  /** column name */
  GasFee = 'gasFee',
  /** column name */
  GasFeeUsd = 'gasFeeUsd',
  /** column name */
  GasLimit = 'gasLimit',
  /** column name */
  GasPrice = 'gasPrice',
  /** column name */
  GasUsed = 'gasUsed',
  /** column name */
  Id = 'id',
  /** column name */
  Input = 'input',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  Status = 'status',
  /** column name */
  ToAddress = 'toAddress',
  /** column name */
  Transaction = 'transaction',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value',
  /** column name */
  WalletId = 'walletId',
}

export type Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'Transaction_var_pop_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gasFee?: Maybe<Scalars['Float']>;
  gasFeeUsd?: Maybe<Scalars['Float']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'Transaction_var_samp_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gasFee?: Maybe<Scalars['Float']>;
  gasFeeUsd?: Maybe<Scalars['Float']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'Transaction_variance_fields';
  blockNumber?: Maybe<Scalars['Float']>;
  gasFee?: Maybe<Scalars['Float']>;
  gasFeeUsd?: Maybe<Scalars['Float']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  nonce?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Wallet" */
export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  balanceUsd: Scalars['float8'];
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "Wallet" */
export type Wallet_Aggregate = {
  __typename?: 'Wallet_aggregate';
  aggregate?: Maybe<Wallet_Aggregate_Fields>;
  nodes: Array<Wallet>;
};

/** aggregate fields of "Wallet" */
export type Wallet_Aggregate_Fields = {
  __typename?: 'Wallet_aggregate_fields';
  avg?: Maybe<Wallet_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Wallet_Max_Fields>;
  min?: Maybe<Wallet_Min_Fields>;
  stddev?: Maybe<Wallet_Stddev_Fields>;
  stddev_pop?: Maybe<Wallet_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wallet_Stddev_Samp_Fields>;
  sum?: Maybe<Wallet_Sum_Fields>;
  var_pop?: Maybe<Wallet_Var_Pop_Fields>;
  var_samp?: Maybe<Wallet_Var_Samp_Fields>;
  variance?: Maybe<Wallet_Variance_Fields>;
};

/** aggregate fields of "Wallet" */
export type Wallet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Wallet_Avg_Fields = {
  __typename?: 'Wallet_avg_fields';
  balanceUsd?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Wallet". All fields are combined with a logical 'AND'. */
export type Wallet_Bool_Exp = {
  _and?: InputMaybe<Array<Wallet_Bool_Exp>>;
  _not?: InputMaybe<Wallet_Bool_Exp>;
  _or?: InputMaybe<Array<Wallet_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balanceUsd?: InputMaybe<Float8_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  network?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Wallet" */
export const enum Wallet_Constraint {
  /** unique or primary key constraint on columns "network", "address" */
  WalletNetworkAddressKey = 'Wallet_network_address_key',
  /** unique or primary key constraint on columns "id" */
  WalletPkey = 'Wallet_pkey',
}

/** input type for incrementing numeric columns in table "Wallet" */
export type Wallet_Inc_Input = {
  balanceUsd?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "Wallet" */
export type Wallet_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  balanceUsd?: InputMaybe<Scalars['float8']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Wallet_Max_Fields = {
  __typename?: 'Wallet_max_fields';
  address?: Maybe<Scalars['String']>;
  balanceUsd?: Maybe<Scalars['float8']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Wallet_Min_Fields = {
  __typename?: 'Wallet_min_fields';
  address?: Maybe<Scalars['String']>;
  balanceUsd?: Maybe<Scalars['float8']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Wallet" */
export type Wallet_Mutation_Response = {
  __typename?: 'Wallet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wallet>;
};

/** on_conflict condition type for table "Wallet" */
export type Wallet_On_Conflict = {
  constraint: Wallet_Constraint;
  update_columns?: Array<Wallet_Update_Column>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};

/** Ordering options when selecting data from "Wallet". */
export type Wallet_Order_By = {
  address?: InputMaybe<Order_By>;
  balanceUsd?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Wallet */
export type Wallet_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Wallet" */
export const enum Wallet_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BalanceUsd = 'balanceUsd',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "Wallet" */
export type Wallet_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  balanceUsd?: InputMaybe<Scalars['float8']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Wallet_Stddev_Fields = {
  __typename?: 'Wallet_stddev_fields';
  balanceUsd?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Wallet_Stddev_Pop_Fields = {
  __typename?: 'Wallet_stddev_pop_fields';
  balanceUsd?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Wallet_Stddev_Samp_Fields = {
  __typename?: 'Wallet_stddev_samp_fields';
  balanceUsd?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Wallet" */
export type Wallet_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Wallet_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wallet_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  balanceUsd?: InputMaybe<Scalars['float8']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Wallet_Sum_Fields = {
  __typename?: 'Wallet_sum_fields';
  balanceUsd?: Maybe<Scalars['float8']>;
};

/** update columns of table "Wallet" */
export const enum Wallet_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BalanceUsd = 'balanceUsd',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type Wallet_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Wallet_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Wallet_Set_Input>;
  where: Wallet_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Wallet_Var_Pop_Fields = {
  __typename?: 'Wallet_var_pop_fields';
  balanceUsd?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Wallet_Var_Samp_Fields = {
  __typename?: 'Wallet_var_samp_fields';
  balanceUsd?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Wallet_Variance_Fields = {
  __typename?: 'Wallet_variance_fields';
  balanceUsd?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_expires_in?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_expires_in?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_expires_in?: InputMaybe<Int_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export const enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey',
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']>;
  refresh_expires_in?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_expires_in?: InputMaybe<Scalars['Int']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_expires_in?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_expires_in?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "accounts" */
export const enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshExpiresIn = 'refresh_expires_in',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_expires_in?: InputMaybe<Scalars['Int']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_expires_in?: InputMaybe<Scalars['Int']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['Int']>;
  refresh_expires_in?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export const enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshExpiresIn = 'refresh_expires_in',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_expires_in?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_expires_in?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export const enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Transaction" */
  delete_Transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "Transaction" */
  delete_Transaction_by_pk?: Maybe<Transaction>;
  /** delete data from the table: "Wallet" */
  delete_Wallet?: Maybe<Wallet_Mutation_Response>;
  /** delete single row from the table: "Wallet" */
  delete_Wallet_by_pk?: Maybe<Wallet>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "passwords" */
  delete_passwords?: Maybe<Passwords_Mutation_Response>;
  /** delete single row from the table: "passwords" */
  delete_passwords_by_pk?: Maybe<Passwords>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verificationTokens" */
  delete_verificationTokens?: Maybe<VerificationTokens_Mutation_Response>;
  /** insert data into the table: "Transaction" */
  insert_Transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "Transaction" */
  insert_Transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "Wallet" */
  insert_Wallet?: Maybe<Wallet_Mutation_Response>;
  /** insert a single row into the table: "Wallet" */
  insert_Wallet_one?: Maybe<Wallet>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "passwords" */
  insert_passwords?: Maybe<Passwords_Mutation_Response>;
  /** insert a single row into the table: "passwords" */
  insert_passwords_one?: Maybe<Passwords>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verificationTokens" */
  insert_verificationTokens?: Maybe<VerificationTokens_Mutation_Response>;
  /** insert a single row into the table: "verificationTokens" */
  insert_verificationTokens_one?: Maybe<VerificationTokens>;
  /** update data of the table: "Transaction" */
  update_Transaction?: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "Transaction" */
  update_Transaction_by_pk?: Maybe<Transaction>;
  /** update multiples rows of table: "Transaction" */
  update_Transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
  /** update data of the table: "Wallet" */
  update_Wallet?: Maybe<Wallet_Mutation_Response>;
  /** update single row of the table: "Wallet" */
  update_Wallet_by_pk?: Maybe<Wallet>;
  /** update multiples rows of table: "Wallet" */
  update_Wallet_many?: Maybe<Array<Maybe<Wallet_Mutation_Response>>>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "passwords" */
  update_passwords?: Maybe<Passwords_Mutation_Response>;
  /** update single row of the table: "passwords" */
  update_passwords_by_pk?: Maybe<Passwords>;
  /** update multiples rows of table: "passwords" */
  update_passwords_many?: Maybe<Array<Maybe<Passwords_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verificationTokens" */
  update_verificationTokens?: Maybe<VerificationTokens_Mutation_Response>;
  /** update multiples rows of table: "verificationTokens" */
  update_verificationTokens_many?: Maybe<
    Array<Maybe<VerificationTokens_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_WalletArgs = {
  where: Wallet_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Wallet_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_PasswordsArgs = {
  where: Passwords_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Passwords_By_PkArgs = {
  hash: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_VerificationTokensArgs = {
  where: VerificationTokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_WalletArgs = {
  objects: Array<Wallet_Insert_Input>;
  on_conflict?: InputMaybe<Wallet_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Wallet_OneArgs = {
  object: Wallet_Insert_Input;
  on_conflict?: InputMaybe<Wallet_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PasswordsArgs = {
  objects: Array<Passwords_Insert_Input>;
  on_conflict?: InputMaybe<Passwords_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Passwords_OneArgs = {
  object: Passwords_Insert_Input;
  on_conflict?: InputMaybe<Passwords_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VerificationTokensArgs = {
  objects: Array<VerificationTokens_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_VerificationTokens_OneArgs = {
  object: VerificationTokens_Insert_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_WalletArgs = {
  _inc?: InputMaybe<Wallet_Inc_Input>;
  _set?: InputMaybe<Wallet_Set_Input>;
  where: Wallet_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Wallet_By_PkArgs = {
  _inc?: InputMaybe<Wallet_Inc_Input>;
  _set?: InputMaybe<Wallet_Set_Input>;
  pk_columns: Wallet_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Wallet_ManyArgs = {
  updates: Array<Wallet_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PasswordsArgs = {
  _inc?: InputMaybe<Passwords_Inc_Input>;
  _set?: InputMaybe<Passwords_Set_Input>;
  where: Passwords_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Passwords_By_PkArgs = {
  _inc?: InputMaybe<Passwords_Inc_Input>;
  _set?: InputMaybe<Passwords_Set_Input>;
  pk_columns: Passwords_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Passwords_ManyArgs = {
  updates: Array<Passwords_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_VerificationTokensArgs = {
  _set?: InputMaybe<VerificationTokens_Set_Input>;
  where: VerificationTokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_VerificationTokens_ManyArgs = {
  updates: Array<VerificationTokens_Updates>;
};

/** column ordering options */
export const enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "passwords" */
export type Passwords = {
  __typename?: 'passwords';
  attempts: Scalars['Int'];
  hash: Scalars['String'];
  iterations: Scalars['Int'];
  salt: Scalars['String'];
  userId: Scalars['String'];
};

/** aggregated selection of "passwords" */
export type Passwords_Aggregate = {
  __typename?: 'passwords_aggregate';
  aggregate?: Maybe<Passwords_Aggregate_Fields>;
  nodes: Array<Passwords>;
};

/** aggregate fields of "passwords" */
export type Passwords_Aggregate_Fields = {
  __typename?: 'passwords_aggregate_fields';
  avg?: Maybe<Passwords_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Passwords_Max_Fields>;
  min?: Maybe<Passwords_Min_Fields>;
  stddev?: Maybe<Passwords_Stddev_Fields>;
  stddev_pop?: Maybe<Passwords_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Passwords_Stddev_Samp_Fields>;
  sum?: Maybe<Passwords_Sum_Fields>;
  var_pop?: Maybe<Passwords_Var_Pop_Fields>;
  var_samp?: Maybe<Passwords_Var_Samp_Fields>;
  variance?: Maybe<Passwords_Variance_Fields>;
};

/** aggregate fields of "passwords" */
export type Passwords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Passwords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "passwords" */
export type Passwords_Aggregate_Order_By = {
  avg?: InputMaybe<Passwords_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Passwords_Max_Order_By>;
  min?: InputMaybe<Passwords_Min_Order_By>;
  stddev?: InputMaybe<Passwords_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Passwords_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Passwords_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Passwords_Sum_Order_By>;
  var_pop?: InputMaybe<Passwords_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Passwords_Var_Samp_Order_By>;
  variance?: InputMaybe<Passwords_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "passwords" */
export type Passwords_Arr_Rel_Insert_Input = {
  data: Array<Passwords_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Passwords_On_Conflict>;
};

/** aggregate avg on columns */
export type Passwords_Avg_Fields = {
  __typename?: 'passwords_avg_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "passwords" */
export type Passwords_Avg_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "passwords". All fields are combined with a logical 'AND'. */
export type Passwords_Bool_Exp = {
  _and?: InputMaybe<Array<Passwords_Bool_Exp>>;
  _not?: InputMaybe<Passwords_Bool_Exp>;
  _or?: InputMaybe<Array<Passwords_Bool_Exp>>;
  attempts?: InputMaybe<Int_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  iterations?: InputMaybe<Int_Comparison_Exp>;
  salt?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "passwords" */
export const enum Passwords_Constraint {
  /** unique or primary key constraint on columns "hash" */
  PasswordsPkey = 'passwords_pkey',
  /** unique or primary key constraint on columns "salt" */
  PasswordsSaltKey = 'passwords_salt_key',
}

/** input type for incrementing numeric columns in table "passwords" */
export type Passwords_Inc_Input = {
  attempts?: InputMaybe<Scalars['Int']>;
  iterations?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "passwords" */
export type Passwords_Insert_Input = {
  attempts?: InputMaybe<Scalars['Int']>;
  hash?: InputMaybe<Scalars['String']>;
  iterations?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Passwords_Max_Fields = {
  __typename?: 'passwords_max_fields';
  attempts?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  iterations?: Maybe<Scalars['Int']>;
  salt?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "passwords" */
export type Passwords_Max_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Passwords_Min_Fields = {
  __typename?: 'passwords_min_fields';
  attempts?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  iterations?: Maybe<Scalars['Int']>;
  salt?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "passwords" */
export type Passwords_Min_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "passwords" */
export type Passwords_Mutation_Response = {
  __typename?: 'passwords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Passwords>;
};

/** on_conflict condition type for table "passwords" */
export type Passwords_On_Conflict = {
  constraint: Passwords_Constraint;
  update_columns?: Array<Passwords_Update_Column>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** Ordering options when selecting data from "passwords". */
export type Passwords_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: passwords */
export type Passwords_Pk_Columns_Input = {
  hash: Scalars['String'];
};

/** select columns of table "passwords" */
export const enum Passwords_Select_Column {
  /** column name */
  Attempts = 'attempts',
  /** column name */
  Hash = 'hash',
  /** column name */
  Iterations = 'iterations',
  /** column name */
  Salt = 'salt',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "passwords" */
export type Passwords_Set_Input = {
  attempts?: InputMaybe<Scalars['Int']>;
  hash?: InputMaybe<Scalars['String']>;
  iterations?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Passwords_Stddev_Fields = {
  __typename?: 'passwords_stddev_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "passwords" */
export type Passwords_Stddev_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Passwords_Stddev_Pop_Fields = {
  __typename?: 'passwords_stddev_pop_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "passwords" */
export type Passwords_Stddev_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Passwords_Stddev_Samp_Fields = {
  __typename?: 'passwords_stddev_samp_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "passwords" */
export type Passwords_Stddev_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "passwords" */
export type Passwords_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Passwords_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Passwords_Stream_Cursor_Value_Input = {
  attempts?: InputMaybe<Scalars['Int']>;
  hash?: InputMaybe<Scalars['String']>;
  iterations?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Passwords_Sum_Fields = {
  __typename?: 'passwords_sum_fields';
  attempts?: Maybe<Scalars['Int']>;
  iterations?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "passwords" */
export type Passwords_Sum_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** update columns of table "passwords" */
export const enum Passwords_Update_Column {
  /** column name */
  Attempts = 'attempts',
  /** column name */
  Hash = 'hash',
  /** column name */
  Iterations = 'iterations',
  /** column name */
  Salt = 'salt',
  /** column name */
  UserId = 'userId',
}

export type Passwords_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Passwords_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Passwords_Set_Input>;
  where: Passwords_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Passwords_Var_Pop_Fields = {
  __typename?: 'passwords_var_pop_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "passwords" */
export type Passwords_Var_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Passwords_Var_Samp_Fields = {
  __typename?: 'passwords_var_samp_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "passwords" */
export type Passwords_Var_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Passwords_Variance_Fields = {
  __typename?: 'passwords_variance_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "passwords" */
export type Passwords_Variance_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Transaction" */
  Transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "Transaction" */
  Transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "Transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "Wallet" */
  Wallet: Array<Wallet>;
  /** fetch aggregated fields from the table: "Wallet" */
  Wallet_aggregate: Wallet_Aggregate;
  /** fetch data from the table: "Wallet" using primary key columns */
  Wallet_by_pk?: Maybe<Wallet>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** Get balances of token for an address in given network */
  balancesEIP377?: Maybe<Array<Maybe<BalanceTokenData>>>;
  /** An array relationship */
  passwords: Array<Passwords>;
  /** An aggregate relationship */
  passwords_aggregate: Passwords_Aggregate;
  /** fetch data from the table: "passwords" using primary key columns */
  passwords_by_pk?: Maybe<Passwords>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verificationTokens" */
  verificationTokens: Array<VerificationTokens>;
  /** fetch aggregated fields from the table: "verificationTokens" */
  verificationTokens_aggregate: VerificationTokens_Aggregate;
};

export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['String'];
};

export type Query_RootWalletArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};

export type Query_RootWallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};

export type Query_RootWallet_By_PkArgs = {
  id: Scalars['String'];
};

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['String'];
};

export type Query_RootBalancesEip377Args = {
  address: Scalars['String'];
  network: Scalars['String'];
};

export type Query_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

export type Query_RootPasswords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

export type Query_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};

export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_By_PkArgs = {
  id: Scalars['String'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Query_RootVerificationTokensArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

export type Query_RootVerificationTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  expires?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId: Scalars['String'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export const enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey',
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "sessions" */
export const enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "sessions" */
export const enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId',
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Transaction" */
  Transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "Transaction" */
  Transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "Transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table in a streaming manner : "Transaction" */
  Transaction_stream: Array<Transaction>;
  /** fetch data from the table: "Wallet" */
  Wallet: Array<Wallet>;
  /** fetch aggregated fields from the table: "Wallet" */
  Wallet_aggregate: Wallet_Aggregate;
  /** fetch data from the table: "Wallet" using primary key columns */
  Wallet_by_pk?: Maybe<Wallet>;
  /** fetch data from the table in a streaming manner : "Wallet" */
  Wallet_stream: Array<Wallet>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner : "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  passwords: Array<Passwords>;
  /** An aggregate relationship */
  passwords_aggregate: Passwords_Aggregate;
  /** fetch data from the table: "passwords" using primary key columns */
  passwords_by_pk?: Maybe<Passwords>;
  /** fetch data from the table in a streaming manner : "passwords" */
  passwords_stream: Array<Passwords>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner : "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner : "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verificationTokens" */
  verificationTokens: Array<VerificationTokens>;
  /** fetch aggregated fields from the table: "verificationTokens" */
  verificationTokens_aggregate: VerificationTokens_Aggregate;
  /** fetch data from the table in a streaming manner : "verificationTokens" */
  verificationTokens_stream: Array<VerificationTokens>;
};

export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Subscription_RootWalletArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};

export type Subscription_RootWallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};

export type Subscription_RootWallet_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_RootWallet_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Wallet_Stream_Cursor_Input>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

export type Subscription_RootPasswords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

export type Subscription_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};

export type Subscription_RootPasswords_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Passwords_Stream_Cursor_Input>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootVerificationTokensArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

export type Subscription_RootVerificationTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

export type Subscription_RootVerificationTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VerificationTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  blocked: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  passwords: Array<Passwords>;
  /** An aggregate relationship */
  passwords_aggregate: Passwords_Aggregate;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
};

/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPasswords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  blocked?: InputMaybe<Boolean_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamp_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  passwords?: InputMaybe<Passwords_Bool_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export const enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamp']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  passwords?: InputMaybe<Passwords_Arr_Rel_Insert_Input>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  blocked?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  passwords_aggregate?: InputMaybe<Passwords_Aggregate_Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export const enum Users_Select_Column {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamp']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamp']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export const enum Users_Update_Column {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Name = 'name',
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** columns and relationships of "verificationTokens" */
export type VerificationTokens = {
  __typename?: 'verificationTokens';
  expires: Scalars['timestamp'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

/** aggregated selection of "verificationTokens" */
export type VerificationTokens_Aggregate = {
  __typename?: 'verificationTokens_aggregate';
  aggregate?: Maybe<VerificationTokens_Aggregate_Fields>;
  nodes: Array<VerificationTokens>;
};

/** aggregate fields of "verificationTokens" */
export type VerificationTokens_Aggregate_Fields = {
  __typename?: 'verificationTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VerificationTokens_Max_Fields>;
  min?: Maybe<VerificationTokens_Min_Fields>;
};

/** aggregate fields of "verificationTokens" */
export type VerificationTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verificationTokens". All fields are combined with a logical 'AND'. */
export type VerificationTokens_Bool_Exp = {
  _and?: InputMaybe<Array<VerificationTokens_Bool_Exp>>;
  _not?: InputMaybe<VerificationTokens_Bool_Exp>;
  _or?: InputMaybe<Array<VerificationTokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "verificationTokens" */
export type VerificationTokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type VerificationTokens_Max_Fields = {
  __typename?: 'verificationTokens_max_fields';
  expires?: Maybe<Scalars['timestamp']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type VerificationTokens_Min_Fields = {
  __typename?: 'verificationTokens_min_fields';
  expires?: Maybe<Scalars['timestamp']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verificationTokens" */
export type VerificationTokens_Mutation_Response = {
  __typename?: 'verificationTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VerificationTokens>;
};

/** Ordering options when selecting data from "verificationTokens". */
export type VerificationTokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** select columns of table "verificationTokens" */
export const enum VerificationTokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
}

/** input type for updating data in table "verificationTokens" */
export type VerificationTokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "verificationTokens" */
export type VerificationTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VerificationTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VerificationTokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type VerificationTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VerificationTokens_Set_Input>;
  where: VerificationTokens_Bool_Exp;
};

export type DeleteAccountMutationVariables = Exact<{
  providerAccountId: Scalars['String'];
}>;

export type DeleteAccountMutation = {
  __typename?: 'mutation_root';
  delete_accounts?: {
    __typename?: 'accounts_mutation_response';
    affected_rows: number;
  } | null;
};

export type LinkAccountMutationVariables = Exact<{
  account: Accounts_Insert_Input;
}>;

export type LinkAccountMutation = {
  __typename?: 'mutation_root';
  insert_accounts_one?: {
    __typename?: 'accounts';
    access_token?: string | null;
    expires_at?: number | null;
    refresh_expires_in?: number | null;
    refresh_token?: string | null;
    token_type?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    scope?: string | null;
    userId: string;
    id: string;
    provider: string;
    providerAccountId: string;
    type: string;
  } | null;
};

export type AccountFieldsFragment = {
  __typename?: 'accounts';
  id: string;
  provider: string;
  providerAccountId: string;
  type: string;
};

export type PasswordFieldsFragment = {
  __typename?: 'passwords';
  attempts: number;
  hash: string;
  iterations: number;
  salt: string;
};

export type CreateSessionMutationVariables = Exact<{
  session: Sessions_Insert_Input;
}>;

export type CreateSessionMutation = {
  __typename?: 'mutation_root';
  insert_sessions_one?: {
    __typename?: 'sessions';
    id: string;
    userId: string;
    expires?: any | null;
    sessionToken: string;
  } | null;
};

export type GetSessionAndUserQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;

export type GetSessionAndUserQuery = {
  __typename?: 'query_root';
  sessions: Array<{
    __typename?: 'sessions';
    sessionToken: string;
    expires?: any | null;
    user?: {
      __typename?: 'users';
      email?: string | null;
      emailVerified?: any | null;
      id: string;
      image?: string | null;
      name?: string | null;
    } | null;
  }>;
};

export type CreateUserWithCredentialsMutationVariables = Exact<{
  password: Passwords_Insert_Input;
  user: Users_Insert_Input;
}>;

export type CreateUserWithCredentialsMutation = {
  __typename?: 'mutation_root';
  insert_users_one?: {
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  } | null;
  insert_passwords_one?: { __typename?: 'passwords'; hash: string } | null;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  user: Users_Set_Input;
}>;

export type UpdateUserMutation = {
  __typename?: 'mutation_root';
  update_users_by_pk?: {
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  } | null;
};

export type GetUserByAccountQueryVariables = Exact<{
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;

export type GetUserByAccountQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  }>;
};

export type CreateUserMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;

export type CreateUserMutation = {
  __typename?: 'mutation_root';
  insert_users_one?: {
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  } | null;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  }>;
};

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetUserByEmailQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  }>;
};

export type GetUsersAndAccountByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetUsersAndAccountByEmailQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
    accounts: Array<{
      __typename?: 'accounts';
      id: string;
      provider: string;
      providerAccountId: string;
      type: string;
    }>;
  }>;
};

export type GetUserAndPasswordByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetUserAndPasswordByEmailQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
    passwords: Array<{
      __typename?: 'passwords';
      attempts: number;
      hash: string;
      iterations: number;
      salt: string;
    }>;
  }>;
};

export type UserAndAccountFieldsFragment = {
  __typename?: 'users';
  email?: string | null;
  emailVerified?: any | null;
  id: string;
  image?: string | null;
  name?: string | null;
  accounts: Array<{
    __typename?: 'accounts';
    id: string;
    provider: string;
    providerAccountId: string;
    type: string;
  }>;
};

export type UserFieldsFragment = {
  __typename?: 'users';
  email?: string | null;
  emailVerified?: any | null;
  id: string;
  image?: string | null;
  name?: string | null;
};

export type CreateVerificationTokenMutationVariables = Exact<{
  verificationToken: VerificationTokens_Insert_Input;
}>;

export type CreateVerificationTokenMutation = {
  __typename?: 'mutation_root';
  insert_verificationTokens_one?: {
    __typename?: 'verificationTokens';
    identifier: string;
    expires: any;
    token: string;
  } | null;
};

export type GetVerificationTokenQueryVariables = Exact<{
  token: Scalars['String'];
}>;

export type GetVerificationTokenQuery = {
  __typename?: 'query_root';
  verificationTokens: Array<{
    __typename?: 'verificationTokens';
    identifier: string;
    expires: any;
    token: string;
  }>;
};

export type DeleteVerificationTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type DeleteVerificationTokenMutation = {
  __typename?: 'mutation_root';
  delete_verificationTokens?: {
    __typename?: 'verificationTokens_mutation_response';
    affected_rows: number;
  } | null;
};

export const PasswordFieldsFragmentDoc = `
    fragment PasswordFields on passwords {
  attempts
  hash
  iterations
  salt
}
    `;
export const UserFieldsFragmentDoc = `
    fragment UserFields on users {
  email
  emailVerified
  id
  image
  name
}
    `;
export const AccountFieldsFragmentDoc = `
    fragment AccountFields on accounts {
  id
  provider
  providerAccountId
  type
}
    `;
export const UserAndAccountFieldsFragmentDoc = `
    fragment UserAndAccountFields on users {
  ...UserFields
  accounts {
    ...AccountFields
  }
}
    ${UserFieldsFragmentDoc}
${AccountFieldsFragmentDoc}`;
const DeleteAccountDocument = `
    mutation DeleteAccount($providerAccountId: String!) {
  delete_accounts(where: {providerAccountId: {_eq: $providerAccountId}}) {
    affected_rows
  }
}
    `;
const LinkAccountDocument = `
    mutation LinkAccount($account: accounts_insert_input!) {
  insert_accounts_one(object: $account) {
    ...AccountFields
    access_token
    expires_at
    refresh_expires_in
    refresh_token
    token_type
    id_token
    session_state
    scope
    userId
  }
}
    ${AccountFieldsFragmentDoc}`;
const CreateSessionDocument = `
    mutation CreateSession($session: sessions_insert_input!) {
  insert_sessions_one(object: $session) {
    id
    userId
    expires
    sessionToken
  }
}
    `;
const GetSessionAndUserDocument = `
    query GetSessionAndUser($sessionToken: String!) {
  sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    sessionToken
    expires
    user {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
const CreateUserWithCredentialsDocument = `
    mutation CreateUserWithCredentials($password: passwords_insert_input!, $user: users_insert_input!) {
  insert_users_one(object: $user) {
    ...UserFields
  }
  insert_passwords_one(object: $password) {
    hash
  }
}
    ${UserFieldsFragmentDoc}`;
const UpdateUserDocument = `
    mutation UpdateUser($id: String!, $user: users_set_input!) {
  update_users_by_pk(_set: $user, pk_columns: {id: $id}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
const GetUserByAccountDocument = `
    query GetUserByAccount($provider: String!, $providerAccountId: String!) {
  users(
    where: {_and: {accounts: {provider: {_eq: $provider}, providerAccountId: {_eq: $providerAccountId}}}}
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
const CreateUserDocument = `
    mutation CreateUser($user: users_insert_input!) {
  insert_users_one(object: $user) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
const GetUserDocument = `
    query GetUser($id: String!) {
  users(where: {id: {_eq: $id}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
const GetUserByEmailDocument = `
    query GetUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
const GetUsersAndAccountByEmailDocument = `
    query GetUsersAndAccountByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...UserAndAccountFields
  }
}
    ${UserAndAccountFieldsFragmentDoc}`;
const GetUserAndPasswordByEmailDocument = `
    query GetUserAndPasswordByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...UserFields
    passwords {
      ...PasswordFields
    }
  }
}
    ${UserFieldsFragmentDoc}
${PasswordFieldsFragmentDoc}`;
const CreateVerificationTokenDocument = `
    mutation CreateVerificationToken($verificationToken: verificationTokens_insert_input!) {
  insert_verificationTokens_one(object: $verificationToken) {
    identifier
    expires
    token
  }
}
    `;
const GetVerificationTokenDocument = `
    query GetVerificationToken($token: String!) {
  verificationTokens(where: {token: {_eq: $token}}) {
    identifier
    expires
    token
  }
}
    `;
const DeleteVerificationTokenDocument = `
    mutation DeleteVerificationToken($token: String!) {
  delete_verificationTokens(where: {token: {_eq: $token}}) {
    affected_rows
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(
  doc: string,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    DeleteAccount(
      variables: DeleteAccountMutationVariables,
      options?: C
    ): Promise<DeleteAccountMutation> {
      return requester<DeleteAccountMutation, DeleteAccountMutationVariables>(
        DeleteAccountDocument,
        variables,
        options
      ) as Promise<DeleteAccountMutation>;
    },
    LinkAccount(
      variables: LinkAccountMutationVariables,
      options?: C
    ): Promise<LinkAccountMutation> {
      return requester<LinkAccountMutation, LinkAccountMutationVariables>(
        LinkAccountDocument,
        variables,
        options
      ) as Promise<LinkAccountMutation>;
    },
    CreateSession(
      variables: CreateSessionMutationVariables,
      options?: C
    ): Promise<CreateSessionMutation> {
      return requester<CreateSessionMutation, CreateSessionMutationVariables>(
        CreateSessionDocument,
        variables,
        options
      ) as Promise<CreateSessionMutation>;
    },
    GetSessionAndUser(
      variables: GetSessionAndUserQueryVariables,
      options?: C
    ): Promise<GetSessionAndUserQuery> {
      return requester<GetSessionAndUserQuery, GetSessionAndUserQueryVariables>(
        GetSessionAndUserDocument,
        variables,
        options
      ) as Promise<GetSessionAndUserQuery>;
    },
    CreateUserWithCredentials(
      variables: CreateUserWithCredentialsMutationVariables,
      options?: C
    ): Promise<CreateUserWithCredentialsMutation> {
      return requester<
        CreateUserWithCredentialsMutation,
        CreateUserWithCredentialsMutationVariables
      >(
        CreateUserWithCredentialsDocument,
        variables,
        options
      ) as Promise<CreateUserWithCredentialsMutation>;
    },
    UpdateUser(
      variables: UpdateUserMutationVariables,
      options?: C
    ): Promise<UpdateUserMutation> {
      return requester<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        variables,
        options
      ) as Promise<UpdateUserMutation>;
    },
    GetUserByAccount(
      variables: GetUserByAccountQueryVariables,
      options?: C
    ): Promise<GetUserByAccountQuery> {
      return requester<GetUserByAccountQuery, GetUserByAccountQueryVariables>(
        GetUserByAccountDocument,
        variables,
        options
      ) as Promise<GetUserByAccountQuery>;
    },
    CreateUser(
      variables: CreateUserMutationVariables,
      options?: C
    ): Promise<CreateUserMutation> {
      return requester<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        variables,
        options
      ) as Promise<CreateUserMutation>;
    },
    GetUser(variables: GetUserQueryVariables, options?: C): Promise<GetUserQuery> {
      return requester<GetUserQuery, GetUserQueryVariables>(
        GetUserDocument,
        variables,
        options
      ) as Promise<GetUserQuery>;
    },
    GetUserByEmail(
      variables: GetUserByEmailQueryVariables,
      options?: C
    ): Promise<GetUserByEmailQuery> {
      return requester<GetUserByEmailQuery, GetUserByEmailQueryVariables>(
        GetUserByEmailDocument,
        variables,
        options
      ) as Promise<GetUserByEmailQuery>;
    },
    GetUsersAndAccountByEmail(
      variables: GetUsersAndAccountByEmailQueryVariables,
      options?: C
    ): Promise<GetUsersAndAccountByEmailQuery> {
      return requester<
        GetUsersAndAccountByEmailQuery,
        GetUsersAndAccountByEmailQueryVariables
      >(
        GetUsersAndAccountByEmailDocument,
        variables,
        options
      ) as Promise<GetUsersAndAccountByEmailQuery>;
    },
    GetUserAndPasswordByEmail(
      variables: GetUserAndPasswordByEmailQueryVariables,
      options?: C
    ): Promise<GetUserAndPasswordByEmailQuery> {
      return requester<
        GetUserAndPasswordByEmailQuery,
        GetUserAndPasswordByEmailQueryVariables
      >(
        GetUserAndPasswordByEmailDocument,
        variables,
        options
      ) as Promise<GetUserAndPasswordByEmailQuery>;
    },
    CreateVerificationToken(
      variables: CreateVerificationTokenMutationVariables,
      options?: C
    ): Promise<CreateVerificationTokenMutation> {
      return requester<
        CreateVerificationTokenMutation,
        CreateVerificationTokenMutationVariables
      >(
        CreateVerificationTokenDocument,
        variables,
        options
      ) as Promise<CreateVerificationTokenMutation>;
    },
    GetVerificationToken(
      variables: GetVerificationTokenQueryVariables,
      options?: C
    ): Promise<GetVerificationTokenQuery> {
      return requester<GetVerificationTokenQuery, GetVerificationTokenQueryVariables>(
        GetVerificationTokenDocument,
        variables,
        options
      ) as Promise<GetVerificationTokenQuery>;
    },
    DeleteVerificationToken(
      variables: DeleteVerificationTokenMutationVariables,
      options?: C
    ): Promise<DeleteVerificationTokenMutation> {
      return requester<
        DeleteVerificationTokenMutation,
        DeleteVerificationTokenMutationVariables
      >(
        DeleteVerificationTokenDocument,
        variables,
        options
      ) as Promise<DeleteVerificationTokenMutation>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const adminSdk = getSdk(fetchData({ admin: true }));
