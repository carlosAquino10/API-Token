import { Router } from "express";

import UserRouter from "./UserRoutes"
import PostRouter from "./PostRoutes"
import CommentRouter from "./CommentRoutes"

const rotear = Router();

const allRoutes = [UserRouter, PostRouter, CommentRouter];
rotear.use(allRoutes);

export default rotear;