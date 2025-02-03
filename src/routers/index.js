import { Router } from "express";
import { classifyNumber } from "../controllers/index.js";

const apiRouter = Router()

apiRouter.get('/classify-number', classifyNumber)

export default apiRouter