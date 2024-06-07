/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCreditAccountInfo = /* GraphQL */ `subscription OnCreateCreditAccountInfo(
  $filter: ModelSubscriptionCreditAccountInfoFilterInput
  $profileOwner: String
) {
  onCreateCreditAccountInfo(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCreditAccountInfoSubscriptionVariables,
  APITypes.OnCreateCreditAccountInfoSubscription
>;
export const onCreateCreditTransaction = /* GraphQL */ `subscription OnCreateCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $profileOwner: String
) {
  onCreateCreditTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCreditTransactionSubscriptionVariables,
  APITypes.OnCreateCreditTransactionSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteCreditAccountInfo = /* GraphQL */ `subscription OnDeleteCreditAccountInfo(
  $filter: ModelSubscriptionCreditAccountInfoFilterInput
  $profileOwner: String
) {
  onDeleteCreditAccountInfo(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCreditAccountInfoSubscriptionVariables,
  APITypes.OnDeleteCreditAccountInfoSubscription
>;
export const onDeleteCreditTransaction = /* GraphQL */ `subscription OnDeleteCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $profileOwner: String
) {
  onDeleteCreditTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCreditTransactionSubscriptionVariables,
  APITypes.OnDeleteCreditTransactionSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateCreditAccountInfo = /* GraphQL */ `subscription OnUpdateCreditAccountInfo(
  $filter: ModelSubscriptionCreditAccountInfoFilterInput
  $profileOwner: String
) {
  onUpdateCreditAccountInfo(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCreditAccountInfoSubscriptionVariables,
  APITypes.OnUpdateCreditAccountInfoSubscription
>;
export const onUpdateCreditTransaction = /* GraphQL */ `subscription OnUpdateCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $profileOwner: String
) {
  onUpdateCreditTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCreditTransactionSubscriptionVariables,
  APITypes.OnUpdateCreditTransactionSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
