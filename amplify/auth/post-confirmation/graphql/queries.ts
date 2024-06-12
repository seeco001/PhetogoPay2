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
    profileOwner
    updatedAt
    userProfile {
      address
      contacts
      createdAt
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
      address
      contacts
      createdAt
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
      __typename
    }
    amount
    createdAt
    creditTransactionId
    fromAccount
    id
    profileOwner
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
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
      profileOwner
      updatedAt
      __typename
    }
    activeWalletAccountInfo {
      accountStatus
      availableBalance
      createdAt
      id
      profileOwner
      updatedAt
      walletAccount
      walletAccountId
      __typename
    }
    address
    contacts
    createdAt
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
    walletTransaction {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const getWalletAccountInfo = /* GraphQL */ `query GetWalletAccountInfo($id: ID!) {
  getWalletAccountInfo(id: $id) {
    accountStatus
    availableBalance
    createdAt
    id
    profileOwner
    updatedAt
    userProfile {
      address
      contacts
      createdAt
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
      __typename
    }
    walletAccount
    walletAccountId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWalletAccountInfoQueryVariables,
  APITypes.GetWalletAccountInfoQuery
>;
export const getWalletTransaction = /* GraphQL */ `query GetWalletTransaction($id: ID!) {
  getWalletTransaction(id: $id) {
    activeProfile {
      address
      contacts
      createdAt
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
      __typename
    }
    amount
    createdAt
    fromAccount
    id
    profileOwner
    providerName
    providerType
    transType
    updatedAt
    walletTransactionId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWalletTransactionQueryVariables,
  APITypes.GetWalletTransactionQuery
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
      creditTransactionId
      fromAccount
      id
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
export const listWalletAccountInfos = /* GraphQL */ `query ListWalletAccountInfos(
  $filter: ModelWalletAccountInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listWalletAccountInfos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      accountStatus
      availableBalance
      createdAt
      id
      profileOwner
      updatedAt
      walletAccount
      walletAccountId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWalletAccountInfosQueryVariables,
  APITypes.ListWalletAccountInfosQuery
>;
export const listWalletTransactions = /* GraphQL */ `query ListWalletTransactions(
  $filter: ModelWalletTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listWalletTransactions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      amount
      createdAt
      fromAccount
      id
      profileOwner
      providerName
      providerType
      transType
      updatedAt
      walletTransactionId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWalletTransactionsQueryVariables,
  APITypes.ListWalletTransactionsQuery
>;
