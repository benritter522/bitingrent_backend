const { Schema, model } = require('mongoose');

const plantSchema = Schema({
    name:           { type: String, required: true },
    color:          { type: String, required: true },
     // any new attributes must 
    // NOT BE REQUIRED

    // newAttribute:     { type: ******, required: false }

    nickname:       { type: String, required: false },
    latinName:      { type: String, required: false },
    img:            { type: String, required: false },
    origin:         { type: String, required: false },
    description:    { type: String, required: false },
    hasFungusGnats: Boolean
});

module.exports = model('Plant', plantSchema);