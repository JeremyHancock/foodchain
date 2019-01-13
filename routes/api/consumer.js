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

  // GET route for getting all of the consumers
  app.get("/api/consumers/", function(req, res) {
    db.Consumer.findAll({})
      .then(function(dbConsumer) {
        res.json(dbConsumer);
      });
  });

  // Get route for returning consumers of a specific category
  // app.get("/api/consumers/category/:category", function(req, res) {
  //   db.Consumer.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbConsumer) {
  //       res.json(dbConsumer);
  //     });
  // });

  // Get route for retrieving a single consumer
  app.get("/api/consumers/:id", function(req, res) {
    db.Consumer.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbConsumer) {
        res.json(dbConsumer);
      });
  });

  // POST route for saving a new consumer
  app.post("/api/consumers", function(req, res) {
    db.Consumer.create({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
      person_name: req.body.person_name,
      email: req.body.email,
      phone_number: req.body.phone_number
    })
      .then(function(dbConsumer) {
        console.log("HERE ->>>> routes/api/consumer.js line 58: " + JSON.stringify(dbConsumer))
        res.json(dbConsumer);
      });
  });

  // DELETE route for deleting a single consumer
  app.delete("/api/consumers/:id", function(req, res) {
    db.Consumer.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbConsumer) {
        res.json(dbConsumer);
      });
  });

  // PUT route for updating a single consumer
  app.put("/api/consumers", function(req, res) {
    db.Consumer.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbConsumer) {
        res.json(dbConsumer);
      });
  });
};
