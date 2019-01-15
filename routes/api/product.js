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

  // GET route for getting all of the products
  app.get("/api/products/", function(req, res) {
    db.Product.findAll({})
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for returning products of a specific category
  // app.get("/api/products/category/:category", function(req, res) {
  //   db.Product.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbProduct) {
  //       res.json(dbProduct);
  //     });
  // });

  // Get route for retrieving a single Product
  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // POST route for saving a new Product
  app.post("/api/products", function(req, res) {
    console.log("HERE ->>>> api-routes.js line 49: " + JSON.stringify(req.body));
    db.Product.create({
      Vendors_id: req.body.Vendors_id, // see models/products.js, line 4
      harvest_date: req.body.harvest_date,
      chemicals_used: req.body.chemicals_used,
      certified_organic: req.body.certified_organic,
      vendors_notes: req.body.vendors_notes
    })
      .then(function(dbProduct) {
        console.log("HERE ->>>> api-routes.js line 58: " + dbProduct)
        res.json(dbProduct);
      });
  });

  // DELETE route for deleting a single Product
  app.delete("/api/products/:id", function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // PUT route for updating a single Product
  app.put("/api/products", function(req, res) {
    db.Product.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });
};
