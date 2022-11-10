const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    club: {
        type: String,
        enum: ['Club of Programmers']
    },
    details: String,
    requireApproval: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Users'
    },
    approvedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Users'
    }

})

const Event = mongoose.model('Events', schema)

module.exports = Event;