const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scholarshipSchema = new Schema({
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

const jobSchema = new Schema({
  post: {
    type: String,
  },
  govtOrg: {
    type: String,
  },
  vacancies: {
    type: String,
  },
  lastDate: {
    type: String,
  },
  ageLimit: {
    type: String,
  },
  payScale: {
    type: String,
  },
  apply: {
    type: String
  },
  website: {
    type: String,
  },
});

const Scholarships = mongoose.model("scholarships", scholarshipSchema);
const Jobs = mongoose.model("jobs", jobSchema);

module.exports = { Scholarships, Jobs };