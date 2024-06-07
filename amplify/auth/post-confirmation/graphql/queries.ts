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
    creditLimit
    dueDate
    id
    minimumDue
    monthsDefault
    monthsPaid
    profileId
    profileOwner
    updatedAt
    userProfiles {
      address
      contacts
      createdAt
      creditAccount
      disIncome
      email
      govId
      id
      localExpense
      name
      netIncome
      profileOwner
      signDeclaration
      surname
      updatedAt
      walletAccount
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
    amount
    createdAt
    fromAccount
    id
    profileId
    profileOwner
    providerName
    providerType
    transType
    updatedAt
    userProfiles {
      address
      contacts
      createdAt
      creditAccount
      disIncome
      email
      govId
      id
      localExpense
      name
      netIncome
      profileOwner
      signDeclaration
      surname
      updatedAt
      walletAccount
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCreditTransactionQueryVariables,
  APITypes.GetCreditTransactionQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    address
    contacts
    createdAt
    creditAccount
    creditAccountInfo {
      accountStatus
      availableCredit
      balanceOwing
      createdAt
      creditAccount
      creditLimit
      dueDate
      id
      minimumDue
      monthsDefault
      monthsPaid
      profileId
      profileOwner
      updatedAt
      __typename
    }
    creditTransaction {
      nextToken
      __typename
    }
    disIncome
    email
    govId
    id
    localExpense
    name
    netIncome
    profileOwner
    signDeclaration
    surname
    updatedAt
    walletAccount
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
      creditLimit
      dueDate
      id
      minimumDue
      monthsDefault
      monthsPaid
      profileId
      profileOwner
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
      fromAccount
      id
      profileId
      profileOwner
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
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      address
      contacts
      createdAt
      creditAccount
      disIncome
      email
      govId
      id
      localExpense
      name
      netIncome
      profileOwner
      signDeclaration
      surname
      updatedAt
      walletAccount
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
