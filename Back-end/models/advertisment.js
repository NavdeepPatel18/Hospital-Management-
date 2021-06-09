const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const advertismentSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dateIn: {
    type: Date,
    required: true,
  },
  dateOut: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Advertisment", advertismentSchema);
