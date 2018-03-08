const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  businessName: {
    type: String,
    required: 'Please enter your first name',
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
  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
  }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;