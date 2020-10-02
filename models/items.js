const mongoose = require('mongoose');

const Items = mongoose.model("Items", {
    type: String,
    name: String,
    price: Number,
    photo: String
})

module.exports = Items;