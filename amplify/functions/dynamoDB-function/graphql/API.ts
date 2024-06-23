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
  owner?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  accountOwner?: string | null,
  activeCreditAccountInfo?: CreditAccountInfo | null,
  address?: string | null,
  contacts?: string | null,
  createdAt: string,
  creditTransaction?: ModelCreditTransactionConnection | null,
  email?: string | null,
  govId?: string | null,
  id: string,
  incomeType?: number | null,
  localExpense?: string | null,
  name?: string | null,
  owner?: string | null,
  signDeclaration?: boolean | null,
  surname?: string | null,
  updatedAt: string,
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
  owner?: string | null,
  providerName?: string | null,
  providerType?: string | null,
  transType?: string | null,
  updatedAt: string,
};

export type NewAccounts = {
  __typename: "NewAccounts",
  createdAt: string,
  creditAccount?: string | null,
  govId?: string | null,
  id: string,
  sub?: string | null,
  updatedAt: string,
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
  owner?: ModelStringInput | null,
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
  owner?: ModelStringInput | null,
  providerName?: ModelStringInput | null,
  providerType?: ModelStringInput | null,
  transType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelNewAccountsFilterInput = {
  and?: Array< ModelNewAccountsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  creditAccount?: ModelStringInput | null,
  govId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  not?: ModelNewAccountsFilterInput | null,
  or?: Array< ModelNewAccountsFilterInput | null > | null,
  sub?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelNewAccountsConnection = {
  __typename: "ModelNewAccountsConnection",
  items:  Array<NewAccounts | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  accountOwner?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  contacts?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  govId?: ModelStringInput | null,
  id?: ModelIDInput | null,
  incomeType?: ModelIntInput | null,
  localExpense?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  signDeclaration?: ModelBooleanInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
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
  owner?: ModelStringInput | null,
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
  owner?: ModelStringInput | null,
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

export type ModelNewAccountsConditionInput = {
  and?: Array< ModelNewAccountsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  creditAccount?: ModelStringInput | null,
  govId?: ModelIDInput | null,
  not?: ModelNewAccountsConditionInput | null,
  or?: Array< ModelNewAccountsConditionInput | null > | null,
  sub?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateNewAccountsInput = {
  creditAccount?: string | null,
  govId?: string | null,
  id?: string | null,
  sub?: string | null,
};

export type ModelUserProfileConditionInput = {
  accountOwner?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  contacts?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  govId?: ModelStringInput | null,
  incomeType?: ModelIntInput | null,
  localExpense?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  owner?: ModelStringInput | null,
  signDeclaration?: ModelBooleanInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  accountOwner?: string | null,
  address?: string | null,
  contacts?: string | null,
  email?: string | null,
  govId?: string | null,
  id?: string | null,
  incomeType?: number | null,
  localExpense?: string | null,
  name?: string | null,
  signDeclaration?: boolean | null,
  surname?: string | null,
};

export type DeleteCreditAccountInfoInput = {
  id: string,
};

export type DeleteCreditTransactionInput = {
  id: string,
};

export type DeleteNewAccountsInput = {
  id: string,
};

export type DeleteUserProfileInput = {
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

export type UpdateNewAccountsInput = {
  creditAccount?: string | null,
  govId?: string | null,
  id: string,
  sub?: string | null,
};

export type UpdateUserProfileInput = {
  accountOwner?: string | null,
  address?: string | null,
  contacts?: string | null,
  email?: string | null,
  govId?: string | null,
  id: string,
  incomeType?: number | null,
  localExpense?: string | null,
  name?: string | null,
  signDeclaration?: boolean | null,
  surname?: string | null,
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
  owner?: ModelStringInput | null,
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
  owner?: ModelStringInput | null,
  providerName?: ModelSubscriptionStringInput | null,
  providerType?: ModelSubscriptionStringInput | null,
  transType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionNewAccountsFilterInput = {
  and?: Array< ModelSubscriptionNewAccountsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  creditAccount?: ModelSubscriptionStringInput | null,
  govId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionNewAccountsFilterInput | null > | null,
  sub?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  accountOwner?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  contacts?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  govId?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  incomeType?: ModelSubscriptionIntInput | null,
  localExpense?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  signDeclaration?: ModelSubscriptionBooleanInput | null,
  surname?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
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
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
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
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    owner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type GetNewAccountsQueryVariables = {
  id: string,
};

export type GetNewAccountsQuery = {
  getNewAccounts?:  {
    __typename: "NewAccounts",
    createdAt: string,
    creditAccount?: string | null,
    govId?: string | null,
    id: string,
    sub?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    accountOwner?: string | null,
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
      owner?: string | null,
      updatedAt: string,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    incomeType?: number | null,
    localExpense?: string | null,
    name?: string | null,
    owner?: string | null,
    signDeclaration?: boolean | null,
    surname?: string | null,
    updatedAt: string,
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
      owner?: string | null,
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
      owner?: string | null,
      providerName?: string | null,
      providerType?: string | null,
      transType?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListNewAccountsQueryVariables = {
  filter?: ModelNewAccountsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNewAccountsQuery = {
  listNewAccounts?:  {
    __typename: "ModelNewAccountsConnection",
    items:  Array< {
      __typename: "NewAccounts",
      createdAt: string,
      creditAccount?: string | null,
      govId?: string | null,
      id: string,
      sub?: string | null,
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
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
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
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
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
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    owner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateNewAccountsMutationVariables = {
  condition?: ModelNewAccountsConditionInput | null,
  input: CreateNewAccountsInput,
};

export type CreateNewAccountsMutation = {
  createNewAccounts?:  {
    __typename: "NewAccounts",
    createdAt: string,
    creditAccount?: string | null,
    govId?: string | null,
    id: string,
    sub?: string | null,
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
    accountOwner?: string | null,
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
      owner?: string | null,
      updatedAt: string,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    incomeType?: number | null,
    localExpense?: string | null,
    name?: string | null,
    owner?: string | null,
    signDeclaration?: boolean | null,
    surname?: string | null,
    updatedAt: string,
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
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
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
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    owner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteNewAccountsMutationVariables = {
  condition?: ModelNewAccountsConditionInput | null,
  input: DeleteNewAccountsInput,
};

export type DeleteNewAccountsMutation = {
  deleteNewAccounts?:  {
    __typename: "NewAccounts",
    createdAt: string,
    creditAccount?: string | null,
    govId?: string | null,
    id: string,
    sub?: string | null,
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
    accountOwner?: string | null,
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
      owner?: string | null,
      updatedAt: string,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    incomeType?: number | null,
    localExpense?: string | null,
    name?: string | null,
    owner?: string | null,
    signDeclaration?: boolean | null,
    surname?: string | null,
    updatedAt: string,
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
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
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
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    owner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateNewAccountsMutationVariables = {
  condition?: ModelNewAccountsConditionInput | null,
  input: UpdateNewAccountsInput,
};

export type UpdateNewAccountsMutation = {
  updateNewAccounts?:  {
    __typename: "NewAccounts",
    createdAt: string,
    creditAccount?: string | null,
    govId?: string | null,
    id: string,
    sub?: string | null,
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
    accountOwner?: string | null,
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
      owner?: string | null,
      updatedAt: string,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    incomeType?: number | null,
    localExpense?: string | null,
    name?: string | null,
    owner?: string | null,
    signDeclaration?: boolean | null,
    surname?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCreditAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCreditAccountInfoFilterInput | null,
  owner?: string | null,
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
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  owner?: string | null,
};

export type OnCreateCreditTransactionSubscription = {
  onCreateCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    owner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateNewAccountsSubscriptionVariables = {
  filter?: ModelSubscriptionNewAccountsFilterInput | null,
};

export type OnCreateNewAccountsSubscription = {
  onCreateNewAccounts?:  {
    __typename: "NewAccounts",
    createdAt: string,
    creditAccount?: string | null,
    govId?: string | null,
    id: string,
    sub?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    accountOwner?: string | null,
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
      owner?: string | null,
      updatedAt: string,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    incomeType?: number | null,
    localExpense?: string | null,
    name?: string | null,
    owner?: string | null,
    signDeclaration?: boolean | null,
    surname?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCreditAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCreditAccountInfoFilterInput | null,
  owner?: string | null,
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
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCreditTransactionSubscription = {
  onDeleteCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    owner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteNewAccountsSubscriptionVariables = {
  filter?: ModelSubscriptionNewAccountsFilterInput | null,
};

export type OnDeleteNewAccountsSubscription = {
  onDeleteNewAccounts?:  {
    __typename: "NewAccounts",
    createdAt: string,
    creditAccount?: string | null,
    govId?: string | null,
    id: string,
    sub?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    accountOwner?: string | null,
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
      owner?: string | null,
      updatedAt: string,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    incomeType?: number | null,
    localExpense?: string | null,
    name?: string | null,
    owner?: string | null,
    signDeclaration?: boolean | null,
    surname?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCreditAccountInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCreditAccountInfoFilterInput | null,
  owner?: string | null,
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
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCreditTransactionSubscription = {
  onUpdateCreditTransaction?:  {
    __typename: "CreditTransaction",
    activeProfile?:  {
      __typename: "UserProfile",
      accountOwner?: string | null,
      address?: string | null,
      contacts?: string | null,
      createdAt: string,
      email?: string | null,
      govId?: string | null,
      id: string,
      incomeType?: number | null,
      localExpense?: string | null,
      name?: string | null,
      owner?: string | null,
      signDeclaration?: boolean | null,
      surname?: string | null,
      updatedAt: string,
    } | null,
    amount?: string | null,
    createdAt: string,
    creditTransactionId?: string | null,
    fromAccount?: string | null,
    id: string,
    owner?: string | null,
    providerName?: string | null,
    providerType?: string | null,
    transType?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateNewAccountsSubscriptionVariables = {
  filter?: ModelSubscriptionNewAccountsFilterInput | null,
};

export type OnUpdateNewAccountsSubscription = {
  onUpdateNewAccounts?:  {
    __typename: "NewAccounts",
    createdAt: string,
    creditAccount?: string | null,
    govId?: string | null,
    id: string,
    sub?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    accountOwner?: string | null,
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
      owner?: string | null,
      updatedAt: string,
    } | null,
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditTransaction?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    govId?: string | null,
    id: string,
    incomeType?: number | null,
    localExpense?: string | null,
    name?: string | null,
    owner?: string | null,
    signDeclaration?: boolean | null,
    surname?: string | null,
    updatedAt: string,
  } | null,
};
