
const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {type: String
  },
  password: {
    type: String,
    
  }

});

module.exports =  mongoose.model('Client', ClientSchema)

