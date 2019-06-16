const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const productSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    deleteAt: {
        type: Date,
        default: null

    }
}, { timestamps: true } );


module.exports = mongoose.model('product', productSchema);
