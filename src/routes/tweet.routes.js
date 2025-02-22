import express from "express"
import { verifyJWT } from "../middlewares/Auth.middleware.js"
import { createTweet } from "../controllers/tweet.controller.js"

const router = express.Router()



router.post("/", verifyJWT, createTweet)

export default router;