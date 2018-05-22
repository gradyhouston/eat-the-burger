var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll(
        {
            order: [ 'updatedAt', 'id' ]
        }
    ).then(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(result) {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update(req.body,
        {
            where: { id: req.params.id }
        }
    ).then(function(result) {
        res.json(result);
    });
});

router.delete("/api/burgers", function(req, res) {
    db.Burger.destroy({ where: {} }).then(function(result) {
        res.json(result);
    });
});

// Export routes for server.js to use.
module.exports = router;
