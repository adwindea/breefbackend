const db = require("../models");
const Resep = db.resep;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    //Create resep
    const resep = new Resep({
        title: req.body.title,
        description: req.body.description
    });
    //Save in db
    resep
        .save(resep)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while creating resep"
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Resep.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while retrieving resep."
            });
        });
};

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {

// };

// Update a Tutorial by the id in the request
// exports.update = (req, res) => {

// };

// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {

// };

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// };