import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createDeck,
  deleteDecks,
  getDecks,
} from "../controllers/deckController.js";

const router = express.Router();

router.post("/", protect, createDeck);
router.get("/", protect, getDecks);
router.delete("/:id", protect, deleteDecks);

export default router;
