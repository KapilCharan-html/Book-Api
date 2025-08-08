// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Sample book data
const books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 2, title: '1984', author: 'George Orwell' },
];

// Root route (optional)
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book API. Visit /books to get the list of books.');
});

// Route to get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
