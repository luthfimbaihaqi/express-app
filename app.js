const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const contactController = require('./controllers/contactController');

// Membuat routes
app.get('/', homeController.index);
app.get('/about', aboutController.index);
app.get('/contact', contactController.index);

// Membuat server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
