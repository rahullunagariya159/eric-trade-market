const mongoose = require("mongoose");
const moment = require("moment");

let newTrade = mongoose.Schema(
  {
    name: { type: String },
    quantity: { type: Number },
    amount: { type: mongoose.Schema.Types.Decimal128 },
    createdBy: { type: String },
    updatedBy: { type: String },
    createdDate: { type: Date, default: moment() },
    updatedDate: { type: Date },
    status: { type: String, default: "active" },
  },
  {
    collection: "trade",
  }
);

module.exports = new mongoose.model("trade", newTrade);
