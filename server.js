// Load express
const express = require('express');
const path = require('path');

//require the cars "database"
// Move this database out of the views folder only view templates should be stored in the views folder
const carsDb = require('./views/data/cars-db')

// Create our express app
const app = express();

//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
//Mount middleware (app.use)

//Mount routes

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello Express!</h1>');
});

app.get('/home', function (req, res) {
    res.render('home');
  });

  app.get('/cars', function(req, res) {
    const cars = carsDb.getAll();
    res.render('cars/index', { cars });
  });
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});