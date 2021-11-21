const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('Product', schema);
