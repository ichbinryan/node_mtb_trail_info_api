module.exports = app => {
    const locations = require("../controllers/location.controller");

    var router = require("express").Router();

    // Retrieve all Locations
    router.get("/", locations.retrieveAllLocations);

    // Retrieve a single location by name
    router.get("/:name", locations.retrieveLocationByName);

    app.use('/api/locations', router);
}