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
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": "+27732201360",
            "type": "template",
            "template": {
                "name": "phetogopay_transactions",
                "language": {
                "code": "en_US"
                },
            "components": [
                {
                  "type": "header",
                  "parameters": [
                    {
                      "type": "image",
                      "image": {
                        "link": "https://whatsappbanner.s3.eu-west-1.amazonaws.com/PhetogoPay_Transactions.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCWV1LXdlc3QtMSJHMEUCIC7REd6vqJndDc%2Bx%2BfShOiqNPzcLlsdM24Ndfg4uKF%2BpAiEAjJTpobptG59WlftPo20ahUdxb07ozhl1jfa%2BlW1cE8Iq7QIIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5NzUwNDk4OTMwMDciDAM9Ab6CGWeEdprHYCrBAkpFM9ESb7n1C5a51DkJAPu6uARGphgocTVD2aNMHZtvXBuRhkhd0R6Z3FLvPI12BvreTtnjhvqHNj27IQxZT%2Biv2KBAIAG10IfYmR7uObtgQVvXS3jpi7Tk%2FsXFsVlm0Op%2BK9PfnTwta8GtuvksvSSmMQiajR7Jnn444WW8ZOIqU%2Font0DLA4HgITicJ85F8iRNvpkEzZURmUB5O8QC5EK7xXDEMx1gMpq6yCJnzoKp0pBWvffYjysV9%2BRiyVT7q2xDtNgox7MKFW3YKa8HpPfambgapoSGcUUiXYOfhiMxofL1XX7jdet%2BgKSNrZCrvKXe5YmMb4mDLxfItoc9EwcgV%2BDC%2FfCJguXSJLLRplr%2BdAfA6fZezT%2BMVDsfMPjle2wb%2FwI8oL58YDomR%2FMJWqzYd8j2I39%2BCyZyRdjgxu0NADC%2Fwqm4BjqzAnvCy9ker8dUfqsmOg%2B4bTBWl5ofxxwLoXuBakyVfDjMh9lSzzjwLyJ96ouAb02K3Iq1tPSF7AATk%2FnRDwII1xhd%2BXUB%2FMhiWUSzcOvh2WhrLb8eAyrEFswYwO6%2BuYcYjPdg9Hobw6mqZRfAlJwu5Mx1kWo9tvauzMxc%2B94kLquo7%2BLws%2F4iLETyLb7kX70sq%2Fi6HDJvVI%2Fec8vfbuYIBsOkeWthccU9N39l7zCuEpxAmz3bEgQszBwpvRLhDoxDP2DV%2BbG8zm%2FugOzZyHog%2BCSRR2yWhtHiUohf7hct2Ev4ds0mvF%2B6aq8n1CwOWcAjZ5OWFwlhLE8lZuCJLFv%2BQrJMB2b3KiUCcp6RM1ayT2gcdXitxfZ54yxIPWGj7xau%2FI1M6%2FNPeDLvP2bZ%2By4QYuU2fhM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241012T172806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA6GBMAUSHUDTZOUK5%2F20241012%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7fe8a3f9e94dbcded04aa2b5d2f1f9969fab145805747098381903dfd0de7dd3"
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

      try {
          logger.info(`******beginning of try-catch******`);
          await axios.post(
              `https://graph.facebook.com/v21.0/+27686151614/messages`,
              //`${WHATSAPP_API_URL}/v13.0/your-whatsapp-business-id/messages`,
               messageData,
              {
                headers: {
                  Authorization: `Bearer EAAGUVZCd5HZAUBO8BhydhwAWpoLnWpSZAfofAF8JvmPKNXXbuzd73jQZBmRZCCsX6Yv4kQqxO4AZCQhQyjwXb0enLESWSDo58PcibsYW5NS9IsK1IYXtB0QLDmHTKNY4ASQGp5ZAoWWmLvVV4fTKZByqTZAZAq2PD2JJBhZBUkknFFpgEaCS9tHnLkTBeIHgb7rnv75gyZCnwnyZCWhGibz32HV6PpFKrTxU1n2HZBC0n32210`,
                  //Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
                  Content-Type: `application/json`,
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