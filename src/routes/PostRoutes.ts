import { Router } from "express";
import PostController from "../controllers/PostController";

const PosRoteador = Router();

PosRoteador.post("/api/post", PostController.createPost);
PosRoteador.get("/api/post", PostController.listPosts);
PosRoteador.patch("/api/post/:id", PostController.updatePost);
PosRoteador.delete("/api/post/:id", PostController.deletePost);

export default PosRoteador;