// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the codes
  app.get("/api/codes/", function(req, res) {
    db.Code.findAll({})
      .then(function(dbCode) {
        res.json(dbCode);
      });
  });

  // Get route for returning codes of a specific category
  // app.get("/api/codes/category/:category", function(req, res) {
  //   db.Code.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbCode) {
  //       res.json(dbCode);
  //     });
  // });

  // Get route for retrieving a single Code
  app.get("/api/codes/:id", function(req, res) {
    db.Code.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCode) {
        res.json(dbCode);
      });
  });

  // POST route for saving a new Code
  app.post("/api/codes", function(req, res) {
    console.log("HERE ->>>> /routes/api/code.js line 49: " + JSON.stringify(req.body));
    db.Code.create({

    })
      .then(function(dbCode) {
        console.log("HERE ->>>> /routes/api/code.js line 58: " + dbCode)
        res.json(dbCode);
      });
  });

  // DELETE route for deleting a single Code
  app.delete("/api/codes/:id", function(req, res) {
    db.Code.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCode) {
        res.json(dbCode);
      });
  });

  // PUT route for updating a single Code
  app.put("/api/codes", function(req, res) {
    db.Code.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCode) {
        res.json(dbCode);
      });
  });
};
