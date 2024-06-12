/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreditAccountInfo = {
  __typename: "CreditAccountInfo",
  accountStatus?: string | null,
  availableCredit?: number | null,
  balanceOwing?: number | null,
  createdAt: string,
  creditAccount?: string | null,
  creditAccountId?: string | null,
  creditLimit?: number | null,
  dueDate?: string | null,
  id: string,
  minimumDue?: number | null,
  monthsDefault?: string | null,
  monthsPaid?: string | null,
  profileOwner?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  activeCreditAccountInfo?: CreditAccountInfo | null,
  activeWalletAccountInfo?: WalletAccountInfo | null,
  address?: string | null,
  contacts?: string | null,
  createdAt: string,
  creditTransaction?: ModelCreditTransactionConnection | null,
  disIncome?: string | null,
  email?: string | null,
  govId?: string | null,
  id: string,
  localExpense?: string | null,
  name?: string | null,
  netIncome?: string | null,
  profileOwner?: string | null,
  signDeclaration?: string | null,
  surname?: string | null,
  updatedAt: string,
  walletTransaction?: ModelWalletTransactionConnection | null,
};

export type WalletAccountInfo = {
  __typename: "WalletAccountInfo",
  accountStatus?: string | null,
  availableBalance?: number | null,
  createdAt: string,
  id: string,
  profileOwner?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  walletAccount?: string | null,
  walletAccountId?: string | null,
};

export type ModelCreditTransactionConnection = {
  __typename: "ModelCreditTransactionConnection",
  items:  Array<CreditTransaction | null >,
  nextToken?: string | null,
};

export type CreditTransaction = {
  __typename: "CreditTransaction",
  activeProfile?: UserProfile | null,
  amount?: string | null,
  createdAt: string,
  creditTransactionId?: string | null,
  fromAccount?: string | null,
  id: string,
  profileOwner?: string | null,
  providerName?: string | null,
  providerType?: string | null,
  transType?: string | null,
  updatedAt: string,
};

export type ModelWalletTransactionConnection = {
  __typename: "ModelWalletTransactionConnection",
  items:  Array<WalletTransaction | null >,
  nextToken?: string | null,
};

export type WalletTransaction = {
  __typename: "WalletTransaction",
  activeProfile?: UserProfile | null,
  amount?: string | null,
  createdAt: string,
  fromAccount?: string | null,
  id: string,
  profileOwner?: string | null,
  providerName?: string | null,
  providerType?: string | null,
  transType?: string | null,
  updatedAt: string,
  walletTransactionId?: string | null,
};

export type ModelCreditAccountInfoFilterInput = {
  accountStatus?: ModelStringInput | null,
  and?: Array< ModelCreditAccountInfoFilterInput | null > | null,
  availableCredit?: ModelIntInput | null,
  balanceOwing?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  creditAccount?: ModelStringInput | null,
  creditAccountId?: ModelIDInput | null,
  creditLimit?: ModelIntInput | null,
  dueDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  minimumDue?: ModelIntInput | null,
  monthsDefault?: ModelStringInput | null,
  monthsPaid?: ModelStringInput | null,
  not?: ModelCreditAccountInfoFilterInput | null,
  or?: Array< ModelCreditAccountInfoFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelCreditAccountInfoConnection = {
  __typename: "ModelCreditAccountInfoConnection",
  items:  Array<CreditAccountInfo | null >,
  nextToken?: string | null,
};

export type ModelCreditTransactionFilterInput = {
  amount?: ModelStringInput | null,
  and?: Array< ModelCreditTransactionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  creditTransactionId?: ModelIDInput | null,
  fromAccount?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCreditTransactionFilterInput | null,
  or?: Array< ModelCreditTransactionFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  providerName?: ModelStringInput | null,
  providerType?: ModelStringInput | null,
  transType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  contacts?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  disIncome?: ModelStringInput | null,
  email?: ModelStringInput | null,
  govId?: ModelStringInput | null,
  id?: ModelIDInput | null,
  localExpense?: ModelStringInput | null,
  name?: ModelStringInput | null,
  netIncome?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  signDeclaration?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelWalletAccountInfoFilterInput = {
  accountStatus?: ModelStringInput | null,
  and?: Array< ModelWalletAccountInfoFilterInput | null > | null,
  availableBalance?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelWalletAccountInfoFilterInput | null,
  or?: Array< ModelWalletAccountInfoFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletAccount?: ModelStringInput | null,
  walletAccountId?: ModelIDInput | null,
};

export type ModelWalletAccountInfoConnection = {
  __typename: "ModelWalletAccountInfoConnection",
  items:  Array<WalletAccountInfo | null >,
  nextToken?: string | null,
};

export type ModelWalletTransactionFilterInput = {
  amount?: ModelStringInput | null,
  and?: Array< ModelWalletTransactionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  fromAccount?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelWalletTransactionFilterInput | null,
  or?: Array< ModelWalletTransactionFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  providerName?: ModelStringInput | null,
  providerType?: ModelStringInput | null,
  transType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletTransactionId?: ModelIDInput | null,
};

export type ModelCreditAccountInfoConditionInput = {
  accountStatus?: ModelStringInput | null,
  and?: Array< ModelCreditAccountInfoConditionInput | null > | null,
  availableCredit?: ModelIntInput | null,
  balanceOwing?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  creditAccount?: ModelStringInput | null,
  creditAccountId?: ModelIDInput | null,
  creditLimit?: ModelIntInput | null,
  dueDate?: ModelStringInput | null,
  minimumDue?: ModelIntInput | null,
  monthsDefault?: ModelStringInput | null,
  monthsPaid?: ModelStringInput | null,
  not?: ModelCreditAccountInfoConditionInput | null,
  or?: Array< ModelCreditAccountInfoConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCreditAccountInfoInput = {
  accountStatus?: string | null,
  availableCredit?: number | null,
  balanceOwing?: number | null,
  creditAccount?: string | null,
  creditAccountId?: string | null,
  creditLimit?: number | null,
  dueDate?: string | null,
  id?: string | null,
  minimumDue?: number | null,
  monthsDefault?: string | null,
  monthsPaid?: string | null,
};

export type ModelCreditTransactionConditionInput = {
  amount?: ModelStringInput | null,
  and?: Array< ModelCreditTransactionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  creditTransactionId?: ModelIDInput | null,
  fromAccount?: ModelStringInput | null,
  not?: ModelCreditTransactionConditionInput | null,
  or?: Array< ModelCreditTransactionConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  providerName?: ModelStringInput | null,
  providerType?: ModelStringInput | null,
  transType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCreditTransactionInput = {
  amount?: string | null,
  creditTransactionId?: string | null,
  fromAccount?: string | null,
  id?: string | null,
  providerName?: string | null,
  providerType?: string | null,
  transType?: string | null,
};

export type ModelUserProfileConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  contacts?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  disIncome?: ModelStringInput | null,
  email?: ModelStringInput | null,
  govId?: ModelStringInput | null,
  localExpense?: ModelStringInput | null,
  name?: ModelStringInput | null,
  netIncome?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  signDeclaration?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  address?: string | null,
  contacts?: string | null,
  disIncome?: string | null,
  email?: string | null,
  govId?: string | null,
  id?: string | null,
  localExpense?: string | null,
  name?: string | null,
  netIncome?: string | null,
  profileOwner?: string | null,
  signDeclaration?: string | null,
  surname?: string | null,
};

export type ModelWalletAccountInfoConditionInput = {
  accountStatus?: ModelStringInput | null,
  and?: Array< ModelWalletAccountInfoConditionInput | null > | null,
  availableBalance?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelWalletAccountInfoConditionInput | null,
  or?: Array< ModelWalletAccountInfoConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletAccount?: ModelStringInput | null,
  walletAccountId?: ModelIDInput | null,
};

export type CreateWalletAccountInfoInput = {
  accountStatus?: string | null,
  availableBalance?: number | null,
  id?: string | null,
  profileOwner?: string | null,
  walletAccount?: string | null,
  walletAccountId?: string | null,
};

export type ModelWalletTransactionConditionInput = {
  amount?: ModelStringInput | null,
  and?: Array< ModelWalletTransactionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  fromAccount?: ModelStringInput | null,
  not?: ModelWalletTransactionConditionInput | null,
  or?: Array< ModelWalletTransactionConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  providerName?: ModelStringInput | null,
  providerType?: ModelStringInput | null,
  transType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletTransactionId?: ModelIDInput | null,
};

export type CreateWalletTransactionInput = {
  amount?: string | null,
  fromAccount?: string | null,
  id?: string | null,
  providerName?: string | null,
  providerType?: string | null,
  transType?: string | null,
  walletTransactionId?: string | null,
};

export type DeleteCreditAccountInfoInput = {
  id: string,
};

export type DeleteCreditTransactionInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type DeleteWalletAccountInfoInput = {
  id: string,
};

export type DeleteWalletTransactionInput = {
  id: string,
};

export type UpdateCreditAccountInfoInput = {
  accountStatus?: string | null,
  availableCredit?: number | null,
  balanceOwing?: number | null,
  creditAccount?: string | null,
  creditAccountId?: string | null,
  creditLimit?: number | null,
  dueDate?: string | null,
  id: string,
  minimumDue?: number | null,
  monthsDefault?: string | null,
  monthsPaid?: string | null,
};

export type UpdateCreditTransactionInput = {
  amount?: string | null,
  creditTransactionId?: string | null,
  fromAccount?: string | null,
  id: string,
  providerName?: string | null,
  providerType?: string | null,
  transType?: string | null,
};

export type UpdateUserProfileInput = {
  address?: string | null,
  contacts?: string | null,
  disIncome?: string | null,
  email?: string | null,
  govId?: string | null,
  id: string,
  localExpense?: string | null,
  name?: string | null,
  netIncome?: string | null,
  profileOwner?: string | null,
  signDeclaration?: string | null,
  surname?: string | null,
};

export type UpdateWalletAccountInfoInput = {
  accountStatus?: string | null,
  availableBalance?: number | null,
  id: string,
  profileOwner?: string | null,
  walletAccount?: string | null,
  walletAccountId?: string | null,
};

export type UpdateWalletTransactionInput = {
  amount?: string | null,
  fromAccount?: string | null,
  id: string,
  providerName?: string | null,
  providerType?: string | null,
  transType?: string | null,
  walletTransactionId?: string | null,
};

export type ModelSubscriptionCreditAccountInfoFilterInput = {
  accountStatus?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCreditAccountInfoFilterInput | null > | null,
  availableCredit?: ModelSubscriptionIntInput | null,
  balanceOwing?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  creditAccount?: ModelSubscriptionStringInput | null,
  creditAccountId?: ModelSubscriptionIDInput | null,
  creditLimit?: ModelSubscriptionIntInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  minimumDue?: ModelSubscriptionIntInput | null,
  monthsDefault?: ModelSubscriptionStringInput | null,
  monthsPaid?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCreditAccountInfoFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCreditTransactionFilterInput = {
  amount?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCreditTransactionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  creditTransactionId?: ModelSubscriptionIDInput | null,
  fromAccount?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCreditTransactionFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  providerName?: ModelSubscriptionStringInput | null,
  providerType?: ModelSubscriptionStringInput | null,
  transType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  contacts?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  disIncome?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  govId?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  localExpense?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  netIncome?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  signDeclaration?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionWalletAccountInfoFilterInput = {
  accountStatus?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWalletAccountInfoFilterInput | null > | null,
  availableBalance?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionWalletAccountInfoFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  walletAccount?: ModelSubscriptionStringInput | null,
  walletAccountId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionWalletTransactionFilterInput = {
  amount?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWalletTransactionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  fromAccount?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionWalletTransactionFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  providerName?: ModelSubscriptionStringInput | null,
  providerType?: ModelSubscriptionStringInput | null,
  transType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  walletTransactionId?: ModelSubscriptionIDInput | null,
};

export type GetCreditAccountInfoQueryVariables = {
  id: string,
};

export type GetCreditAccountInfoQuery = {
  getCreditAccountInfo?:  {
    __typename: "CreditAccountInfo",
    accountStatus?: string | null,
    availableCredit?: number | null,
    balanceOwing?: number | null,
    createdAt: string,
    creditAccount?: string | null,
    creditAccountId?: string | null,
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type GetCreditTransactionQueryVariables = {
  id: string,
};

export type GetCreditTransactionQuery = {
  getCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    activeCreditAccountInfo?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    activeWalletAccountInfo?:  {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    disIncome?: string | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    localExpense?: string | null,
    name?: string | null,
    netIncome?: string | null,
    profileOwner?: string | null,
    signDeclaration?: string | null,
    surname?: string | null,
    updatedAt: string,
    walletTransaction?:  {
      __typename: "ModelWalletTransactionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetWalletAccountInfoQueryVariables = {
  id: string,
};

export type GetWalletAccountInfoQuery = {
  getWalletAccountInfo?:  {
    __typename: "WalletAccountInfo",
    accountStatus?: string | null,
    availableBalance?: number | null,
    createdAt: string,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    walletAccount?: string | null,
    walletAccountId?: string | null,
  } | null,
};

export type GetWalletTransactionQueryVariables = {
  id: string,
};

export type GetWalletTransactionQuery = {
  getWalletTransaction?:  {
    __typename: "WalletTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
    walletTransactionId?: string | null,
  } | null,
};

export type ListCreditAccountInfosQueryVariables = {
  filter?: ModelCreditAccountInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreditAccountInfosQuery = {
  listCreditAccountInfos?:  {
    __typename: "ModelCreditAccountInfoConnection",
    items:  Array< {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCreditTransactionsQueryVariables = {
  filter?: ModelCreditTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreditTransactionsQuery = {
  listCreditTransactions?:  {
    __typename: "ModelCreditTransactionConnection",
    items:  Array< {
      __typename: "CreditTransaction",
      amount?: string | null,
      createdAt: string,
      creditTransactionId?: string | null,
      fromAccount?: string | null,
      id: string,
      profileOwner?: string | null,
      providerName?: string | null,
      providerType?: string | null,
      transType?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListWalletAccountInfosQueryVariables = {
  filter?: ModelWalletAccountInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWalletAccountInfosQuery = {
  listWalletAccountInfos?:  {
    __typename: "ModelWalletAccountInfoConnection",
    items:  Array< {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListWalletTransactionsQueryVariables = {
  filter?: ModelWalletTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWalletTransactionsQuery = {
  listWalletTransactions?:  {
    __typename: "ModelWalletTransactionConnection",
    items:  Array< {
      __typename: "WalletTransaction",
      amount?: string | null,
      createdAt: string,
      fromAccount?: string | null,
      id: string,
      profileOwner?: string | null,
      providerName?: string | null,
      providerType?: string | null,
      transType?: string | null,
      updatedAt: string,
      walletTransactionId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCreditAccountInfoMutationVariables = {
  condition?: ModelCreditAccountInfoConditionInput | null,
  input: CreateCreditAccountInfoInput,
};

export type CreateCreditAccountInfoMutation = {
  createCreditAccountInfo?:  {
    __typename: "CreditAccountInfo",
    accountStatus?: string | null,
    availableCredit?: number | null,
    balanceOwing?: number | null,
    createdAt: string,
    creditAccount?: string | null,
    creditAccountId?: string | null,
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateCreditTransactionMutationVariables = {
  condition?: ModelCreditTransactionConditionInput | null,
  input: CreateCreditTransactionInput,
};

export type CreateCreditTransactionMutation = {
  createCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    activeCreditAccountInfo?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    activeWalletAccountInfo?:  {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    disIncome?: string | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    localExpense?: string | null,
    name?: string | null,
    netIncome?: string | null,
    profileOwner?: string | null,
    signDeclaration?: string | null,
    surname?: string | null,
    updatedAt: string,
    walletTransaction?:  {
      __typename: "ModelWalletTransactionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateWalletAccountInfoMutationVariables = {
  condition?: ModelWalletAccountInfoConditionInput | null,
  input: CreateWalletAccountInfoInput,
};

export type CreateWalletAccountInfoMutation = {
  createWalletAccountInfo?:  {
    __typename: "WalletAccountInfo",
    accountStatus?: string | null,
    availableBalance?: number | null,
    createdAt: string,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    walletAccount?: string | null,
    walletAccountId?: string | null,
  } | null,
};

export type CreateWalletTransactionMutationVariables = {
  condition?: ModelWalletTransactionConditionInput | null,
  input: CreateWalletTransactionInput,
};

export type CreateWalletTransactionMutation = {
  createWalletTransaction?:  {
    __typename: "WalletTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
    walletTransactionId?: string | null,
  } | null,
};

export type DeleteCreditAccountInfoMutationVariables = {
  condition?: ModelCreditAccountInfoConditionInput | null,
  input: DeleteCreditAccountInfoInput,
};

export type DeleteCreditAccountInfoMutation = {
  deleteCreditAccountInfo?:  {
    __typename: "CreditAccountInfo",
    accountStatus?: string | null,
    availableCredit?: number | null,
    balanceOwing?: number | null,
    createdAt: string,
    creditAccount?: string | null,
    creditAccountId?: string | null,
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteCreditTransactionMutationVariables = {
  condition?: ModelCreditTransactionConditionInput | null,
  input: DeleteCreditTransactionInput,
};

export type DeleteCreditTransactionMutation = {
  deleteCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    activeCreditAccountInfo?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    activeWalletAccountInfo?:  {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    disIncome?: string | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    localExpense?: string | null,
    name?: string | null,
    netIncome?: string | null,
    profileOwner?: string | null,
    signDeclaration?: string | null,
    surname?: string | null,
    updatedAt: string,
    walletTransaction?:  {
      __typename: "ModelWalletTransactionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteWalletAccountInfoMutationVariables = {
  condition?: ModelWalletAccountInfoConditionInput | null,
  input: DeleteWalletAccountInfoInput,
};

export type DeleteWalletAccountInfoMutation = {
  deleteWalletAccountInfo?:  {
    __typename: "WalletAccountInfo",
    accountStatus?: string | null,
    availableBalance?: number | null,
    createdAt: string,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    walletAccount?: string | null,
    walletAccountId?: string | null,
  } | null,
};

export type DeleteWalletTransactionMutationVariables = {
  condition?: ModelWalletTransactionConditionInput | null,
  input: DeleteWalletTransactionInput,
};

export type DeleteWalletTransactionMutation = {
  deleteWalletTransaction?:  {
    __typename: "WalletTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
    walletTransactionId?: string | null,
  } | null,
};

export type UpdateCreditAccountInfoMutationVariables = {
  condition?: ModelCreditAccountInfoConditionInput | null,
  input: UpdateCreditAccountInfoInput,
};

export type UpdateCreditAccountInfoMutation = {
  updateCreditAccountInfo?:  {
    __typename: "CreditAccountInfo",
    accountStatus?: string | null,
    availableCredit?: number | null,
    balanceOwing?: number | null,
    createdAt: string,
    creditAccount?: string | null,
    creditAccountId?: string | null,
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateCreditTransactionMutationVariables = {
  condition?: ModelCreditTransactionConditionInput | null,
  input: UpdateCreditTransactionInput,
};

export type UpdateCreditTransactionMutation = {
  updateCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    activeCreditAccountInfo?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    activeWalletAccountInfo?:  {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    disIncome?: string | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    localExpense?: string | null,
    name?: string | null,
    netIncome?: string | null,
    profileOwner?: string | null,
    signDeclaration?: string | null,
    surname?: string | null,
    updatedAt: string,
    walletTransaction?:  {
      __typename: "ModelWalletTransactionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateWalletAccountInfoMutationVariables = {
  condition?: ModelWalletAccountInfoConditionInput | null,
  input: UpdateWalletAccountInfoInput,
};

export type UpdateWalletAccountInfoMutation = {
  updateWalletAccountInfo?:  {
    __typename: "WalletAccountInfo",
    accountStatus?: string | null,
    availableBalance?: number | null,
    createdAt: string,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    walletAccount?: string | null,
    walletAccountId?: string | null,
  } | null,
};

export type UpdateWalletTransactionMutationVariables = {
  condition?: ModelWalletTransactionConditionInput | null,
  input: UpdateWalletTransactionInput,
};

export type UpdateWalletTransactionMutation = {
  updateWalletTransaction?:  {
    __typename: "WalletTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
    walletTransactionId?: string | null,
  } | null,
};

export type OnCreateCreditAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCreditAccountInfoFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateCreditAccountInfoSubscription = {
  onCreateCreditAccountInfo?:  {
    __typename: "CreditAccountInfo",
    accountStatus?: string | null,
    availableCredit?: number | null,
    balanceOwing?: number | null,
    createdAt: string,
    creditAccount?: string | null,
    creditAccountId?: string | null,
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateCreditTransactionSubscription = {
  onCreateCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    activeCreditAccountInfo?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    activeWalletAccountInfo?:  {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    disIncome?: string | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    localExpense?: string | null,
    name?: string | null,
    netIncome?: string | null,
    profileOwner?: string | null,
    signDeclaration?: string | null,
    surname?: string | null,
    updatedAt: string,
    walletTransaction?:  {
      __typename: "ModelWalletTransactionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateWalletAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionWalletAccountInfoFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateWalletAccountInfoSubscription = {
  onCreateWalletAccountInfo?:  {
    __typename: "WalletAccountInfo",
    accountStatus?: string | null,
    availableBalance?: number | null,
    createdAt: string,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    walletAccount?: string | null,
    walletAccountId?: string | null,
  } | null,
};

export type OnCreateWalletTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionWalletTransactionFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateWalletTransactionSubscription = {
  onCreateWalletTransaction?:  {
    __typename: "WalletTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
    walletTransactionId?: string | null,
  } | null,
};

export type OnDeleteCreditAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCreditAccountInfoFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteCreditAccountInfoSubscription = {
  onDeleteCreditAccountInfo?:  {
    __typename: "CreditAccountInfo",
    accountStatus?: string | null,
    availableCredit?: number | null,
    balanceOwing?: number | null,
    createdAt: string,
    creditAccount?: string | null,
    creditAccountId?: string | null,
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteCreditTransactionSubscription = {
  onDeleteCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    activeCreditAccountInfo?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    activeWalletAccountInfo?:  {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    disIncome?: string | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    localExpense?: string | null,
    name?: string | null,
    netIncome?: string | null,
    profileOwner?: string | null,
    signDeclaration?: string | null,
    surname?: string | null,
    updatedAt: string,
    walletTransaction?:  {
      __typename: "ModelWalletTransactionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteWalletAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionWalletAccountInfoFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteWalletAccountInfoSubscription = {
  onDeleteWalletAccountInfo?:  {
    __typename: "WalletAccountInfo",
    accountStatus?: string | null,
    availableBalance?: number | null,
    createdAt: string,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    walletAccount?: string | null,
    walletAccountId?: string | null,
  } | null,
};

export type OnDeleteWalletTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionWalletTransactionFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteWalletTransactionSubscription = {
  onDeleteWalletTransaction?:  {
    __typename: "WalletTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
    walletTransactionId?: string | null,
  } | null,
};

export type OnUpdateCreditAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCreditAccountInfoFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateCreditAccountInfoSubscription = {
  onUpdateCreditAccountInfo?:  {
    __typename: "CreditAccountInfo",
    accountStatus?: string | null,
    availableCredit?: number | null,
    balanceOwing?: number | null,
    createdAt: string,
    creditAccount?: string | null,
    creditAccountId?: string | null,
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateCreditTransactionSubscription = {
  onUpdateCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    activeCreditAccountInfo?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditAccountId?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    activeWalletAccountInfo?:  {
      __typename: "WalletAccountInfo",
      accountStatus?: string | null,
      availableBalance?: number | null,
      createdAt: string,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      walletAccount?: string | null,
      walletAccountId?: string | null,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    disIncome?: string | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    localExpense?: string | null,
    name?: string | null,
    netIncome?: string | null,
    profileOwner?: string | null,
    signDeclaration?: string | null,
    surname?: string | null,
    updatedAt: string,
    walletTransaction?:  {
      __typename: "ModelWalletTransactionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateWalletAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionWalletAccountInfoFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateWalletAccountInfoSubscription = {
  onUpdateWalletAccountInfo?:  {
    __typename: "WalletAccountInfo",
    accountStatus?: string | null,
    availableBalance?: number | null,
    createdAt: string,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    walletAccount?: string | null,
    walletAccountId?: string | null,
  } | null,
};

export type OnUpdateWalletTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionWalletTransactionFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateWalletTransactionSubscription = {
  onUpdateWalletTransaction?:  {
    __typename: "WalletTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      disIncome?: string | null,
      email?: string | null,
      govId?: string | null,
      id: string,
      localExpense?: string | null,
      name?: string | null,
      netIncome?: string | null,
      profileOwner?: string | null,
      signDeclaration?: string | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    fromAccount?: string | null,
    id: string,
    profileOwner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
    walletTransactionId?: string | null,
  } | null,
};
