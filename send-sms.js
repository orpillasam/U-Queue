// Twilio Credentials
const accountSid = 'AC2a7cd8e1c9740fb5ccf6930b089f114e';
const authToken = 'c6af2a5f553616ba251cc70cdc5d093d';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+19494138859',
    from: '+19495367823',
    body: 'Thank you for joining our waitlist! We will be notifying you shortly.',
  })
  .then(message => console.log(message.sid));