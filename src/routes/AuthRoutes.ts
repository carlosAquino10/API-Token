import { Router } from "express";
import AuthController from "../controllers/AuthController";

const RotearAutenti = Router();

RotearAutenti.post("/api/auth/signin", AuthController.signIn);

RotearAutenti.post("/api/auth/signup", AuthController.signUp);

export default RotearAutenti;