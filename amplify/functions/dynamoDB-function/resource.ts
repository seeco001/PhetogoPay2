import { defineFunction, secret } from "@aws-amplify/backend";
import { env } from '$amplify/env/dynamoDB-function';

export const myDynamoDBFunction = defineFunction({
  name: "dynamoDB-function",
  environment: {
      WHATSAPP_API_ENDPOINT: "https://graph.facebook.com/v21.0/0686151614/messages",
      WHATSAPP_API_KEY: secret('EAAGUVZCd5HZAUBO8BhydhwAWpoLnWpSZAfofAF8JvmPKNXXbuzd73jQZBmRZCCsX6Yv4kQqxO4AZCQhQyjwXb0enLESWSDo58PcibsYW5NS9IsK1IYXtB0QLDmHTKNY4ASQGp5ZAoWWmLvVV4fTKZByqTZAZAq2PD2JJBhZBUkknFFpgEaCS9tHnLkTBeIHgb7rnv75gyZCnwnyZCWhGibz32HV6PpFKrTxU1n2HZBC0n32210')
    }
});