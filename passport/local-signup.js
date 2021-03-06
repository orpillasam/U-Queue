const db = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    businessName: req.body.businessName.trim()
  };

  // db.User
  //   .create(userData)
  //   .then(dbModel => done(null))
  //   .catch(err => done(err));

  const newAccount = new db.Account(userData);
  newAccount.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
