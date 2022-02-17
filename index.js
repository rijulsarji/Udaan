const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http")

app.use(express.json())
dotenv.config({ path: "./config.env" })

// estabilishing server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`)
})

// for CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// estabilishing connection with database
const dbURI = process.env.DATABASE;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connection with database successful...")
  })

// making api routes

const { Scholarships, Jobs } = require("./udaanSchema");

app.get("/", (req, res) => {
  res.send("Navigate to api/scholarships");
})

// scholarships
app.post(("/api/scholarships"), (req, res) => {
  const data = new Scholarships(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("Scholarship details saved successfully"))
    .catch((err) => console.log("Error while saving scholarship data..."))
})

app.get(("/api/scholarships"), (req, res) => {
  Scholarships.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})
// app.get("/api/scholarships/deleteAllRecords", (req, res) => {
//   Scholarships.deleteMany()
//     .then(console.log("All details have been deleted"))
// })
app.get("/api/ok", (req, res) => {
  const ip = req.ip;
  res.send(ip);
})

// jobs
app.post("/api/jobs", (req, res) => {
  const data = new Jobs(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("Job details saved successfully"))
    .catch(err => console.log("Error while saving job data..."))
})

app.get("/api/jobs", (req, res) => {
  Jobs.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})