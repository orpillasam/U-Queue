import axios from 'axios';

export default {
  // Gets all books
  getQueue: function() {
    return axios.get('/api/queue');
  },
  getQueueHistory: function() {
    return axios.get('/api/queuehistory');
  },
  // Gets the book with the given id
  getGuest: function(id) {
    return axios.get('/api/queue/' + id);
  },
  // Deletes the book with the given id
  removeGuestFromQueue: function(id) {
    return axios.put('/api/queue/' + id);
  },
  saveGuest: function(guestData) {
    return axios.post('/api/queue', guestData);
  },
  saveAccount: function(accountData) {
    return axios.post('/api/account', accountData);
  },
  saveSignup: function(accountData) {
    return axios.post('/api/signup', accountData);
  },
  saveAccountEdit: function(accountData) {
    return axios.post('/api/accountedit', accountData);
  },
  getAccount: function(id) {
    return axios.get('/api/account/' + id);
  },
  validateAccount: function(accountData) {
    return axios.post('/api/account', accountData);
  },
  sendTwilio: function(id) {
    return axios.get('/api/twilio/' + id);
  }
};

// app.get("/api/all/users/:id", function (req, res) {
//   var id = req.params.id;
//   db.users.findById(id).then(data => {
//     const name = data.get({
//       plain: true
//     }).name;
//     let phone = data.get({
//       plain: true
//     }).phone;
//    phone = '+1' + phone.replace(/-/g,'');
//     //const phone data
//     console.log(phone);
//     client.messages.create({
//       body: 'Thank you for using SchoolPool! You will be riding with ' + name + '. Please contact them at ' + phone + ' and set up a pick up location.',
//       to: phone,  // Text this number
//       from: '+19495569807' // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));
//    res.json(data);
// });
//  });
