import express from "express";
import createPoll from "../controllers/poll.js";

const router = express.Router();
router.post("/new", createPoll);
export default router;
