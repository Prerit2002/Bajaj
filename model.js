const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  collegeEmailId: { type: String, required: true },
  collegeRollNumber: { type: String, required: true },
  numbers: [Number],
  alphabets: [String],
});


module.exports = mongoose.model('User', userSchema);
