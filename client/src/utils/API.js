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
