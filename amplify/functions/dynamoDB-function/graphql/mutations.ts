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
` as GeneratedMutation<
  APITypes.CreateCreditAccountInfoMutationVariables,
  APITypes.CreateCreditAccountInfoMutation
>;
export const createCreditTransaction = /* GraphQL */ `mutation CreateCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: CreateCreditTransactionInput!
) {
  createCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCreditTransactionMutationVariables,
  APITypes.CreateCreditTransactionMutation
>;
export const createNewAccounts = /* GraphQL */ `mutation CreateNewAccounts(
  $condition: ModelNewAccountsConditionInput
  $input: CreateNewAccountsInput!
) {
  createNewAccounts(condition: $condition, input: $input) {
    createdAt
    creditAccount
    govId
    id
    sub
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNewAccountsMutationVariables,
  APITypes.CreateNewAccountsMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCreditAccountInfoMutationVariables,
  APITypes.DeleteCreditAccountInfoMutation
>;
export const deleteCreditTransaction = /* GraphQL */ `mutation DeleteCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: DeleteCreditTransactionInput!
) {
  deleteCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCreditTransactionMutationVariables,
  APITypes.DeleteCreditTransactionMutation
>;
export const deleteNewAccounts = /* GraphQL */ `mutation DeleteNewAccounts(
  $condition: ModelNewAccountsConditionInput
  $input: DeleteNewAccountsInput!
) {
  deleteNewAccounts(condition: $condition, input: $input) {
    createdAt
    creditAccount
    govId
    id
    sub
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNewAccountsMutationVariables,
  APITypes.DeleteNewAccountsMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCreditAccountInfoMutationVariables,
  APITypes.UpdateCreditAccountInfoMutation
>;
export const updateCreditTransaction = /* GraphQL */ `mutation UpdateCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: UpdateCreditTransactionInput!
) {
  updateCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCreditTransactionMutationVariables,
  APITypes.UpdateCreditTransactionMutation
>;
export const updateNewAccounts = /* GraphQL */ `mutation UpdateNewAccounts(
  $condition: ModelNewAccountsConditionInput
  $input: UpdateNewAccountsInput!
) {
  updateNewAccounts(condition: $condition, input: $input) {
    createdAt
    creditAccount
    govId
    id
    sub
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNewAccountsMutationVariables,
  APITypes.UpdateNewAccountsMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
