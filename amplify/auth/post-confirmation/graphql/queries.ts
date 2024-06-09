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
