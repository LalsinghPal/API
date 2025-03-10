const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        public_id: {
            type: String,
            require: true,
        },
        url:{
            type: String,
            require: true,  
        }
    },

    roles: {
        type: String,
        default:'user',
        require: true,

    },
    createdAt:{
        type: Date,
        default:Date.now,
    },
});

const userModel = mongoose.model('user', userSchema);

module.exports= userModel;

