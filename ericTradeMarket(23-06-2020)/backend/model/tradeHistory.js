const mongoose = require("mongoose");
const moment = require("moment");

let newTradeHistory = mongoose.Schema({
    tradeId: {type: String},
    createdBy: {type: String},
    receivedBy: {type: String},
    requestStatus: { type: String },
    createdDate: { type: Date, default: moment() },
    updatedDate: { type: Date },
    status: { type: String, default: "active" },
},{
    collection: 'tradeHistory'
})

module.exports = new mongoose.model("tradeHistory", newTradeHistory);