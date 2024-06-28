import { Router } from "express";
import CommentController from "../controllers/CommentController";

const RotearComentario = Router();

RotearComentario.post("/api/comment", CommentController.createComment);
RotearComentario.get("/api/comment", CommentController.listComments);
RotearComentario.patch("/api/comment/:id", CommentController.updateComment);
RotearComentario.delete("/api/comment/:id", CommentController.deleteComment);

export default RotearComentario;