import axios from "axios";
import { AppError } from "./AppError";
import { VerificationEmailTemplate } from "./constData";
import { generateEmailVerificationToken } from "./generateToken";
import { logger } from "./logger";
import nodemailer, { createTransport } from "nodemailer";
const ENV = process.env.NODE_ENV;

const transport = createTransport({
  host: process.env.EMAIL_HOST,
  port: 2525,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
});
export const sendEmailVerificationmail = async (
  
  ip: string,
  userId: string,
  email: string
) => {
  try {
    const token = generateEmailVerificationToken(userId, ip, email);
    logger.info(`Verification Token for userId : ${userId} is ${token} `)
    const html = VerificationEmailTemplate(token);
    try {
      if (ENV === "development") {
        return await transport.sendMail({
          from: "WriteFlow Developer Mode <no-reply@shriii.xyz",
          to:email,
          subject: "Verify You Email ",
          html,
        });
      }
    } catch (error : any) {
      logger.error("Error while sending mail" + error.message)
      throw new Error(error.message)
     
    }
  } catch (error : any) {
    logger.error("Error while generating email verification token mail "+ " " + error.message)
    throw new Error(error.message)
    
  }
};
