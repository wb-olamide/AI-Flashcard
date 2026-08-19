import Flashcard from "../models/flashcard.js";

export const createFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.create({
      question: req.body.question,
      answer: req.body.answer,
      deck: req.body.deck,
      user: req.user._id,
    });
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFlashcards = async (req, res) => {
  try {
    const flashcard = await Flashcard.find({
      deck: req.params.deckId,
      user: req.user._id,
    });
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }
    if (flashcard.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await flashcard.deleteOne();
    res.json({ message: "Flashcard removed" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateFlashcardStats = async (req, res) => {
  try {
    const { isCorrect } = req.body;

    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    // confirm if flashcard is for the owner
    if (flashcard.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    if (isCorrect) {
      flashcard.correctCount += 1;
    } else {
      flashcard.wrongCount += 1;
    }
    await flashcard.save();
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
