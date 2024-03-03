//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());

//db
// const userRoutes = require('./routes/userRoutes');
const inputRoutes = require('./routes/inputRoutes');


const mongoUrl = process.env.MONGO_URI || "mongodb://localhost:27017/hr-app";

mongoose.connect(mongoUrl)
  .then(() => console.log('DB connected'))
  .catch(err => console.error('MongoDB connection error:', err));




//middleware
app.use(morgan('dev'));
app.use(express.json());
//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'An error occurred' });
});


//routes
app.use(express.json());
// app.use('/api', userRoutes);
app.use('/api', inputRoutes);





const port = process.env.PORT || 3001;

//listener

app.listen(port, (error) => {
  if (error) {
    console.error('Failed to start the server:', error);
    return;
  }
  console.log(`Server running on port ${port}`);
});