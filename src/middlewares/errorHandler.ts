import chalk from "chalk";
import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.log(
    chalk.bgRed.white.bold(" ERROR "),
    chalk.red(`→ [${req.method}] ${req.url}`),
    "\n",
    chalk.bgYellow.white.bold(` Status: `), chalk.yellowBright(statusCode),
    "\n",
    chalk.bgMagenta.white.bold(` Message: `), chalk.magentaBright(message),
    "\n",
    chalk.gray(err.stack)
  );
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
