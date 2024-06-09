import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/post-confirmation";
import { createUserProfile } from "./graphql/mutations";
import { createCreditAccountInfo } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const userProfile = await client.graphql({
      query: createUserProfile,
      variables: {
        input: {
          email: event.request.userAttributes.email,
          profileOwner: `${event.request.userAttributes.sub}::${event.userName}`,
          name: ``,
          surname: ``,
          govId: ``,
          address: ``,
          contacts: ``,
          netIncome: ``,
          disIncome: ``,
          localExpense: ``,
          signDeclaration: ``
        },
      },
    });


  await client.graphql({
    query: createCreditAccountInfo,
    variables: {
      input: {
        creditAccount: `6856546957`,
        accountStatus: `ACTIVE`,
        availableCredit: 50,
        balanceOwing: 0,
        creditLimit: 200,
        minimumDue: 0,
        dueDate: `2024-07-08`,
        monthsPaid: `June`,
        monthsDefault: ``
      },
    },
  });

  return event;
};