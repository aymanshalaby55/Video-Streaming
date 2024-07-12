const express = require('express');

const userRoutes = require('./routes/userRoutes');
const videoRoutes = require('./routes/videoRoutes');

// variables
const app = express();


// routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/videos', videoRoutes);

module.exports = app;