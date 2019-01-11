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

  // GET route for getting all of the vendors
  app.get("/api/vendors/", function(req, res) {
    db.Vendor.findAll({})
      .then(function(dbVendor) {
        res.json(dbVendor);
      });
  });

  // Get route for returning vendors of a specific category
  app.get("/api/vendors/category/:category", function(req, res) {
    db.Vendor.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbVendor) {
        res.json(dbVendor);
      });
  });

  // Get route for retrieving a single Vendor
  app.get("/api/vendors/:id", function(req, res) {
    db.Vendor.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbVendor) {
        res.json(dbVendor);
      });
  });

  // POST route for saving a new Vendor
  app.post("/api/vendors", function(req, res) {
    console.log("HERE ->>>> api-routes.js line 49: " + JSON.stringify(req.body));
    db.Vendor.create({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
      company_name: req.body.company_name,
      email: req.body.email,
      phone_number: req.body.phone_number
    })
      .then(function(dbVendor) {
        console.log("HERE ->>>> api-routes.js line 58: " + dbVendor)
        res.json(dbVendor);
      });
  });

  // DELETE route for deleting a single Vendor
  app.delete("/api/vendors/:id", function(req, res) {
    db.Vendor.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbVendor) {
        res.json(dbVendor);
      });
  });

  // PUT route for updating a single Vendor
  app.put("/api/vendors", function(req, res) {
    db.Vendor.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbVendor) {
        res.json(dbVendor);
      });
  });
};
