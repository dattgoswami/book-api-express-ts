import { Router } from "express";
import { Book, books } from "../models/book";

const router = Router();

router.get("/", (req, res) => res.json(books));

router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === +req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

router.post("/", (req, res) => {
  const book: Book = req.body;
  books.push(book);
  res.status(201).json(book);
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  books[index] = req.body;
  res.json(books[index]);
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  books.splice(index, 1);
  res.json({ message: "Book deleted" });
});

export default router;
