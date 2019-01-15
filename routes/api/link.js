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
    console.log("HERE ->>>> /routes/api/link.js line 49: " + JSON.stringify(req.body));
    db.Link.create({
      product_id: req.body.product_id,
      vendor_id: req.body.vendor_id,
      code_id: req.body.code_id,
      location: req.body.location
    })
      .then(function(dbLink) {
        console.log("HERE ->>>> /routes/api/link.js line 58: " + dbLink)
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
