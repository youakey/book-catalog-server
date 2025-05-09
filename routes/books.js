
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

router.post('/', async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

router.put('/:id', async (req, res) => {
  await Book.update(req.body, { where: { id: req.params.id } });
  res.json({ success: true });
});

router.delete('/:id', async (req, res) => {
  await Book.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

module.exports = router;
