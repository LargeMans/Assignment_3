let mongoose = require('mongoose');

// assignment model
let assignmentModel = mongoose.Schema({
    name: String,
    Due_date: String,
    description: String, 
    },
    {
        collection: "assignments"
    }
);
module.exports = mongoose.model('assignments', assignmentModel);
