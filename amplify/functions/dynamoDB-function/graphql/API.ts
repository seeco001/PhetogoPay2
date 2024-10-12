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
  creditLimit?: number | null,
  dueDate?: string | null,
  id: string,
  minimumDue?: number | null,
  monthsDefault?: string | null,
  monthsPaid?: string | null,
  owner?: string | null,
  transactions?: ModelCreditTransactionConnection | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
};

export type ModelCreditTransactionConnection = {
  __typename: "ModelCreditTransactionConnection",
  items:  Array<CreditTransaction | null >,
  nextToken?: string | null,
};

export type CreditTransaction = {
  __typename: "CreditTransaction",
  amount?: string | null,
  createdAt: string,
  creditAccount?: CreditAccountInfo | null,
  creditAccountId?: string | null,
  fromAccount?: string | null,
  id: string,
  newBalance?: string | null,
  owner?: string | null,
  serviceProvider?: ServiceProviders | null,
  serviceProviderId?: string | null,
  transType?: string | null,
  updatedAt: string,
};

export type ServiceProviders = {
  __typename: "ServiceProviders",
  address?: string | null,
  createdAt: string,
  id: string,
  operatingTimes?: string | null,
  providerName?: string | null,
  serviceType?: string | null,
  storeId?: string | null,
  telephone?: string | null,
  transactions?: ModelCreditTransactionConnection | null,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  accountOwner?: string | null,
  activeCreditAccountInfo?: CreditAccountInfo | null,
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
  userProfileId?: ModelIDInput | null,
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
  creditAccountId?: ModelIDInput | null,
  fromAccount?: ModelStringInput | null,
  id?: ModelIDInput | null,
  newBalance?: ModelStringInput | null,
  not?: ModelCreditTransactionFilterInput | null,
  or?: Array< ModelCreditTransactionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  serviceProviderId?: ModelIDInput | null,
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

export type ModelServiceProvidersFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelServiceProvidersFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelServiceProvidersFilterInput | null,
  operatingTimes?: ModelStringInput | null,
  or?: Array< ModelServiceProvidersFilterInput | null > | null,
  providerName?: ModelStringInput | null,
  serviceType?: ModelStringInput | null,
  storeId?: ModelIDInput | null,
  telephone?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelServiceProvidersConnection = {
  __typename: "ModelServiceProvidersConnection",
  items:  Array<ServiceProviders | null >,
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
  creditLimit?: ModelIntInput | null,
  dueDate?: ModelStringInput | null,
  minimumDue?: ModelIntInput | null,
  monthsDefault?: ModelStringInput | null,
  monthsPaid?: ModelStringInput | null,
  not?: ModelCreditAccountInfoConditionInput | null,
  or?: Array< ModelCreditAccountInfoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
};

export type CreateCreditAccountInfoInput = {
  accountStatus?: string | null,
  availableCredit?: number | null,
  balanceOwing?: number | null,
  creditAccount?: string | null,
  creditLimit?: number | null,
  dueDate?: string | null,
  id?: string | null,
  minimumDue?: number | null,
  monthsDefault?: string | null,
  monthsPaid?: string | null,
  userProfileId?: string | null,
};

export type ModelCreditTransactionConditionInput = {
  amount?: ModelStringInput | null,
  and?: Array< ModelCreditTransactionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  creditAccountId?: ModelIDInput | null,
  fromAccount?: ModelStringInput | null,
  newBalance?: ModelStringInput | null,
  not?: ModelCreditTransactionConditionInput | null,
  or?: Array< ModelCreditTransactionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  serviceProviderId?: ModelIDInput | null,
  transType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCreditTransactionInput = {
  amount?: string | null,
  creditAccountId?: string | null,
  fromAccount?: string | null,
  id?: string | null,
  newBalance?: string | null,
  serviceProviderId?: string | null,
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

export type ModelServiceProvidersConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelServiceProvidersConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelServiceProvidersConditionInput | null,
  operatingTimes?: ModelStringInput | null,
  or?: Array< ModelServiceProvidersConditionInput | null > | null,
  providerName?: ModelStringInput | null,
  serviceType?: ModelStringInput | null,
  storeId?: ModelIDInput | null,
  telephone?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateServiceProvidersInput = {
  address?: string | null,
  id?: string | null,
  operatingTimes?: string | null,
  providerName?: string | null,
  serviceType?: string | null,
  storeId?: string | null,
  telephone?: string | null,
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

export type DeleteServiceProvidersInput = {
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
  creditLimit?: number | null,
  dueDate?: string | null,
  id: string,
  minimumDue?: number | null,
  monthsDefault?: string | null,
  monthsPaid?: string | null,
  userProfileId?: string | null,
};

export type UpdateCreditTransactionInput = {
  amount?: string | null,
  creditAccountId?: string | null,
  fromAccount?: string | null,
  id: string,
  newBalance?: string | null,
  serviceProviderId?: string | null,
  transType?: string | null,
};

export type UpdateNewAccountsInput = {
  creditAccount?: string | null,
  govId?: string | null,
  id: string,
  sub?: string | null,
};

export type UpdateServiceProvidersInput = {
  address?: string | null,
  id: string,
  operatingTimes?: string | null,
  providerName?: string | null,
  serviceType?: string | null,
  storeId?: string | null,
  telephone?: string | null,
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
  creditLimit?: ModelSubscriptionIntInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  minimumDue?: ModelSubscriptionIntInput | null,
  monthsDefault?: ModelSubscriptionStringInput | null,
  monthsPaid?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCreditAccountInfoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
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
  creditAccountId?: ModelSubscriptionIDInput | null,
  fromAccount?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  newBalance?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCreditTransactionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  serviceProviderId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionServiceProvidersFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionServiceProvidersFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  operatingTimes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionServiceProvidersFilterInput | null > | null,
  providerName?: ModelSubscriptionStringInput | null,
  serviceType?: ModelSubscriptionStringInput | null,
  storeId?: ModelSubscriptionIDInput | null,
  telephone?: ModelSubscriptionStringInput | null,
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
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    owner?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
    userProfileId?: string | null,
  } | null,
};

export type GetCreditTransactionQueryVariables = {
  id: string,
};

export type GetCreditTransactionQuery = {
  getCreditTransaction?:  {
    __typename: "CreditTransaction",
    amount?: string | null,
    createdAt: string,
    creditAccount?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
    creditAccountId?: string | null,
    fromAccount?: string | null,
    id: string,
    newBalance?: string | null,
    owner?: string | null,
    serviceProvider?:  {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
      updatedAt: string,
    } | null,
    serviceProviderId?: string | null,
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

export type GetServiceProvidersQueryVariables = {
  id: string,
};

export type GetServiceProvidersQuery = {
  getServiceProviders?:  {
    __typename: "ServiceProviders",
    address?: string | null,
    createdAt: string,
    id: string,
    operatingTimes?: string | null,
    providerName?: string | null,
    serviceType?: string | null,
    storeId?: string | null,
    telephone?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
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
      creditAccountId?: string | null,
      fromAccount?: string | null,
      id: string,
      newBalance?: string | null,
      owner?: string | null,
      serviceProviderId?: string | null,
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

export type ListServiceProvidersQueryVariables = {
  filter?: ModelServiceProvidersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServiceProvidersQuery = {
  listServiceProviders?:  {
    __typename: "ModelServiceProvidersConnection",
    items:  Array< {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
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
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    owner?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
    userProfileId?: string | null,
  } | null,
};

export type CreateCreditTransactionMutationVariables = {
  condition?: ModelCreditTransactionConditionInput | null,
  input: CreateCreditTransactionInput,
};

export type CreateCreditTransactionMutation = {
  createCreditTransaction?:  {
    __typename: "CreditTransaction",
    amount?: string | null,
    createdAt: string,
    creditAccount?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
    creditAccountId?: string | null,
    fromAccount?: string | null,
    id: string,
    newBalance?: string | null,
    owner?: string | null,
    serviceProvider?:  {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
      updatedAt: string,
    } | null,
    serviceProviderId?: string | null,
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

export type CreateServiceProvidersMutationVariables = {
  condition?: ModelServiceProvidersConditionInput | null,
  input: CreateServiceProvidersInput,
};

export type CreateServiceProvidersMutation = {
  createServiceProviders?:  {
    __typename: "ServiceProviders",
    address?: string | null,
    createdAt: string,
    id: string,
    operatingTimes?: string | null,
    providerName?: string | null,
    serviceType?: string | null,
    storeId?: string | null,
    telephone?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
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
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    owner?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
    userProfileId?: string | null,
  } | null,
};

export type DeleteCreditTransactionMutationVariables = {
  condition?: ModelCreditTransactionConditionInput | null,
  input: DeleteCreditTransactionInput,
};

export type DeleteCreditTransactionMutation = {
  deleteCreditTransaction?:  {
    __typename: "CreditTransaction",
    amount?: string | null,
    createdAt: string,
    creditAccount?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
    creditAccountId?: string | null,
    fromAccount?: string | null,
    id: string,
    newBalance?: string | null,
    owner?: string | null,
    serviceProvider?:  {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
      updatedAt: string,
    } | null,
    serviceProviderId?: string | null,
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

export type DeleteServiceProvidersMutationVariables = {
  condition?: ModelServiceProvidersConditionInput | null,
  input: DeleteServiceProvidersInput,
};

export type DeleteServiceProvidersMutation = {
  deleteServiceProviders?:  {
    __typename: "ServiceProviders",
    address?: string | null,
    createdAt: string,
    id: string,
    operatingTimes?: string | null,
    providerName?: string | null,
    serviceType?: string | null,
    storeId?: string | null,
    telephone?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
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
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    owner?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
    userProfileId?: string | null,
  } | null,
};

export type UpdateCreditTransactionMutationVariables = {
  condition?: ModelCreditTransactionConditionInput | null,
  input: UpdateCreditTransactionInput,
};

export type UpdateCreditTransactionMutation = {
  updateCreditTransaction?:  {
    __typename: "CreditTransaction",
    amount?: string | null,
    createdAt: string,
    creditAccount?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
    creditAccountId?: string | null,
    fromAccount?: string | null,
    id: string,
    newBalance?: string | null,
    owner?: string | null,
    serviceProvider?:  {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
      updatedAt: string,
    } | null,
    serviceProviderId?: string | null,
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

export type UpdateServiceProvidersMutationVariables = {
  condition?: ModelServiceProvidersConditionInput | null,
  input: UpdateServiceProvidersInput,
};

export type UpdateServiceProvidersMutation = {
  updateServiceProviders?:  {
    __typename: "ServiceProviders",
    address?: string | null,
    createdAt: string,
    id: string,
    operatingTimes?: string | null,
    providerName?: string | null,
    serviceType?: string | null,
    storeId?: string | null,
    telephone?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
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
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    owner?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
    userProfileId?: string | null,
  } | null,
};

export type OnCreateCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  owner?: string | null,
};

export type OnCreateCreditTransactionSubscription = {
  onCreateCreditTransaction?:  {
    __typename: "CreditTransaction",
    amount?: string | null,
    createdAt: string,
    creditAccount?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
    creditAccountId?: string | null,
    fromAccount?: string | null,
    id: string,
    newBalance?: string | null,
    owner?: string | null,
    serviceProvider?:  {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
      updatedAt: string,
    } | null,
    serviceProviderId?: string | null,
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

export type OnCreateServiceProvidersSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidersFilterInput | null,
};

export type OnCreateServiceProvidersSubscription = {
  onCreateServiceProviders?:  {
    __typename: "ServiceProviders",
    address?: string | null,
    createdAt: string,
    id: string,
    operatingTimes?: string | null,
    providerName?: string | null,
    serviceType?: string | null,
    storeId?: string | null,
    telephone?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
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
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    owner?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
    userProfileId?: string | null,
  } | null,
};

export type OnDeleteCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCreditTransactionSubscription = {
  onDeleteCreditTransaction?:  {
    __typename: "CreditTransaction",
    amount?: string | null,
    createdAt: string,
    creditAccount?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
    creditAccountId?: string | null,
    fromAccount?: string | null,
    id: string,
    newBalance?: string | null,
    owner?: string | null,
    serviceProvider?:  {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
      updatedAt: string,
    } | null,
    serviceProviderId?: string | null,
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

export type OnDeleteServiceProvidersSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidersFilterInput | null,
};

export type OnDeleteServiceProvidersSubscription = {
  onDeleteServiceProviders?:  {
    __typename: "ServiceProviders",
    address?: string | null,
    createdAt: string,
    id: string,
    operatingTimes?: string | null,
    providerName?: string | null,
    serviceType?: string | null,
    storeId?: string | null,
    telephone?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
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
    creditLimit?: number | null,
    dueDate?: string | null,
    id: string,
    minimumDue?: number | null,
    monthsDefault?: string | null,
    monthsPaid?: string | null,
    owner?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
    userProfileId?: string | null,
  } | null,
};

export type OnUpdateCreditTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionCreditTransactionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCreditTransactionSubscription = {
  onUpdateCreditTransaction?:  {
    __typename: "CreditTransaction",
    amount?: string | null,
    createdAt: string,
    creditAccount?:  {
      __typename: "CreditAccountInfo",
      accountStatus?: string | null,
      availableCredit?: number | null,
      balanceOwing?: number | null,
      createdAt: string,
      creditAccount?: string | null,
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
    creditAccountId?: string | null,
    fromAccount?: string | null,
    id: string,
    newBalance?: string | null,
    owner?: string | null,
    serviceProvider?:  {
      __typename: "ServiceProviders",
      address?: string | null,
      createdAt: string,
      id: string,
      operatingTimes?: string | null,
      providerName?: string | null,
      serviceType?: string | null,
      storeId?: string | null,
      telephone?: string | null,
      updatedAt: string,
    } | null,
    serviceProviderId?: string | null,
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

export type OnUpdateServiceProvidersSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidersFilterInput | null,
};

export type OnUpdateServiceProvidersSubscription = {
  onUpdateServiceProviders?:  {
    __typename: "ServiceProviders",
    address?: string | null,
    createdAt: string,
    id: string,
    operatingTimes?: string | null,
    providerName?: string | null,
    serviceType?: string | null,
    storeId?: string | null,
    telephone?: string | null,
    transactions?:  {
      __typename: "ModelCreditTransactionConnection",
      nextToken?: string | null,
    } | null,
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
      creditLimit?: number | null,
      dueDate?: string | null,
      id: string,
      minimumDue?: number | null,
      monthsDefault?: string | null,
      monthsPaid?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
    } | null,
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
};
