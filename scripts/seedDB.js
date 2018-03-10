const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/uqueuedb', {
  useMongoClient: true
});

const guestSeed = [
  {
    firstName: 'Tom',
    lastName: 'Paris',
    phoneNumber: '929 330 2002',
    partySize: '3',
    notes: 'Birthday',
    date: new Date(Date.now())
  },
  {
    firstName: 'James',
    lastName: 'C',
    phoneNumber: '330 202 1232',
    partySize: '2',
    notes: 'Anniversary',
    date: new Date(Date.now())
  },
  {
    firstName: 'LT',
    phoneNumber: '949 332 2023',
    partySize: '4',
    notes: '',
    date: new Date(Date.now())
  },
  {
    firstName: 'Josh',
    lastName: 'Lyman',
    phoneNumber: '202 309 4493',
    partySize: '2',
    notes: '',
    date: new Date(Date.now())
  },
  {
    firstName: 'Charlie',
    lastName: 'Young',
    phoneNumber: '202 332 4103',
    partySize: '2',
    notes: '',
    date: new Date(Date.now())
  },
  {
    firstName: 'Fred',
    lastName: 'Nostra',
    phoneNumber: '949 204 3320',
    partySize: '5',
    notes: '',
    date: new Date(Date.now())
  },
  {
    firstName: 'Mike',
    lastName: 'Casper',
    phoneNumber: '408 205 9934',
    partySize: '8',
    notes: 'Peanut allergy',
    date: new Date(Date.now())
  },
  {
    firstName: 'Martin',
    lastName: 'Sheen',
    phoneNumber: '202 430 2210',
    partySize: '4',
    notes: 'VIP',
    date: new Date(Date.now())
  },
];

db.Guest.remove({})
  .then(() => db.Guest.collection.insertMany(guestSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
