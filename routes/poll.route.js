import express from "express";
import createPoll from "../controllers/poll.js";
import togglePoll from "../controllers/togglePoll.js";
import getPolls from "../controllers/getPolls.js";

const router = express.Router();
router.post("/new", createPoll);
router.post("/toggle", togglePoll);
router.post("/fetchall", getPolls);
export default router;
