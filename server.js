const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const noteRoutes = require('./routes/note-routes')

mongoose.connect(process.env.URI);

app.use('/notes', noteRoutes);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});