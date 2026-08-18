import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  createFlashcard,
  deleteFlashcard,
  getFlashcards,
  updateFlashcardStats,
} from "../controllers/flashcardController.js";

router.post("/", protect, createFlashcard);
router.get("/:deckId", protect, getFlashcards);
router.delete("/:id", protect, deleteFlashcard);
router.put("/:id", protect, updateFlashcardStats);

export default router;
