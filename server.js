const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const mongoose = require('mongoose');
const db = mongoose.connection;

//verify the DB connection
//this can be necesary and can be removed
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () {
  console.log('Connected to mongoDB!');
});

app.use(routes)

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () =>
  console.log('listening on port ', PORT)
)