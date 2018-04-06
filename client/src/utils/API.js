import axios from 'axios';

export default {
  // Gets all guests
  getQueue: function() {
    return axios.get('/api/queue');
  },
  getQueueHistory: function() {
    return axios.get('/api/queuehistory');
  },
  // Gets the guest with the given id
  getGuest: function(id) {
    return axios.get('/api/queue/' + id);
  },
  // Moves guest with the given id from waiting to not
  removeGuestFromQueue: function(id) {
    return axios.put('/api/queue/' + id);
  },
  // Moves guest from history back to waiting
  moveGuest: function(id) {
    return axios.put('/api/queuehistory/' + id);
  },
  // Creates new guest
  saveGuest: function(guestData) {
    return axios.post('/api/queue', guestData);
  },
  // Creates restaurant account
  saveAccount: function(accountData) {
    return axios.post('/api/account', accountData);
  },
  saveSignup: function(accountData) {
    return axios.post('/api/signup', accountData);
  },
  saveAccountEdit: function(accountData) {
    return axios.post('/api/accountedit', accountData);
  },
  validateAccount: function(accountData) {
    return axios.post('/api/account', accountData);
  },
  sendTwilio: function(id) {
    return axios.get('/api/twilio/' + id);
  },
  // Sign up a user
  signUp: function(userData) {
    return axios.post('/auth/signup', userData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post('/auth/login', userData);
  },
  getUserAccount: function() {
    return axios.get('/auth/account');
  }
};
