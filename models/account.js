const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  businessName: {
    type: String,
    required: 'Please enter your business name',
    trim: true
  },
  website: {
    type: String,
    required: 'Please enter your website',
    trim: true
  },
  ownerName: {
    type: String,
    required: 'Please enter your name',
    trim: true
  },
  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
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
  address: {
    type: String,
    required: "Please enter your address",
    trim: true
  },
  city: {
    type: String,
    required: "Please enter your city",
    trim: true
  },
  stateName: {
    type: String,
    required: "Please enter your state",
    trim: true
  },
  zipCode: {
    type: String,
    required: "Please enter your zip code",
    trim: true
  },
  logo: {
    type: String
  }


});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
