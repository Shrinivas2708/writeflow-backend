require("dotenv").config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./middlewares/errorHandler";
import { PrismaClient } from "@prisma/client";
import authRouter from "./routes/auth.routes";
import chalk from "chalk";
import { resendWebhookHandler } from "./controller/webhooks.controller";
import { cleanupHandler } from "./controller/cleanup.controller";
import blogRouter from "./routes/blogs.routes";

export const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Welcome to WriteFlow APIs!"
  })
})
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blogs", blogRouter);
app.post("/api/webhooks/resend", resendWebhookHandler);
app.delete("/api/cron/cleanup",cleanupHandler)
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`${chalk.green(`Started Backend on port ${PORT}`)}`);
});
