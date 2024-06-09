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

export type DeleteCreditAccountInfoInput = {
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
};
