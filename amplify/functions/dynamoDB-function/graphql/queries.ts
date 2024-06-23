/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCreditAccountInfo = /* GraphQL */ `query GetCreditAccountInfo($id: ID!) {
  getCreditAccountInfo(id: $id) {
    accountStatus
    availableCredit
    balanceOwing
    createdAt
    creditAccount
    creditAccountId
    creditLimit
    dueDate
    id
    minimumDue
    monthsDefault
    monthsPaid
    owner
    updatedAt
    userProfile {
      accountOwner
      address
      contacts
      createdAt
      email
      govId
      id
      incomeType
      localExpense
      name
      owner
      signDeclaration
      surname
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCreditAccountInfoQueryVariables,
  APITypes.GetCreditAccountInfoQuery
>;
export const getCreditTransaction = /* GraphQL */ `query GetCreditTransaction($id: ID!) {
  getCreditTransaction(id: $id) {
    activeProfile {
      accountOwner
      address
      contacts
      createdAt
      email
      govId
      id
      incomeType
      localExpense
      name
      owner
      signDeclaration
      surname
      updatedAt
      __typename
    }
    amount
    createdAt
    creditTransactionId
    fromAccount
    id
    owner
    providerName
    providerType
    transType
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCreditTransactionQueryVariables,
  APITypes.GetCreditTransactionQuery
>;
export const getNewAccounts = /* GraphQL */ `query GetNewAccounts($id: ID!) {
  getNewAccounts(id: $id) {
    createdAt
    creditAccount
    govId
    id
    sub
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNewAccountsQueryVariables,
  APITypes.GetNewAccountsQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    accountOwner
    activeCreditAccountInfo {
      accountStatus
      availableCredit
      balanceOwing
      createdAt
      creditAccount
      creditAccountId
      creditLimit
      dueDate
      id
      minimumDue
      monthsDefault
      monthsPaid
      owner
      updatedAt
      __typename
    }
    address
    contacts
    createdAt
    creditTransaction {
      nextToken
      __typename
    }
    email
    govId
    id
    incomeType
    localExpense
    name
    owner
    signDeclaration
    surname
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listCreditAccountInfos = /* GraphQL */ `query ListCreditAccountInfos(
  $filter: ModelCreditAccountInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreditAccountInfos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      accountStatus
      availableCredit
      balanceOwing
      createdAt
      creditAccount
      creditAccountId
      creditLimit
      dueDate
      id
      minimumDue
      monthsDefault
      monthsPaid
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCreditAccountInfosQueryVariables,
  APITypes.ListCreditAccountInfosQuery
>;
export const listCreditTransactions = /* GraphQL */ `query ListCreditTransactions(
  $filter: ModelCreditTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreditTransactions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      amount
      createdAt
      creditTransactionId
      fromAccount
      id
      owner
      providerName
      providerType
      transType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCreditTransactionsQueryVariables,
  APITypes.ListCreditTransactionsQuery
>;
export const listNewAccounts = /* GraphQL */ `query ListNewAccounts(
  $filter: ModelNewAccountsFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      creditAccount
      govId
      id
      sub
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNewAccountsQueryVariables,
  APITypes.ListNewAccountsQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      accountOwner
      address
      contacts
      createdAt
      email
      govId
      id
      incomeType
      localExpense
      name
      owner
      signDeclaration
      surname
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
