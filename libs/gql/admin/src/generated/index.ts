type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
};

type AccessTokens = {
  __typename?: 'AccessTokens';
  jwt: Scalars['String'];
  refreshToken: Scalars['String'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
type Boolean_Comparison_Exp = {
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
type Int_Comparison_Exp = {
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

type JwtToken = {
  __typename?: 'JwtToken';
  jwt: Scalars['String'];
};

type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

type SignoutOutput = {
  __typename?: 'SignoutOutput';
  ok: Scalars['Boolean'];
};

type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
type String_Comparison_Exp = {
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

/** columns and relationships of "accounts" */
type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

/** aggregated selection of "accounts" */
type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
type Accounts_Aggregate_Fields = {
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
type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
type Accounts_Aggregate_Order_By = {
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
type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey',
}

/** input type for incrementing numeric columns in table "accounts" */
type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "accounts" */
type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "accounts" */
type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "accounts" */
type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
type Accounts_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "accounts" */
enum Accounts_Select_Column {
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
type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "accounts" */
type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
enum Accounts_Update_Column {
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

/** aggregate var_pop on columns */
type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** mutation root */
type Mutation_Root = {
  __typename?: 'mutation_root';
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
  signout?: Maybe<SignoutOutput>;
  signup: AccessTokens;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "passwords" */
  update_passwords?: Maybe<Passwords_Mutation_Response>;
  /** update single row of the table: "passwords" */
  update_passwords_by_pk?: Maybe<Passwords>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verificationTokens" */
  update_verificationTokens?: Maybe<VerificationTokens_Mutation_Response>;
};

/** mutation root */
type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
type Mutation_RootDelete_PasswordsArgs = {
  where: Passwords_Bool_Exp;
};

/** mutation root */
type Mutation_RootDelete_Passwords_By_PkArgs = {
  hash: Scalars['String'];
};

/** mutation root */
type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
type Mutation_RootDelete_VerificationTokensArgs = {
  where: VerificationTokens_Bool_Exp;
};

/** mutation root */
type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_PasswordsArgs = {
  objects: Array<Passwords_Insert_Input>;
  on_conflict?: InputMaybe<Passwords_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_Passwords_OneArgs = {
  object: Passwords_Insert_Input;
  on_conflict?: InputMaybe<Passwords_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_VerificationTokensArgs = {
  objects: Array<VerificationTokens_Insert_Input>;
};

/** mutation root */
type Mutation_RootInsert_VerificationTokens_OneArgs = {
  object: VerificationTokens_Insert_Input;
};

/** mutation root */
type Mutation_RootSignupArgs = {
  params: SignupInput;
};

/** mutation root */
type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
type Mutation_RootUpdate_PasswordsArgs = {
  _inc?: InputMaybe<Passwords_Inc_Input>;
  _set?: InputMaybe<Passwords_Set_Input>;
  where: Passwords_Bool_Exp;
};

/** mutation root */
type Mutation_RootUpdate_Passwords_By_PkArgs = {
  _inc?: InputMaybe<Passwords_Inc_Input>;
  _set?: InputMaybe<Passwords_Set_Input>;
  pk_columns: Passwords_Pk_Columns_Input;
};

/** mutation root */
type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
type Mutation_RootUpdate_VerificationTokensArgs = {
  _set?: InputMaybe<VerificationTokens_Set_Input>;
  where: VerificationTokens_Bool_Exp;
};

/** column ordering options */
enum Order_By {
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
type Passwords = {
  __typename?: 'passwords';
  attempts: Scalars['Int'];
  hash: Scalars['String'];
  iterations: Scalars['Int'];
  salt: Scalars['String'];
  userId: Scalars['String'];
};

/** aggregated selection of "passwords" */
type Passwords_Aggregate = {
  __typename?: 'passwords_aggregate';
  aggregate?: Maybe<Passwords_Aggregate_Fields>;
  nodes: Array<Passwords>;
};

/** aggregate fields of "passwords" */
type Passwords_Aggregate_Fields = {
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
type Passwords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Passwords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "passwords" */
type Passwords_Aggregate_Order_By = {
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
type Passwords_Arr_Rel_Insert_Input = {
  data: Array<Passwords_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Passwords_On_Conflict>;
};

/** aggregate avg on columns */
type Passwords_Avg_Fields = {
  __typename?: 'passwords_avg_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "passwords" */
type Passwords_Avg_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "passwords". All fields are combined with a logical 'AND'. */
type Passwords_Bool_Exp = {
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
enum Passwords_Constraint {
  /** unique or primary key constraint on columns "hash" */
  PasswordsPkey = 'passwords_pkey',
  /** unique or primary key constraint on columns "salt" */
  PasswordsSaltKey = 'passwords_salt_key',
}

/** input type for incrementing numeric columns in table "passwords" */
type Passwords_Inc_Input = {
  attempts?: InputMaybe<Scalars['Int']>;
  iterations?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "passwords" */
type Passwords_Insert_Input = {
  attempts?: InputMaybe<Scalars['Int']>;
  hash?: InputMaybe<Scalars['String']>;
  iterations?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
type Passwords_Max_Fields = {
  __typename?: 'passwords_max_fields';
  attempts?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  iterations?: Maybe<Scalars['Int']>;
  salt?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "passwords" */
type Passwords_Max_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
type Passwords_Min_Fields = {
  __typename?: 'passwords_min_fields';
  attempts?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  iterations?: Maybe<Scalars['Int']>;
  salt?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "passwords" */
type Passwords_Min_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "passwords" */
type Passwords_Mutation_Response = {
  __typename?: 'passwords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Passwords>;
};

/** on_conflict condition type for table "passwords" */
type Passwords_On_Conflict = {
  constraint: Passwords_Constraint;
  update_columns?: Array<Passwords_Update_Column>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** Ordering options when selecting data from "passwords". */
type Passwords_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: passwords */
type Passwords_Pk_Columns_Input = {
  hash: Scalars['String'];
};

/** select columns of table "passwords" */
enum Passwords_Select_Column {
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
type Passwords_Set_Input = {
  attempts?: InputMaybe<Scalars['Int']>;
  hash?: InputMaybe<Scalars['String']>;
  iterations?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
type Passwords_Stddev_Fields = {
  __typename?: 'passwords_stddev_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "passwords" */
type Passwords_Stddev_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
type Passwords_Stddev_Pop_Fields = {
  __typename?: 'passwords_stddev_pop_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "passwords" */
type Passwords_Stddev_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
type Passwords_Stddev_Samp_Fields = {
  __typename?: 'passwords_stddev_samp_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "passwords" */
type Passwords_Stddev_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
type Passwords_Sum_Fields = {
  __typename?: 'passwords_sum_fields';
  attempts?: Maybe<Scalars['Int']>;
  iterations?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "passwords" */
type Passwords_Sum_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** update columns of table "passwords" */
enum Passwords_Update_Column {
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

/** aggregate var_pop on columns */
type Passwords_Var_Pop_Fields = {
  __typename?: 'passwords_var_pop_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "passwords" */
type Passwords_Var_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
type Passwords_Var_Samp_Fields = {
  __typename?: 'passwords_var_samp_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "passwords" */
type Passwords_Var_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
type Passwords_Variance_Fields = {
  __typename?: 'passwords_variance_fields';
  attempts?: Maybe<Scalars['Float']>;
  iterations?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "passwords" */
type Passwords_Variance_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  login: AccessTokens;
  /** An array relationship */
  passwords: Array<Passwords>;
  /** An aggregate relationship */
  passwords_aggregate: Passwords_Aggregate;
  /** fetch data from the table: "passwords" using primary key columns */
  passwords_by_pk?: Maybe<Passwords>;
  refreshJwtToken: JwtToken;
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

type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

type Query_RootAccounts_By_PkArgs = {
  id: Scalars['String'];
};

type Query_RootLoginArgs = {
  params: LoginInput;
};

type Query_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

type Query_RootPasswords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

type Query_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};

type Query_RootRefreshJwtTokenArgs = {
  fingerprintHash: Scalars['String'];
  refreshToken: Scalars['String'];
};

type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

type Query_RootSessions_By_PkArgs = {
  id: Scalars['String'];
};

type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

type Query_RootVerificationTokensArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

type Query_RootVerificationTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

/** columns and relationships of "sessions" */
type Sessions = {
  __typename?: 'sessions';
  expires?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId: Scalars['String'];
};

/** aggregated selection of "sessions" */
type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};

/** aggregate fields of "sessions" */
type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
type Sessions_Bool_Exp = {
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
enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey',
}

/** input type for inserting data into table "sessions" */
type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "sessions" */
type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "sessions" */
type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
type Sessions_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "sessions" */
enum Sessions_Select_Column {
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
type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "sessions" */
enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId',
}

type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
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

type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['String'];
};

type Subscription_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

type Subscription_RootPasswords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

type Subscription_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};

type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['String'];
};

type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

type Subscription_RootVerificationTokensArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

type Subscription_RootVerificationTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VerificationTokens_Order_By>>;
  where?: InputMaybe<VerificationTokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
type Timestamp_Comparison_Exp = {
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
type Users = {
  __typename?: 'users';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  blocked: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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
type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
type UsersPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** columns and relationships of "users" */
type UsersPasswords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** columns and relationships of "users" */
type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** columns and relationships of "users" */
type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
type Users_Bool_Exp = {
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
  password?: InputMaybe<String_Comparison_Exp>;
  passwords?: InputMaybe<Passwords_Bool_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamp']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwords?: InputMaybe<Passwords_Arr_Rel_Insert_Input>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  blocked?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  passwords_aggregate?: InputMaybe<Passwords_Aggregate_Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
enum Users_Select_Column {
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
  /** column name */
  Password = 'password',
}

/** input type for updating data in table "users" */
type Users_Set_Input = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamp']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
enum Users_Update_Column {
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
  /** column name */
  Password = 'password',
}

/** columns and relationships of "verificationTokens" */
type VerificationTokens = {
  __typename?: 'verificationTokens';
  expires: Scalars['timestamp'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

/** aggregated selection of "verificationTokens" */
type VerificationTokens_Aggregate = {
  __typename?: 'verificationTokens_aggregate';
  aggregate?: Maybe<VerificationTokens_Aggregate_Fields>;
  nodes: Array<VerificationTokens>;
};

/** aggregate fields of "verificationTokens" */
type VerificationTokens_Aggregate_Fields = {
  __typename?: 'verificationTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VerificationTokens_Max_Fields>;
  min?: Maybe<VerificationTokens_Min_Fields>;
};

/** aggregate fields of "verificationTokens" */
type VerificationTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VerificationTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verificationTokens". All fields are combined with a logical 'AND'. */
type VerificationTokens_Bool_Exp = {
  _and?: InputMaybe<Array<VerificationTokens_Bool_Exp>>;
  _not?: InputMaybe<VerificationTokens_Bool_Exp>;
  _or?: InputMaybe<Array<VerificationTokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "verificationTokens" */
type VerificationTokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
type VerificationTokens_Max_Fields = {
  __typename?: 'verificationTokens_max_fields';
  expires?: Maybe<Scalars['timestamp']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
type VerificationTokens_Min_Fields = {
  __typename?: 'verificationTokens_min_fields';
  expires?: Maybe<Scalars['timestamp']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verificationTokens" */
type VerificationTokens_Mutation_Response = {
  __typename?: 'verificationTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VerificationTokens>;
};

/** Ordering options when selecting data from "verificationTokens". */
type VerificationTokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** select columns of table "verificationTokens" */
enum VerificationTokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
}

/** input type for updating data in table "verificationTokens" */
type VerificationTokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamp']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

type DeleteAccountMutationVariables = Exact<{
  id: Scalars['String'];
}>;

type DeleteAccountMutation = {
  __typename?: 'mutation_root';
  delete_accounts_by_pk?: { __typename?: 'accounts'; id: string } | null;
};

type LinkAccountMutationVariables = Exact<{
  account: Accounts_Insert_Input;
}>;

type LinkAccountMutation = {
  __typename?: 'mutation_root';
  insert_accounts_one?: {
    __typename?: 'accounts';
    userId: string;
    id: string;
    provider: string;
    providerAccountId: string;
    type: string;
  } | null;
};

type AccountFieldsFragment = {
  __typename?: 'accounts';
  id: string;
  provider: string;
  providerAccountId: string;
  type: string;
};

type CreateSessionMutationVariables = Exact<{
  session: Sessions_Insert_Input;
}>;

type CreateSessionMutation = {
  __typename?: 'mutation_root';
  insert_sessions_one?: {
    __typename?: 'sessions';
    id: string;
    userId: string;
    expires?: any | null;
    sessionToken: string;
  } | null;
};

type GetSessionAndUserQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;

type GetSessionAndUserQuery = {
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

type CreateUserWithCredentialsMutationVariables = Exact<{
  password: Passwords_Insert_Input;
  user: Users_Insert_Input;
}>;

type CreateUserWithCredentialsMutation = {
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

type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  user: Users_Set_Input;
}>;

type UpdateUserMutation = {
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

type GetUserByAccountQueryVariables = Exact<{
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;

type GetUserByAccountQuery = {
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

type CreateUserMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;

type CreateUserMutation = {
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

type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

type GetUserQuery = {
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

type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

type GetUserByEmailQuery = {
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

type GetUsersAndAccountByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

type GetUsersAndAccountByEmailQuery = {
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

type UserAndAccountFieldsFragment = {
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

type UserFieldsFragment = {
  __typename?: 'users';
  email?: string | null;
  emailVerified?: any | null;
  id: string;
  image?: string | null;
  name?: string | null;
};

type CreateVerificationTokenMutationVariables = Exact<{
  verificationToken: VerificationTokens_Insert_Input;
}>;

type CreateVerificationTokenMutation = {
  __typename?: 'mutation_root';
  insert_verificationTokens_one?: {
    __typename?: 'verificationTokens';
    identifier: string;
    expires: any;
    token: string;
  } | null;
};

type GetVerificationTokenQueryVariables = Exact<{
  token: Scalars['String'];
}>;

type GetVerificationTokenQuery = {
  __typename?: 'query_root';
  verificationTokens: Array<{
    __typename?: 'verificationTokens';
    identifier: string;
    expires: any;
    token: string;
  }>;
};

type DeleteVerificationTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;

type DeleteVerificationTokenMutation = {
  __typename?: 'mutation_root';
  delete_verificationTokens?: {
    __typename?: 'verificationTokens_mutation_response';
    affected_rows: number;
  } | null;
};

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
    mutation DeleteAccount($id: String!) {
  delete_accounts_by_pk(id: $id) {
    id
  }
}
    `;
const LinkAccountDocument = `
    mutation LinkAccount($account: accounts_insert_input!) {
  insert_accounts_one(object: $account) {
    ...AccountFields
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
    ...UserAndAccountFields
  }
}
    ${UserAndAccountFieldsFragmentDoc}`;
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
      );
    },
    LinkAccount(
      variables: LinkAccountMutationVariables,
      options?: C
    ): Promise<LinkAccountMutation> {
      return requester<LinkAccountMutation, LinkAccountMutationVariables>(
        LinkAccountDocument,
        variables,
        options
      );
    },
    CreateSession(
      variables: CreateSessionMutationVariables,
      options?: C
    ): Promise<CreateSessionMutation> {
      return requester<CreateSessionMutation, CreateSessionMutationVariables>(
        CreateSessionDocument,
        variables,
        options
      );
    },
    GetSessionAndUser(
      variables: GetSessionAndUserQueryVariables,
      options?: C
    ): Promise<GetSessionAndUserQuery> {
      return requester<GetSessionAndUserQuery, GetSessionAndUserQueryVariables>(
        GetSessionAndUserDocument,
        variables,
        options
      );
    },
    CreateUserWithCredentials(
      variables: CreateUserWithCredentialsMutationVariables,
      options?: C
    ): Promise<CreateUserWithCredentialsMutation> {
      return requester<
        CreateUserWithCredentialsMutation,
        CreateUserWithCredentialsMutationVariables
      >(CreateUserWithCredentialsDocument, variables, options);
    },
    UpdateUser(
      variables: UpdateUserMutationVariables,
      options?: C
    ): Promise<UpdateUserMutation> {
      return requester<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        variables,
        options
      );
    },
    GetUserByAccount(
      variables: GetUserByAccountQueryVariables,
      options?: C
    ): Promise<GetUserByAccountQuery> {
      return requester<GetUserByAccountQuery, GetUserByAccountQueryVariables>(
        GetUserByAccountDocument,
        variables,
        options
      );
    },
    CreateUser(
      variables: CreateUserMutationVariables,
      options?: C
    ): Promise<CreateUserMutation> {
      return requester<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        variables,
        options
      );
    },
    GetUser(variables: GetUserQueryVariables, options?: C): Promise<GetUserQuery> {
      return requester<GetUserQuery, GetUserQueryVariables>(
        GetUserDocument,
        variables,
        options
      );
    },
    GetUserByEmail(
      variables: GetUserByEmailQueryVariables,
      options?: C
    ): Promise<GetUserByEmailQuery> {
      return requester<GetUserByEmailQuery, GetUserByEmailQueryVariables>(
        GetUserByEmailDocument,
        variables,
        options
      );
    },
    GetUsersAndAccountByEmail(
      variables: GetUsersAndAccountByEmailQueryVariables,
      options?: C
    ): Promise<GetUsersAndAccountByEmailQuery> {
      return requester<
        GetUsersAndAccountByEmailQuery,
        GetUsersAndAccountByEmailQueryVariables
      >(GetUsersAndAccountByEmailDocument, variables, options);
    },
    CreateVerificationToken(
      variables: CreateVerificationTokenMutationVariables,
      options?: C
    ): Promise<CreateVerificationTokenMutation> {
      return requester<
        CreateVerificationTokenMutation,
        CreateVerificationTokenMutationVariables
      >(CreateVerificationTokenDocument, variables, options);
    },
    GetVerificationToken(
      variables: GetVerificationTokenQueryVariables,
      options?: C
    ): Promise<GetVerificationTokenQuery> {
      return requester<GetVerificationTokenQuery, GetVerificationTokenQueryVariables>(
        GetVerificationTokenDocument,
        variables,
        options
      );
    },
    DeleteVerificationToken(
      variables: DeleteVerificationTokenMutationVariables,
      options?: C
    ): Promise<DeleteVerificationTokenMutation> {
      return requester<
        DeleteVerificationTokenMutation,
        DeleteVerificationTokenMutationVariables
      >(DeleteVerificationTokenDocument, variables, options);
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
import { fetchDataAdmin } from '@governance/hasura-fetcher';

export const adminSdk = getSdk(fetchDataAdmin());
