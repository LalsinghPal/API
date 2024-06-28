const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
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

   
});

const categoryModel = mongoose.model('category', categorySchema);

module.exports= categoryModel;

