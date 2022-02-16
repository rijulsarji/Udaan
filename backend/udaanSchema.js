const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const udaanSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  eligibility: {
    type: String
  },
  benefits: {
    type: String
  },
  contact: {
    type: String
  },
  website: {
    type: String
  }
})

const UdaanData = mongoose.model("scholarships", udaanSchema);
module.exports = UdaanData;