const accountSid = process.env.TWLIIO_ACCOUNT_SID;
const authToken = process.env.TWLIO_AUTH_TOKEN;

const client = require('twlio')(accountSid, authToken);

client.messages.create({
	to: process.env.MY_PHONE_NUMBER,
	from: '+19495369535',
	body: 'You-Queue test'
})
.then((message) => console.log(message.sid));