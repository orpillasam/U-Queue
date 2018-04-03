const db = require('../models');
const apiKeys = require('../apikeys/apikeys.js');
const accountSid = apiKeys.accountSid;
const authToken = apiKeys.authToken;
const myPhoneNumber = apiKeys.myPhoneNumber;
const client = require('twilio')(accountSid, authToken);

// Defining methods for the queueController
module.exports = {
  findAll: function(req, res) {
    db.Guest.find({ inQueue: true }, req.query)
      .sort({ queuePosition: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Guest.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Guest.findOne(req.params.firstName)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Guest.create(req.body)    
      .then(data => {
        let name = data.firstName;
        console.log(data.firstName);
        let phone = data.phoneNumber;
        phone = '+1' + phone;
        console.log(phone);
        client.messages.create({
            body: name + ', Thank you! You are now in the queue for Shore. Download the app at ... .',
            to: phone,  // Text this number
            from: myPhoneNumber // From a valid Twilio number
      })
      .then((message) => console.log(message.sid)) 
      .catch(err => res.status(422).json(err));
      })
      .then(data => res.json(data));
  },
  update: function(req, res) {
    db.Guest.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { inQueue: false } },
      req.body
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Guest.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
