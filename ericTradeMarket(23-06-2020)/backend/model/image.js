const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    image: { data: Buffer, contentType: String, path: String,userId: String }
});

module.exports = new mongoose.model('Image', imageSchema);