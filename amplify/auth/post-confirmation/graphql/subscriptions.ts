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
` as GeneratedSubscription<
  APITypes.OnCreateCreditAccountInfoSubscriptionVariables,
  APITypes.OnCreateCreditAccountInfoSubscription
>;
export const onCreateCreditTransaction = /* GraphQL */ `subscription OnCreateCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $profileOwner: String
) {
  onCreateCreditTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCreditTransactionSubscriptionVariables,
  APITypes.OnCreateCreditTransactionSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onCreateWalletAccountInfo = /* GraphQL */ `subscription OnCreateWalletAccountInfo(
  $filter: ModelSubscriptionWalletAccountInfoFilterInput
  $profileOwner: String
) {
  onCreateWalletAccountInfo(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWalletAccountInfoSubscriptionVariables,
  APITypes.OnCreateWalletAccountInfoSubscription
>;
export const onCreateWalletTransaction = /* GraphQL */ `subscription OnCreateWalletTransaction(
  $filter: ModelSubscriptionWalletTransactionFilterInput
  $profileOwner: String
) {
  onCreateWalletTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWalletTransactionSubscriptionVariables,
  APITypes.OnCreateWalletTransactionSubscription
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
` as GeneratedSubscription<
  APITypes.OnDeleteCreditAccountInfoSubscriptionVariables,
  APITypes.OnDeleteCreditAccountInfoSubscription
>;
export const onDeleteCreditTransaction = /* GraphQL */ `subscription OnDeleteCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $profileOwner: String
) {
  onDeleteCreditTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCreditTransactionSubscriptionVariables,
  APITypes.OnDeleteCreditTransactionSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onDeleteWalletAccountInfo = /* GraphQL */ `subscription OnDeleteWalletAccountInfo(
  $filter: ModelSubscriptionWalletAccountInfoFilterInput
  $profileOwner: String
) {
  onDeleteWalletAccountInfo(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWalletAccountInfoSubscriptionVariables,
  APITypes.OnDeleteWalletAccountInfoSubscription
>;
export const onDeleteWalletTransaction = /* GraphQL */ `subscription OnDeleteWalletTransaction(
  $filter: ModelSubscriptionWalletTransactionFilterInput
  $profileOwner: String
) {
  onDeleteWalletTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWalletTransactionSubscriptionVariables,
  APITypes.OnDeleteWalletTransactionSubscription
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
` as GeneratedSubscription<
  APITypes.OnUpdateCreditAccountInfoSubscriptionVariables,
  APITypes.OnUpdateCreditAccountInfoSubscription
>;
export const onUpdateCreditTransaction = /* GraphQL */ `subscription OnUpdateCreditTransaction(
  $filter: ModelSubscriptionCreditTransactionFilterInput
  $profileOwner: String
) {
  onUpdateCreditTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCreditTransactionSubscriptionVariables,
  APITypes.OnUpdateCreditTransactionSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onUpdateWalletAccountInfo = /* GraphQL */ `subscription OnUpdateWalletAccountInfo(
  $filter: ModelSubscriptionWalletAccountInfoFilterInput
  $profileOwner: String
) {
  onUpdateWalletAccountInfo(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWalletAccountInfoSubscriptionVariables,
  APITypes.OnUpdateWalletAccountInfoSubscription
>;
export const onUpdateWalletTransaction = /* GraphQL */ `subscription OnUpdateWalletTransaction(
  $filter: ModelSubscriptionWalletTransactionFilterInput
  $profileOwner: String
) {
  onUpdateWalletTransaction(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWalletTransactionSubscriptionVariables,
  APITypes.OnUpdateWalletTransactionSubscription
>;
