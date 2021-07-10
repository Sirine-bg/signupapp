const Client = require("../models/client");
const express = require("express");
const router = express.Router();
const bcrypt = require ('bcrypt');
router.post('/', async (req, res) => {
  const saltPassword= await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash (req.body.password,saltPassword)
    const newClient = new Client({ 
      name: req.body.name,
      email: req.body.email,
     password: securePassword

    })
    newClient
    .save()
    .then(() => res.send("Client has been added with success"))
    .catch((err) => res.send(err));
  });
module.exports = router;