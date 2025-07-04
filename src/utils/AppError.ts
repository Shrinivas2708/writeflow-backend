export class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;
  
    constructor(statusCode = 500 , message: string ) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }