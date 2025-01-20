import express from "express";
import createPoll from "../controllers/poll.js";
import togglePoll from "../controllers/togglePoll.js";

const router = express.Router();
router.post("/new", createPoll);
router.post("/toggle", togglePoll);
export default router;
