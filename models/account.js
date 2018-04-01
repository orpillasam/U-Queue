const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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
  phoneNumber: {
    type: String,
    required: 'Please enter your phone number',
    trim: true,
    // match: [
    //   '^([0-9]{3}-[0-9]{3}-[0-9]{4}$',
    //   'Please enter a valid phone number'
    // ],
    unique: true
  },
  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    type: String,
    required: 'Please enter your password',
    trim: true
  },
  address: {
    type: String,
    required: 'Please enter your address',
    trim: true
  },
  city: {
    type: String,
    required: 'Please enter your city',
    trim: true
  },
  stateName: {
    type: String,
    required: 'Please enter your state',
    trim: true
  },
  zipCode: {
    type: String,
    required: 'Please enter your zip code',
    trim: true
  },
  logo: {
    type: String
  }
});


/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
accountSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
accountSchema.pre('save', function saveHook(next) {
  const account = this;

  // proceed further only if the password is modified or the user is new
  if (!account.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(account.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      account.password = hash;

      return next();
    });
  });
});


const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
