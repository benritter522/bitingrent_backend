const { Schema, model } = require('mongoose');

const projectSchema = Schema({
    title:      { type: String, required: true },
    image:      { type: String, required: true },
    links:      { type: [String], required: true }
    // any new attributes must 
    // NOT BE REQUIRED

    // newAttribute:     { type: ******, required: false }


});

module.exports = model('Project', projectSchema);