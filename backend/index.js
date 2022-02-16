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

// estabilishing connection with database
const dbURI = process.env.DATABASE;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connection with database successful...")
  })

// making api webpages

const UdaanData = require("./udaanSchema");

app.post(("/api/scholarships"), (req, res) => {
  const data = new UdaanData(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("Details saved successfully"))
    .catch((err) => console.log("Error while saving data..."))
})
