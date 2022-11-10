const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    title: {
        type: String,
        enum: ['Secretary', 'Joint Secretary', 'Councellor', 'Assistant Dean of Academics', 'Dean of Student Afairs']
    },
    association: {
        type: String,
        enum: ['Club', 'Council', 'Gymkhana', 'Administration']
    }

})

const User = mongoose.model('Users', schema)

module.exports = User;