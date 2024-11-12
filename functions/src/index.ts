/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { getAuth, UserRecord } from "firebase-admin/auth";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
export const addReviewerRole = functions.https.onCall(
  (data: any, context: any) => {
    return admin
      .auth()
      .getUserByEmail(data.email)
      .then((user: any) => {
        return admin.auth().setCustomUserClaims(user.uid, {
          role: "reviewer",
        });
      })
      .then(() => {
        return {
          message: `Success! ${data.email} has been made a reviewer.`,
        };
      })
      .catch((err: any) => {
        return err;
      });
  }
);

export const addApplicantRole = functions.https.onCall(
  (data: any, context: any) => {
    return admin
      .auth()
      .getUserByEmail(data.email)
      .then((user: any) => {
        return admin.auth().setCustomUserClaims(user.uid, {
          role: "applicant",
        });
      })
      .then(() => {
        return {
          message: `Success! ${data.email} has been made an applicant.`,
        };
      })
      .catch((err: any) => {
        return err;
      });
  }
);

export const getReviewers = onRequest(async (req, res) => {
  try {
    const reviewerUserIds: string[] = [];

    const listAllUsers = async (nextPageToken?: string) => {
      const listUsersResult = await getAuth().listUsers(1000, nextPageToken);
      listUsersResult.users.forEach((userRecord: UserRecord) => {
        if (
          userRecord.customClaims &&
          userRecord.customClaims["role"] === "reviewer"
        ) {
          reviewerUserIds.push(userRecord.uid);
        }
      });
      if (listUsersResult.pageToken) {
        await listAllUsers(listUsersResult.pageToken);
      }
    };

    await listAllUsers();

    res.status(200).json({ reviewers: reviewerUserIds });
  } catch (error) {
    logger.error("Error retrieving reviewers:", error);
    res.status(500).send("Failed to retrieve reviewers");
  }
});
