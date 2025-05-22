import express from "express";
import { login } from "../controllers/authController.js";
import { logger } from "../middlewares/logMiddleware.js";
const router = express.Router();

router.post("/login", logger, login);

export default router;
