import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { myDynamoDBFunction } from "../functions/dynamoDB-function/resource"


const schema = a
    .schema({
        /**
            NewAccount is used to store IDs of new users when they want to open new accounts,
            the user's ID is checked whether it exists to determine whether the user can
            proceed with their application: When ID record exists users can't apply for credit.

            sub checks whether the authenticated user has an accounts and this is used to update
            the UI correctly.
         */
        NewAccounts: a
            .model({
                govId: a.id(),
                creditAccount: a.string(),
                sub: a.string()
            })
            .authorization((allow) => [
                allow.authenticated()
                    .to(['read','create']),
            ]),

        /**
            CreditTransaction is used to create new transactions when the user is
            using the app to pay for things, a record is created when
            CreditAccountInfo-availableCredit is >= to CreditTransaction-amount
         */
        CreditTransaction: a
            .model({
                creditAccountId: a.id(),
                serviceProviderId: a.id(),
                fromAccount: a.string(),
                transType: a.string(),
                amount: a.string(),
                newBalance: a.string(),
                serviceProvider: a.belongsTo('ServiceProviders', 'serviceProviderId'),
                creditAccount: a.belongsTo('CreditAccountInfo', 'creditAccountId')
            })
            .authorization((allow) => [
                allow.owner()
                    .to(['read','create']),
            ]),

        ServiceProviders: a
            .model({
                storeId: a.id(),
                providerName: a.string(),
                address: a.string(),
                operatingTimes: a.string(),
                serviceType: a.string(),
                telephone: a.string(),
                transactions: a.hasMany('CreditTransaction', 'serviceProviderId')
            })
            .authorization((allow) => [
                allow.authenticated()
                    .to(['read']),
            ]),


//         WalletTransaction: a
//             .model({
//                 walletTransactionId: a.id(),
//                 fromAccount: a.string(),
//                 transType: a.string(),
//                 providerName: a.string(),
//                 providerType: a.string(),
//                 amount: a.string(),
//                 activeProfile: a.belongsTo('UserProfile','walletTransactionId')
//             }),




//         WalletAccountInfo: a
//             .model({
//                 walletAccountId: a.id(),
//                 walletAccount: a.string(),
//                 accountStatus: a.string(),
//                 availableBalance: a.integer(),
//                 userProfile: a.belongsTo('UserProfile','walletAccountId')
//             }),
        /**
            CreditAccountInfo is used to check if a transaction record should be created.
         */
        CreditAccountInfo: a
            .model({
                userProfileId: a.id(),
                creditAccount: a.string(),
                accountStatus: a.string(),
                availableCredit: a.integer(),
                balanceOwing: a.integer(),
                creditLimit: a.integer(),
                minimumDue: a.integer(),
                dueDate: a.string(),
                monthsPaid: a.string(),
                monthsDefault: a.string(),
                transactions: a.hasMany('CreditTransaction', 'creditAccountId'),
                userProfile: a.belongsTo('UserProfile','userProfileId')
            })
            .authorization((allow) => [
                allow.owner()
                    .to(['read','create','update']),

            ]),

        UserProfile: a
            .model({
                email: a.string(),
                accountOwner: a.string(),
                name: a.string(),
                surname: a.string(),
                govId: a.string(),
                address: a.string(),
                contacts: a.string(),
                incomeType: a.integer(),
                localExpense: a.string(),
                signDeclaration: a.boolean(),
                activeCreditAccountInfo: a.hasOne('CreditAccountInfo','userProfileId'),
                //walletTransaction: a.hasMany('WalletTransaction','walletTransactionId'),,
                //activeWalletAccountInfo: a.hasOne('WalletAccountInfo','walletAccountId')
            })
            .authorization((allow) => [
                allow.owner()
                    .to(['read','create']),
            ]),
    }).authorization(allow => [allow.owner()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

