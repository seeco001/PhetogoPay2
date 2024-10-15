import type { DynamoDBStreamHandler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";
import axios from "axios";

const logger = new Logger({
  logLevel: "INFO",
  serviceName: "dynamodb-stream-handler",
});

export const handler: DynamoDBStreamHandler = async (event) => {

//   const request = new Request(env.API_ENDPOINT, {
//       headers: {
//         // this is the value of secret named "MY_API_KEY"
//         Authorization: `Bearer ${env.API_KEY}`
//       }
//     })

  for (const record of event.Records) {
    logger.info(`Processing record: ${record.eventID}`);
    logger.info(`Event Type: ${record.eventName}`);

    if (record.eventName === "MODIFY") {
        logger.info(`******MODIFY has taken Place******`);
       const messageData = {
            {
                "messaging_product": "whatsapp",
                        "recipient_type": "individual",
                        "to": "27762920003",
                        "type": "template",
                        "template": {
                            "name": "phetogopay_transactions",
                            "language": {
                            "code": "en"
                            },
                        "components": [
                            {
                              "type": "header",
                              "parameters": [
                                {
                                  "type": "image",
                                  "image": {
                                    "link": "https://whatsappbanner.s3.eu-west-1.amazonaws.com/PhetogoPay_Transactions.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIA65y%2BOJitfq8R%2F8h2%2FNTgEkNbmOJvdcekSro48%2FDaXCAiEAj8RiCasGJSUYTKtw2Pk1ewqLByCs9qyCiMyTqUYCas4q7QII7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5NzUwNDk4OTMwMDciDI8Iu7sBWUVQ9VDLwyrBAlyCoTEnvFzQm1Mt6Sb8AFsLZQnYJLq79LOI5dI5%2B0ijik5ddutreedPmNT%2BLdoAHHnaRZgJBT9NrRRyKphWQDvZGsT3LabxQp5Wsq0PJgXsAVm7%2B6KPv9OiRX3r%2BuXmgHNU0NZ9n8Z5xFqUEtcsgD1g5vjpLpZOY9HdaMBCNAz4sSpSzgRK3AVVCVLgRWsybTkQQhKutDfCZ1IRfFLTY1woqsmBHOOwu0eU%2Bp0cMg8UbJYd%2FoFQ5ftFKVp3cklmuQK7nYMYcV0bHeJL1ilqHl7yGnzkSLVHdVTyU4YgIDNC0tEpdtF6klqQkAU0qJ9Q9ET6vO6%2Fnm%2Byu34Q9HM5Tf%2FgOQs9bYySz2FDnJVi6A7jlWx75C%2F2DMy3LyySuq6UaGj2VS8wccbY59qeVCbBEtv%2FkOvKUjHlqlL%2F7kygznvYxjD31rm4BjqzAnWIyjvupLsoNews9FYYa%2FZ9rd3yKgPpUcY4Z9sBx1GBLxCL1ROJ1Ep%2BY%2B9RrnXfUIbTO%2Bk8OmhcvzSxr27S9%2BzFHbRkOiYeQ3GyVwpHlPViLfQlKsIx17WT%2BYgm8HbNFhIvDRG%2Fi7FuM6Rm%2F3%2F1hM6q%2FIsHohvELnP%2F5CVzl0faa%2B9buWLqz7zDBC%2FClxu2ykNQ46nmL6SrxHK80Z3aiHq8mhhPeCvK3bExWZHTorO5d3qY100XC8%2F7Zq0JjCqDvHFMxJE6KPOANRRe6wiCRjOCFTyGT9l9Y1QPqMVJzAjTCtey%2FsX7MlxshyNx8tXnVY8XxN9Rp%2BDVr7MYOZJ6GxUhxJgOxGdF01f2vu8aP2xauv8J7FZ7wsFSirmRGaKH31KIOccHINtt%2Bmjfq%2B91wgGFRsQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241015T140955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA6GBMAUSHTYBS72PQ%2F20241015%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ecd673c042bdc4a293ac1b447fe858702413bd36b8d73da5b17fb8d7236f3d5d"
                                  }
                                }
                              ]
                            },
                            {
                              "type": "body",
                              "parameters": [
                                {
                                  "type": "text",
                                  "text": "Mississippi Cash Store"
                                },
                                {
                                  "type": "text",
                                  "text": "2024-07-01T19:16:59.483Z"
                                },
                                {
                                  "type": "text",
                                  "text": "R30"
                                },
                                {
                                  "type": "text",
                                  "text": "9383468534"
                                },
                                {
                                  "type": "text",
                                  "text": "53a80ca5-918e-4a81-af54-7cc53e251d6d"
                                }
                              ]
                            }
                          ]
                        }
            }
      }

      try {
          logger.info(`******beginning of try-catch******`);
          await axios.post(
              `https://graph.facebook.com/v20.0/364994256697626/messages`,
              //`${WHATSAPP_API_URL}/v13.0/your-whatsapp-business-id/messages`,
               messageData,
              {
                headers: {
                  Authorization: `Bearer EAAGUVZCd5HZAUBO51c8nfBTZBLfkLkmwHBm8SE4S0dOpANm2YDvGSf9InZANOHV0U2xTnHbFQuXRa8aD7T4Euymvqo7WGsZBk2N3CEfYrh1ikZCcmxgZBSdicvIw1TwPdQ1sNfaRZBXK6OCscOHeY0ZAu1ShK1PNZC580hUTtklydNZCWs7MLoD7Cu69lWYD36JhgKaahAW8Xlvano3zByevam11valE0Q4TH3ZAqCx3CSh0`,
                  'Content-Type': `application/json`
                }
              }
          );
          logger.info(`******axios post happened******`);
          //logger.info(`WhatsApp message sent successfully to ${phoneNumber}`);
      } catch (error) {
          logger.info(`******Unfortunately catch******`);
        //logger.error(`Failed to send WhatsApp message: ${error.message}`);
      }
  ///////////////////////////////////////////////////////////////////////////////////////


      logger.info(`New Image: ${JSON.stringify(record.dynamodb?.NewImage)}`);
    }
  }
  logger.info(`Successfully processed ${event.Records.length} records.`);

  return {
    batchItemFailures: [],
  };
};