/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UserProfile = {
  __typename: "UserProfile",
  address?: string | null,
  contacts?: string | null,
  createdAt: string,
  creditAccount?: string | null,
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
  walletAccount?: string | null,
};

export type ModelUserProfileFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  contacts?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  creditAccount?: ModelStringInput | null,
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
  walletAccount?: ModelStringInput | null,
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

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelUserProfileConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  contacts?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  creditAccount?: ModelStringInput | null,
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
  walletAccount?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  address?: string | null,
  contacts?: string | null,
  creditAccount?: string | null,
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
  walletAccount?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateUserProfileInput = {
  address?: string | null,
  contacts?: string | null,
  creditAccount?: string | null,
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
  walletAccount?: string | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  contacts?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  creditAccount?: ModelSubscriptionStringInput | null,
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
  walletAccount?: ModelSubscriptionStringInput | null,
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

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditAccount?: string | null,
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
    walletAccount?: string | null,
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
      creditAccount?: string | null,
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
      walletAccount?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditAccount?: string | null,
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
    walletAccount?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditAccount?: string | null,
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
    walletAccount?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditAccount?: string | null,
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
    walletAccount?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditAccount?: string | null,
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
    walletAccount?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditAccount?: string | null,
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
    walletAccount?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    address?: string | null,
    contacts?: string | null,
    createdAt: string,
    creditAccount?: string | null,
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
    walletAccount?: string | null,
  } | null,
};
