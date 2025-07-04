import jwt from "jsonwebtoken";

export const generateAccessToken = (user: { id: string; name?: string; isAdmin?: boolean }) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET_ACCESSTOKEN!,
    { expiresIn:  "15m" } 
  );
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign(
    { id: userId },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: "7d" } 
  );
};

export const generateEmailVerificationToken = (userId: string,IP : string,email:string) => {
    return jwt.sign(
        {   id: userId,
            IP : IP,
            email : email
        },
        process.env.EMAIL_VERIFICATION_SECRET!,
        {
            expiresIn: "30m"
        }
    )
}