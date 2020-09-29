module.exports = app => {
    const resep = require("../controllers/resep.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", resep.create);

    // Retrieve all Tutorials
    router.get("/", resep.findAll);

    // Retrieve a single Tutorial with id
    // router.get("/:id", resep.findOne);

    // Update a Tutorial with id
    // router.put("/:id", resep.update);

    // Delete a Tutorial with id
    // router.delete("/:id", resep.delete);

    // Create a new Tutorial
    // router.delete("/", resep.deleteAll);

    app.use('/api/resep', router);
};