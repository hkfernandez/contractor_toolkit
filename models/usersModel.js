const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  passwaord: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User