const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();

const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'manas_auth_secret', // You can change this
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true }
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

// Home
app.get('/', (req, res) => {
  res.send('🎉 Online Learning Platform Backend Running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
