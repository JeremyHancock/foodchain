// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var dotENV = require("dotenv");
var keys = dotENV.load();
// console.log(keys);

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// var maps = process.env.GOOGLE_MAPS_API; <-- may use this here, may not

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api/code.js")(app);
require("./routes/api/vendor.js")(app);
require("./routes/api/consumer.js")(app);
require("./routes/api/link.js")(app);
require("./routes/api/product.js")(app);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ 
  // force: true 
}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
