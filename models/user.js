const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: 'Please enter your first name',
    trim: true
  },
  lastName: {
    type: String,
    required: 'Please enter your last name',
    trim: true
  },
  phoneNumber: {
    type: String,
    required: 'Please enter your phone number',
    trim: true,
    match: [
      '^([0-9]{3}-[0-9]{3}-[0-9]{4}$',
      'Please enter a valid phone number'
    ],
    unique: true
  },
  seated: { type: Boolean, default: false },
  date: { type: Date, default: Date.now, unique: true },
  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
  },
  checkIns: {
    type: Number
  },
  notes: { type: String, maxlength: 280 },
  rewardPoints: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
