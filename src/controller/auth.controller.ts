import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { verifyToken } from "../utils/verifyToken";
import { generateAccessToken } from "../utils/generateToken";
import { sendEmailVerificationmail } from "../utils/emailHandler";
import { prisma } from "..";
import { logger } from "../utils/logger";
import axios from "axios";

export const checkemail = async (req : Request , res : Response) =>{
  const {email} = req.query
try {
      const Verification = await axios.get(
          `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.EMAIL_VALIDATION_API}&email=${email}`
        )
      
        if(Verification.data.deliverability == "UNDELIVERABLE"){
          throw new AppError(401, "Email doesnt exist");
        }
        res.status(200).json({
          "msg": "Email Exists!"
        })
     } catch (error:any) {
       throw new AppError(500, error);
     }
}
export const signup = async (req: Request, res: Response) => {
  const { username, firstName, lastName, email, password } = req.body;
  const ip = req.ip!;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        firstName,
        lastName,
        email,
        password,
      },
    });
    const userId = user.id;
    await sendEmailVerificationmail(ip, userId, email);
    res.status(200).send("Email Sent!");
  } catch (error: any) {
    throw new AppError(500, error);
  }
};

export const login = async (req: Request, res: Response) => {
  res.send("Login route");
};
export const verify = async (req: Request, res: Response) => {
  res.send("verify route");
};
export const passwordReset = async (req: Request, res: Response) => {
  res.send("Password reset route");
};
export const deleteAccount = async (req: Request, res: Response) => {
  res.send("Delete account route");
};
export const refreshToken = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) throw new AppError(401, "Refresh token missing!");
  try {
    const decoded = verifyToken(token, process.env.REFRESH_TOKEN_SECRET!);

    const accessToken = generateAccessToken({
      id: decoded.id,
      name: decoded.name,
      isAdmin: decoded.isAdmin,
    });
    res.status(200).json({ accessToken });
  } catch (error) {}
};
export const logout = async (req: Request, res: Response) => {
  res.send("Logout route");
};
