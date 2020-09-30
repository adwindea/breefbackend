module.exports = app => {
    const resep = require("../controllers/resep.controller.js");

    var router = require("express").Router();

    // Create a new Resep
    router.post("/", resep.create);

    // Retrieve all Resep
    router.get("/", resep.findAll);

    // Upload Image
    router.post("/upload", resep.upload);

    app.use('/api/resep', router);
};