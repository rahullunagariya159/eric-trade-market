const mongoose = require("mongoose");
const moment = require("moment");

let newSocialUser = mongoose.Schema({
    userId: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    profilePic: { type: String },
    createdDate: { type: Date, default: moment() },
    updatedDate: { type: Date },
    status: { type: String, default: "active" },
})

module.exports = new mongoose.model("socialFriends", newSocialUser);