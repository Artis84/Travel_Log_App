var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true
};

const requiredNumber = {
  type: Number,
  required: true
};

var blogSchema = new Schema({
  title: requiredString, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  rating: {
    type: Number,
    min: 6,
    max: 12
  },
  latitude: {
    requiredNumber,
    min: -90,
    max: 90
  },
  longitude: {
    min: -180,
    max: 180
  },
  visitDate: {
    required: true,
    type: Date
  },
  timestamps: true
});

const LogEntry = mongoose.model("LogEntry", blogSchema);

module.exports = LogEntry;
