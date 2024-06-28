import { Router } from "express";
import UserController from "../controllers/UserController";

const UsuarioRota = Router();

UsuarioRota.get("/api/users", UserController.listUsers);
UsuarioRota.post("/api/user", UserController.createUser);
UsuarioRota.patch("/api/user/:id", UserController.updateUser);
UsuarioRota.delete("/api/user/:id", UserController.deleteUser);

export default UsuarioRota;