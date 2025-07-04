import express from "express";
const router = express.Router();
import { signup, login, verify, passwordReset, deleteAccount,refreshToken,logout, checkemail } from "../controller/auth.controller";
import { catchAsync } from "../utils/cathAsync";
router.post("/signup",  signup)
router.post("/login", login)
router.get("/verify", verify)
router.post("/password-reset", passwordReset)
router.delete("/delete-account", deleteAccount)
router.get("/refresh", refreshToken)
router.post("/logout" , logout)
router.get("/email-exist" , checkemail)
export default router ;