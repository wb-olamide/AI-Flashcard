import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import { protect, admin } from "./middleware/authMiddleware.js";
import deckRouter from "./routes/deckRouter.js";
import flashcardrouter from "./routes/flashcardRouter.js";

dotenv.config();
const PORT = process.env.PORT || 3200;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/decks", deckRouter);
app.use("/api/flashcards", flashcardrouter);

// Test
app.get("/", (req, res) => {
  res.send("API is running smoothly...");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

// app.get("/protected", protect, (req, res) => {
//   res.json({ message: "You accessed protected route" });
// });

// mongoose.connect(process.env.MONGODB_URI).then(() =>
//   console.log("MONGODB CONNECTED😎").catch((err) => {
//     console.log(err);
//   }),
// );

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Mongodb connected 😎"))
  .catch((err) => {
    console.log(err);
  });
import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import { protect, admin } from "./middleware/authMiddleware.js";
import deckRouter from "./routes/deckRouter.js";
import flashcardrouter from "./routes/flashcardRouter.js";

dotenv.config();
const PORT = process.env.PORT || 3200;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/decks", deckRouter);
app.use("/api/flashcards", flashcardrouter);

// Test
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

// app.get("/protected", protect, (req, res) => {
//   res.json({ message: "You accessed protected route" });
// });

// mongoose.connect(process.env.MONGODB_URI).then(() =>
//   console.log("MONGODB CONNECTED😎").catch((err) => {
//     console.log(err);
//   }),
// );

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Mongodb connected 😎"))
  .catch((err) => {
    console.log(err);
  });
