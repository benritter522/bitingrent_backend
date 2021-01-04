const express = require('express');
const plants = express.Router();
const Plant = require('../models/plant');
const { sendError } = require('../sendErrorJSON');

// const jwt for auth

// const SECRET for auth

// const auth for auth

// ======================================================================================
//                  REST ROUTES - "REpresentational State Transfer" - INDUCES
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//      -    INDEX   -   NEW -   DELETE  -   UPDATE -   CREATE  -   EDIT    -   SHOW    -
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/*
Index - Display all of a list of resources - '/<nameOfResource>' GET
// New - DON'T NEED "N-E-MORE"
Delete - Destroy a resource - '/<nameOfResource>/:id' DELETE
Update - Update a resource - '/<nameOfResource>/:id' PUT
Create - Create a new resource - '/<nameOfResource>/' POST 
// Edit - DON'T NEED "N-E-MORE"
Show - Display an individual resource - '/<nameOfResource>/:id' GET
*/

// Index
plants.get('/', async (req, res) => {
    try {
        const foundPlants = await Plant.find({});
        res.status(200).json(foundPlants);
    } catch(error) {
        res.status(400).json({msg: error.message});
        // sendError({msg: error.message});
    }
});

// Delete
plants.delete('/:id', /*auth, */ async (req, res) => {
    try {
        const deletedPlant = await Plant.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedPlant);
    } catch(error) {
        res.status(400).json({msg: error.message});
        // sendError(error);
    }
})

// Update
plants.put('/:id', async (req, res) => {
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
        res.status(200).json(updatedPlant);
    } catch(error) {
        res.status(400).json({msg: error.message});
        // sendError(error);
    }
});

// Create
plants.post('/', async (req, res) => {
    try {
        const createdPlant = await Plant.create(req.body);
        res.status(200).json(createdPlant);
    } catch(error) {
        res.status(400).json({msg: error.message});
        // sendError(res, error);
    }
});

// Show
plants.get('/:id', async (req, res) => {
    try {
        const shownPlant = await Plant.findById(req.params.id);
        res.status(200).json(shownPlant);
    } catch(error) {
        res.status(400).json({msg: error.message});
        // sendError({msg: error.message});
        // ^ might do this for the other error messages 
    }
});

module.exports = plants;