import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";


const schema = a
    .schema({

        CreditTransaction: a
            .model({
                profileId: a.id(),
                fromAccount: a.string(),
                transType: a.string(),
                providerName: a.string(),
                providerType: a.string(),
                amount: a.string(),
                userProfiles: a.belongsTo('UserProfile','profileId')
            })
            .authorization((allow) => [
                allow.ownerDefinedIn("profileOwner"),
            ]),

        CreditAccountInfo: a
            .model({
                profileId: a.id(),
                creditAccount: a.string(),
                accountStatus: a.string(),
                availableCredit: a.integer(),
                balanceOwing: a.integer(),
                creditLimit: a.integer(),
                minimumDue: a.integer(),
                dueDate: a.string(),
                monthsPaid: a.string(),
                monthsDefault: a.string(),
                userProfiles: a.belongsTo('UserProfile','profileId')
            })
            .authorization((allow) => [
                allow.ownerDefinedIn("profileOwner"),
            ]),

        UserProfile: a
            .model({
                email: a.string(),
                profileOwner: a.string(),
                walletAccount: a.string(),
                creditAccount: a.string(),
                name: a.string(),
                surname: a.string(),
                govId: a.string(),
                address: a.string(),
                contacts: a.string(),
                netIncome: a.string(),
                disIncome: a.string(),
                localExpense: a.string(),
                signDeclaration: a.string(),
                creditTransaction: a.hasMany('CreditTransaction','profileId'),
                creditAccountInfo: a.hasOne('CreditAccountInfo','profileId')
            })
            .authorization((allow) => [
                allow.ownerDefinedIn("profileOwner"),
            ]),

    })
    .authorization((allow) => [allow.resource(postConfirmation)]);
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
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

