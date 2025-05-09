
const express = require('express');
const cors = require('cors');
const app = express();
const booksRouter = require('./routes/books');

app.use(cors());
app.use(express.json());
app.use('/api/books', booksRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
