const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    shopLocation:String,
    stock : {
        orange: {
            type: Number,
            min : 0,
            max: 10000,
        },
        banane: {
            type: Number,
            min : 0,
            max: 10000,
        },
        pomme: {
            type: Number,
            min : 0,
            max: 10000,
        },
        fraise: {
            type: Number,
            min : 0,
            max: 10000,
        },
        cerise: {
            type: Number,
            min : 0,
            max: 10000,
        }
    }
});


module.exports = mongoose.model('Posts', PostSchema);