const mongoose = require('mongoose')

mongoose.connect(
  `mongodb://localhost:27017/app`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);