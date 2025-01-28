import express from "express";
import createPoll from "../controllers/poll.js";
import togglePoll from "../controllers/togglePoll.js";
import getPolls from "../controllers/getPolls.js";
import deletePoll from "../controllers/deletePoll.js";
import getPoll from "../controllers/getPoll.js";
import Vote from "../controllers/vote.js";

const router = express.Router();
router.post("/new", createPoll);
router.post("/toggle", togglePoll);
router.post("/fetchall", getPolls);
router.delete("/delete", deletePoll);
router.post("/fetch", getPoll);
router.post("/vote", Vote);
export default router;
