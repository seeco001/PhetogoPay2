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
  $owner: String
) {
  onCreateCreditAccountInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCreditAccountInfoSubscriptionVariables,
  APITypes.OnCreateCreditAccountInfoSubscription
>;
export const onCreateCreditTransaction = /* GraphQL */ `subscription OnCreateCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $owner: String
) {
  onCreateCreditTransaction(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCreditTransactionSubscriptionVariables,
  APITypes.OnCreateCreditTransactionSubscription
>;
export const onCreateNewAccounts = /* GraphQL */ `subscription OnCreateNewAccounts(
  $filter: ModelSubscriptionNewAccountsFilterInput
) {
  onCreateNewAccounts(filter: $filter) {
    createdAt
    creditAccount
    govId
    id
    sub
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNewAccountsSubscriptionVariables,
  APITypes.OnCreateNewAccountsSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteCreditAccountInfo = /* GraphQL */ `subscription OnDeleteCreditAccountInfo(
  $filter: ModelSubscriptionCreditAccountInfoFilterInput
  $owner: String
) {
  onDeleteCreditAccountInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCreditAccountInfoSubscriptionVariables,
  APITypes.OnDeleteCreditAccountInfoSubscription
>;
export const onDeleteCreditTransaction = /* GraphQL */ `subscription OnDeleteCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $owner: String
) {
  onDeleteCreditTransaction(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCreditTransactionSubscriptionVariables,
  APITypes.OnDeleteCreditTransactionSubscription
>;
export const onDeleteNewAccounts = /* GraphQL */ `subscription OnDeleteNewAccounts(
  $filter: ModelSubscriptionNewAccountsFilterInput
) {
  onDeleteNewAccounts(filter: $filter) {
    createdAt
    creditAccount
    govId
    id
    sub
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNewAccountsSubscriptionVariables,
  APITypes.OnDeleteNewAccountsSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateCreditAccountInfo = /* GraphQL */ `subscription OnUpdateCreditAccountInfo(
  $filter: ModelSubscriptionCreditAccountInfoFilterInput
  $owner: String
) {
  onUpdateCreditAccountInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCreditAccountInfoSubscriptionVariables,
  APITypes.OnUpdateCreditAccountInfoSubscription
>;
export const onUpdateCreditTransaction = /* GraphQL */ `subscription OnUpdateCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $owner: String
) {
  onUpdateCreditTransaction(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCreditTransactionSubscriptionVariables,
  APITypes.OnUpdateCreditTransactionSubscription
>;
export const onUpdateNewAccounts = /* GraphQL */ `subscription OnUpdateNewAccounts(
  $filter: ModelSubscriptionNewAccountsFilterInput
) {
  onUpdateNewAccounts(filter: $filter) {
    createdAt
    creditAccount
    govId
    id
    sub
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNewAccountsSubscriptionVariables,
  APITypes.OnUpdateNewAccountsSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
