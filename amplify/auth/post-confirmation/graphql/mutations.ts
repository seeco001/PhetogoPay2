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
` as GeneratedMutation<
  APITypes.CreateCreditAccountInfoMutationVariables,
  APITypes.CreateCreditAccountInfoMutation
>;
export const createCreditTransaction = /* GraphQL */ `mutation CreateCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: CreateCreditTransactionInput!
) {
  createCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCreditTransactionMutationVariables,
  APITypes.CreateCreditTransactionMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCreditAccountInfoMutationVariables,
  APITypes.DeleteCreditAccountInfoMutation
>;
export const deleteCreditTransaction = /* GraphQL */ `mutation DeleteCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: DeleteCreditTransactionInput!
) {
  deleteCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCreditTransactionMutationVariables,
  APITypes.DeleteCreditTransactionMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCreditAccountInfoMutationVariables,
  APITypes.UpdateCreditAccountInfoMutation
>;
export const updateCreditTransaction = /* GraphQL */ `mutation UpdateCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: UpdateCreditTransactionInput!
) {
  updateCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCreditTransactionMutationVariables,
  APITypes.UpdateCreditTransactionMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
