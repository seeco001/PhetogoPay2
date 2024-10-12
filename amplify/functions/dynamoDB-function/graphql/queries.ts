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
    owner
    transactions {
      nextToken
      __typename
    }
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
    userProfileId
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
    creditAccount {
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
      owner
      updatedAt
      userProfileId
      __typename
    }
    creditAccountId
    fromAccount
    id
    newBalance
    owner
    serviceProvider {
      address
      createdAt
      id
      operatingTimes
      providerName
      serviceType
      storeId
      telephone
      updatedAt
      __typename
    }
    serviceProviderId
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
export const getServiceProviders = /* GraphQL */ `query GetServiceProviders($id: ID!) {
  getServiceProviders(id: $id) {
    address
    createdAt
    id
    operatingTimes
    providerName
    serviceType
    storeId
    telephone
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceProvidersQueryVariables,
  APITypes.GetServiceProvidersQuery
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
      creditLimit
      dueDate
      id
      minimumDue
      monthsDefault
      monthsPaid
      owner
      updatedAt
      userProfileId
      __typename
    }
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
      owner
      updatedAt
      userProfileId
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
      creditAccountId
      fromAccount
      id
      newBalance
      owner
      serviceProviderId
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
export const listServiceProviders = /* GraphQL */ `query ListServiceProviders(
  $filter: ModelServiceProvidersFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      address
      createdAt
      id
      operatingTimes
      providerName
      serviceType
      storeId
      telephone
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceProvidersQueryVariables,
  APITypes.ListServiceProvidersQuery
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
