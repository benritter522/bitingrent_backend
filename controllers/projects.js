const express = require('express');
const projects = express.Router();
const Project = require('../models/project');

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
projects.get('/', async (req, res) => {
    try {
        const foundProjects = await Project.find({});
        res.status(200).json(foundProjects);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
});

// Delete
projects.delete('/:id', /*auth, */ async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedProject);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
});

// Update
projects.put('/:id', async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
        res.status(200).json(updatedProject);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
});

// Create
projects.post('/', async (req, res) => {
    try {
        const createdProject = await Project.create(req.body);
        res.status(200).json(createdProject);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
});

// Show
projects.get('/:id', async (req, res) => {
    try {
        const shownProject = await Project.findById(req.params.id);
        res.status(200).json(shownProject);
    } catch(error) {
        res.status(400).json({msg: error.message});
        // ^ might do this for the other error messages 
    }
});

module.exports = projects;