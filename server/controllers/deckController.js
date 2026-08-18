import Deck from "../models/deck.js";

export const createDeck = async (req, res) => {
  try {
    const deck = await Deck.create({
      title: req.body.title,
      user: req.user._id,
    });

    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export const getDecks = async (req, res) => {
  try {
    const decks = await Deck.find({ user: req.user._id });
    // console.log(req.user);

    res.json(decks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDecks = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id);
    if (!deck) {
      return res.status(404).json({ message: "Deck not found" });
    }
    if (deck.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await deck.deleteOne();
    res.json({ message: "Deck removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
