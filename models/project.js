const { Schema, model } = require('mongoose');

const projectSchema = Schema({
    title:      { type: String, required: false },
    image:      { type: String, required: false },
    // links:      { type: [String], required: true } 
    links:      [{ label: String, url: String }] // adding descriptions to links

    // any new attributes must 
    // NOT BE REQUIRED

    // newAttribute:     { type: ******, required: false }


});

module.exports = model('Project', projectSchema);