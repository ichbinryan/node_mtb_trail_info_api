const db = require("../models");
const Locations = db.locations;

// Create and Save a new Location
exports.create = (req, res) => {
    res.status(501).send(
        {
            message: "Not yet implemented"
        }
    );
};

// Retrieve all Locations from the database.
exports.retrieveAllLocations = (req, res) => {
    console.log('locations route hit');
    Locations.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving locations."
            });
        });
};

// Find a single Location with an id
exports.retrieveLocationByName = (req, res) => {
    const requestName = req.params.name;
    Locations.find({ "name": { $eq: requestName } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving locations."
            });
        });
};

// Find a single Location by utc id (not currently accessible)
// need to learn how to better handle params in node
exports.retrieveLocationById = (req, res) => {
    const id = req.params.utc_id;
    Locations.find({ "utc_id": { $eq: id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving locations."
            });
        });
};

// Update a Location by the id in the request
exports.update = (req, res) => {
    res.status(501).send(
        {
            message: "Not yet implemented"
        }
    );
};

// Delete a Location with the specified id in the request
exports.delete = (req, res) => {
    res.status(501).send(
        {
            message: "Not yet implemented"
        }
    );
};

// Delete all Locations from the database.
exports.deleteAll = (req, res) => {
    res.status(501).send(
        {
            message: "Not yet implemented"
        }
    );
};

// Find all published Locations
exports.findAllPublished = (req, res) => {
    res.status(501).send(
        {
            message: "Not yet implemented"
        }
    );
};