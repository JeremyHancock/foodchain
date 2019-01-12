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

  // GET route for getting all of the links
  app.get("/api/links/", function(req, res) {
    db.Link.findAll({})
      .then(function(dbLink) {
        res.json(dbLink);
      });
  });

  // Get route for returning links of a specific category
  // app.get("/api/links/category/:category", function(req, res) {
  //   db.Link.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbLink) {
  //       res.json(dbLink);
  //     });
  // });

  // Get route for retrieving a single Link
  app.get("/api/links/:id", function(req, res) {
    db.Link.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbLink) {
        res.json(dbLink);
      });
  });

  // POST route for saving a new Link
  app.post("/api/links", function(req, res) {
    console.log("HERE ->>>> api-routes.js line 49: " + JSON.stringify(req.body));
    db.Link.create({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
      person_name: req.body.person_name,
      email: req.body.email,
      phone_number: req.body.phone_number
    })
      .then(function(dbLink) {
        console.log("HERE ->>>> api-routes.js line 58: " + dbLink)
        res.json(dbLink);
      });
  });

  // DELETE route for deleting a single Link
  app.delete("/api/links/:id", function(req, res) {
    db.Link.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbLink) {
        res.json(dbLink);
      });
  });

  // PUT route for updating a single Link
  app.put("/api/links", function(req, res) {
    db.Link.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbLink) {
        res.json(dbLink);
      });
  });
};
