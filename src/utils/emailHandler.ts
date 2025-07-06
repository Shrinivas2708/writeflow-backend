import axios from "axios";
import { AppError } from "./AppError";
import { VerificationEmailTemplate } from "./exports";
import { generateEmailVerificationToken } from "./generateToken";
import { logger } from "./logger";
import  { createTransport } from "nodemailer";
import { Resend } from "resend";
import {ENV} from "../utils/exports"
const resend = new Resend(process.env.RESEND_API_KEY)
let transport
if (process.env.EMAIL_ENV === "development"){
 transport = createTransport({
  host: process.env.EMAIL_HOST,
  port: 2525,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
});}else{
 transport = createTransport({
    host: "localhost",
    port: 1025,
    ignoreTLS: true,
  });
  }
export const sendEmailVerificationmail = async (
  
  ip: string,
  userId: string,
  email: string
) => {
  let html
  let EmailToken
  try {
   EmailToken = generateEmailVerificationToken(userId, ip, email)
    html = VerificationEmailTemplate(EmailToken,userId)
    logger.info(EmailToken)
  } catch (error) {
    throw new AppError(501 , `Error while generating Email verification token + ${error}`)
  }
  try {
    if (ENV === "dev_server") {

         await transport.sendMail({
          from: "WriteFlow Developer Mode <no-reply@shriii.xyz>",
          to:email,
          subject: "Verify You Email ",
          html,
        });
        return  EmailToken
      }
      else{
        const {data,error} = await resend.emails.send({
          from: "WriteFlow  <no-reply@shriii.xyz>",
          to: email,
          subject: "Verify Your Email ",
          html
        })
        
        if(!data) {
           throw new AppError(500,`Error while sending mail + ${error}`)
           
        }
        logger.info("Mail sent!" + data.id)
      }
  } catch (error) {
    throw new AppError(500,`Error while sending mail using nodemailer + ${error}`)
  }
  
};
