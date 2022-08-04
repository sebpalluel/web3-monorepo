import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
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

export type JwtToken = {
  __typename?: 'JwtToken';
  jwt: Scalars['String'];
};

export type SignoutOutput = {
  __typename?: 'SignoutOutput';
  ok: Scalars['Boolean'];
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "passwords" */
  insert_passwords?: Maybe<Passwords_Mutation_Response>;
  /** insert a single row into the table: "passwords" */
  insert_passwords_one?: Maybe<Passwords>;
  signout?: Maybe<SignoutOutput>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
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
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
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
  DescNullsLast = 'desc_nulls_last'
};

/** columns and relationships of "passwords" */
export type Passwords = {
  __typename?: 'passwords';
  attempts: Scalars['Int'];
  hash: Scalars['String'];
  iterations: Scalars['Int'];
  salt: Scalars['String'];
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
};

/** unique or primary key constraints on table "passwords" */
export const enum Passwords_Constraint {
  /** unique or primary key constraint on columns "hash" */
  PasswordsPkey = 'passwords_pkey',
  /** unique or primary key constraint on columns "salt" */
  PasswordsSaltKey = 'passwords_salt_key'
};

/** input type for inserting data into table "passwords" */
export type Passwords_Insert_Input = {
  hash?: InputMaybe<Scalars['String']>;
  iterations?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "passwords" */
export type Passwords_Max_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "passwords" */
export type Passwords_Min_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
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
  Salt = 'salt'
};

/** order by stddev() on columns of table "passwords" */
export type Passwords_Stddev_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "passwords" */
export type Passwords_Stddev_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "passwords" */
export type Passwords_Stddev_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "passwords" */
export type Passwords_Sum_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** placeholder for update columns of table "passwords" (current role has no relevant permissions) */
export const enum Passwords_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
};

/** order by var_pop() on columns of table "passwords" */
export type Passwords_Var_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "passwords" */
export type Passwords_Var_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "passwords" */
export type Passwords_Variance_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  passwords: Array<Passwords>;
  /** fetch data from the table: "passwords" using primary key columns */
  passwords_by_pk?: Maybe<Passwords>;
  refreshJwtToken: JwtToken;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};


export type Query_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};


export type Query_RootRefreshJwtTokenArgs = {
  fingerprintHash: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  passwords: Array<Passwords>;
  /** fetch data from the table: "passwords" using primary key columns */
  passwords_by_pk?: Maybe<Passwords>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};


export type Subscription_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
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
};


/** columns and relationships of "users" */
export type UsersPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamp_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  passwords?: InputMaybe<Passwords_Bool_Exp>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  passwords_aggregate?: InputMaybe<Passwords_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export const enum Users_Select_Column {
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
  Password = 'password'
};

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MyUserFieldsFragment = { __typename?: 'users', id: string, name?: string | null, email?: string | null, emailVerified?: any | null, image?: string | null, password?: string | null };

export type PasswordFieldsFragment = { __typename?: 'passwords', attempts: number, hash: string, iterations: number, salt: string };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name?: string | null, email?: string | null, emailVerified?: any | null, image?: string | null }> };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name?: string | null, email?: string | null, emailVerified?: any | null, image?: string | null }> };

export type GetMyUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetMyUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name?: string | null, email?: string | null, emailVerified?: any | null, image?: string | null, password?: string | null }> };

export type GetMyUserAndPasswordByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetMyUserAndPasswordByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name?: string | null, email?: string | null, emailVerified?: any | null, image?: string | null, password?: string | null, passwords: Array<{ __typename?: 'passwords', attempts: number, hash: string, iterations: number, salt: string }> }> };

export type UserFieldsFragment = { __typename?: 'users', id: string, name?: string | null, email?: string | null, emailVerified?: any | null, image?: string | null };

export const MyUserFieldsFragmentDoc = `
    fragment MyUserFields on users {
  id
  name
  email
  emailVerified
  image
  password
}
    `;
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
  id
  name
  email
  emailVerified
  image
}
    `;
export const GetUserDocument = `
    query getUser($id: String!) {
  users(where: {id: {_eq: $id}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      ['getUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserDocument, variables),
      options
    );

useGetUserQuery.getKey = (variables: GetUserQueryVariables) => ['getUser', variables];
;

useGetUserQuery.fetcher = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables: GetUserQueryVariables) => fetcher<GetUserQuery, GetUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserDocument, variables);
export const GetUserByEmailDocument = `
    query getUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useGetUserByEmailQuery = <
      TData = GetUserByEmailQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetUserByEmailQueryVariables,
      options?: UseQueryOptions<GetUserByEmailQuery, TError, TData>
    ) =>
    useQuery<GetUserByEmailQuery, TError, TData>(
      ['getUserByEmail', variables],
      fetcher<GetUserByEmailQuery, GetUserByEmailQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserByEmailDocument, variables),
      options
    );

useGetUserByEmailQuery.getKey = (variables: GetUserByEmailQueryVariables) => ['getUserByEmail', variables];
;

useGetUserByEmailQuery.fetcher = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables: GetUserByEmailQueryVariables) => fetcher<GetUserByEmailQuery, GetUserByEmailQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserByEmailDocument, variables);
export const GetMyUserByEmailDocument = `
    query getMyUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...MyUserFields
  }
}
    ${MyUserFieldsFragmentDoc}`;
export const useGetMyUserByEmailQuery = <
      TData = GetMyUserByEmailQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetMyUserByEmailQueryVariables,
      options?: UseQueryOptions<GetMyUserByEmailQuery, TError, TData>
    ) =>
    useQuery<GetMyUserByEmailQuery, TError, TData>(
      ['getMyUserByEmail', variables],
      fetcher<GetMyUserByEmailQuery, GetMyUserByEmailQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetMyUserByEmailDocument, variables),
      options
    );

useGetMyUserByEmailQuery.getKey = (variables: GetMyUserByEmailQueryVariables) => ['getMyUserByEmail', variables];
;

useGetMyUserByEmailQuery.fetcher = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables: GetMyUserByEmailQueryVariables) => fetcher<GetMyUserByEmailQuery, GetMyUserByEmailQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetMyUserByEmailDocument, variables);
export const GetMyUserAndPasswordByEmailDocument = `
    query getMyUserAndPasswordByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...MyUserFields
    passwords {
      ...PasswordFields
    }
  }
}
    ${MyUserFieldsFragmentDoc}
${PasswordFieldsFragmentDoc}`;
export const useGetMyUserAndPasswordByEmailQuery = <
      TData = GetMyUserAndPasswordByEmailQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetMyUserAndPasswordByEmailQueryVariables,
      options?: UseQueryOptions<GetMyUserAndPasswordByEmailQuery, TError, TData>
    ) =>
    useQuery<GetMyUserAndPasswordByEmailQuery, TError, TData>(
      ['getMyUserAndPasswordByEmail', variables],
      fetcher<GetMyUserAndPasswordByEmailQuery, GetMyUserAndPasswordByEmailQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetMyUserAndPasswordByEmailDocument, variables),
      options
    );

useGetMyUserAndPasswordByEmailQuery.getKey = (variables: GetMyUserAndPasswordByEmailQueryVariables) => ['getMyUserAndPasswordByEmail', variables];
;

useGetMyUserAndPasswordByEmailQuery.fetcher = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables: GetMyUserAndPasswordByEmailQueryVariables) => fetcher<GetMyUserAndPasswordByEmailQuery, GetMyUserAndPasswordByEmailQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetMyUserAndPasswordByEmailDocument, variables);