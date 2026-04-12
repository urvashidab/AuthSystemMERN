import express from "express";
import { logIn, logout, registration } from "../controllers/authController.js";
const router = express.Router();

router.post("/signup", registration);

router.post("/login", logIn);

router.get("/logout", logout);

export default router;
