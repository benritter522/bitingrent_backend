const express = require('express');
const songs = express.Router();
const Song = require('../models/song');
const { sendError } = require('../sendErrorJSON');

// const jwt for authentication

// const SECRET for authentication

// const auth for authentication

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
songs.get('/', async (req, res) => {
    try {
        const foundSongs = await Song.find({});
        res.status(200).json(foundSongs);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
});

// Delete
songs.delete('/:id', /*auth, */ async (req, res) => {
    try {
        const deletedSong = await Song.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedSong);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
})
;
// Update
songs.put('/:id', async (req, res) => {
    try {
        const updatedSong = await Song.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
        res.status(200).json(updatedSong);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
});

// Create
songs.post('/', async (req, res) => {
    try {
        const createdSong = await Song.create(req.body);
        res.status(200).json(createdSong);
    } catch(error) {
        res.status(400).json({msg: error.message});
    }
});

// Show
songs.get('/:id', async (req, res) => {
    try {
        const shownSong = await Song.findById(req.params.id);
        res.status(200).json(shownSong);
    } catch(error) {
        res.status(400).json({msg: error.message});
        // ^ might do this for the other error messages 
    }
});

module.exports = songs;