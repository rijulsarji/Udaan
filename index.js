const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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
const dbURI =
  "mongodb+srv://udaanProject:Boat1200@udaan.onr8q.mongodb.net/Udaan?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connection with database successful...")
  })

// making api routes

const UdaanData = require("./udaanSchema");
const { db } = require("./udaanSchema");

app.get("/", (req, res) => {
  res.send("Navigate to api/scholarships");
})

app.post(("/api/scholarships"), (req, res) => {
  const data = new UdaanData(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("Details saved successfully"))
    .catch((err) => console.log("Error while saving data..."))
})

app.get(("/api/scholarships"), (req, res) => {
  UdaanData.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})