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
export const createCreditTransaction = /* GraphQL */ `mutation CreateCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: CreateCreditTransactionInput!
) {
  createCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCreditTransactionMutationVariables,
  APITypes.CreateCreditTransactionMutation
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const createWalletAccountInfo = /* GraphQL */ `mutation CreateWalletAccountInfo(
  $condition: ModelWalletAccountInfoConditionInput
  $input: CreateWalletAccountInfoInput!
) {
  createWalletAccountInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateWalletAccountInfoMutationVariables,
  APITypes.CreateWalletAccountInfoMutation
>;
export const createWalletTransaction = /* GraphQL */ `mutation CreateWalletTransaction(
  $condition: ModelWalletTransactionConditionInput
  $input: CreateWalletTransactionInput!
) {
  createWalletTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateWalletTransactionMutationVariables,
  APITypes.CreateWalletTransactionMutation
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
export const deleteCreditTransaction = /* GraphQL */ `mutation DeleteCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: DeleteCreditTransactionInput!
) {
  deleteCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCreditTransactionMutationVariables,
  APITypes.DeleteCreditTransactionMutation
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const deleteWalletAccountInfo = /* GraphQL */ `mutation DeleteWalletAccountInfo(
  $condition: ModelWalletAccountInfoConditionInput
  $input: DeleteWalletAccountInfoInput!
) {
  deleteWalletAccountInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteWalletAccountInfoMutationVariables,
  APITypes.DeleteWalletAccountInfoMutation
>;
export const deleteWalletTransaction = /* GraphQL */ `mutation DeleteWalletTransaction(
  $condition: ModelWalletTransactionConditionInput
  $input: DeleteWalletTransactionInput!
) {
  deleteWalletTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteWalletTransactionMutationVariables,
  APITypes.DeleteWalletTransactionMutation
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
export const updateCreditTransaction = /* GraphQL */ `mutation UpdateCreditTransaction(
  $condition: ModelCreditTransactionConditionInput
  $input: UpdateCreditTransactionInput!
) {
  updateCreditTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCreditTransactionMutationVariables,
  APITypes.UpdateCreditTransactionMutation
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const updateWalletAccountInfo = /* GraphQL */ `mutation UpdateWalletAccountInfo(
  $condition: ModelWalletAccountInfoConditionInput
  $input: UpdateWalletAccountInfoInput!
) {
  updateWalletAccountInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateWalletAccountInfoMutationVariables,
  APITypes.UpdateWalletAccountInfoMutation
>;
export const updateWalletTransaction = /* GraphQL */ `mutation UpdateWalletTransaction(
  $condition: ModelWalletTransactionConditionInput
  $input: UpdateWalletTransactionInput!
) {
  updateWalletTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateWalletTransactionMutationVariables,
  APITypes.UpdateWalletTransactionMutation
>;
