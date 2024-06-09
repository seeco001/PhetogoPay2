/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCreditAccountInfo = /* GraphQL */ `mutation CreateCreditAccountInfo(
  $condition: ModelCreditAccountInfoConditionInput
  $input: CreateCreditAccountInfoInput!
) {
  createCreditAccountInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCreditAccountInfoMutationVariables,
  APITypes.CreateCreditAccountInfoMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteCreditAccountInfo = /* GraphQL */ `mutation DeleteCreditAccountInfo(
  $condition: ModelCreditAccountInfoConditionInput
  $input: DeleteCreditAccountInfoInput!
) {
  deleteCreditAccountInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCreditAccountInfoMutationVariables,
  APITypes.DeleteCreditAccountInfoMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateCreditAccountInfo = /* GraphQL */ `mutation UpdateCreditAccountInfo(
  $condition: ModelCreditAccountInfoConditionInput
  $input: UpdateCreditAccountInfoInput!
) {
  updateCreditAccountInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCreditAccountInfoMutationVariables,
  APITypes.UpdateCreditAccountInfoMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
