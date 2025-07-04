import jwt ,{ JwtPayload } from "jsonwebtoken";
import { AppError } from "./AppError";

export interface DecodedUser extends JwtPayload {
  id: string;
  email?: string;
 
}
export const verifyToken = (token : string , secret : string)=>{
    try {
        const decoded = jwt.verify(token,secret) as DecodedUser
        if (!decoded) throw new AppError(401,"Token missing user ID")
        return decoded
    } catch (error) {
        throw new AppError(401,"Invalid or expired token")
    }
    
}