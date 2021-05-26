const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lasName: {
        type: String, 
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    username: {
        type: String,
    },
});

module.exports = mongoose.model ('user', userSchema);