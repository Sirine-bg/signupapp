const express = require('express');

const connectdb = require("./config/connectdb");
// const dotenv = require('dotenv');
var  cors = require('cors');
const app = express();

app.use(cors());
// dotenv.config();


app.use(express.json());
app.use("/api/clients", require("./routes/client"));


connectdb();
const PORT = process.env.PORT || 5000;
app.listen(PORT, err =>
  err ? console.error(err) : console.log(`server is running on ${PORT}`))