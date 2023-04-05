const User = require("../models/User")

const usersData = [
  {
    name: 'Ben Spot',
    email: "benspot@mail.com",
    password: "12lsfuo4",
    user_id: "642a040dd008ca1da5ed0863"
  },
  {
    name: 'Jeff Erby',
    email: "geoff@mail.com",
    password: "ad3r2d",
    user_id: "23435kjdf"
  },
  {
    name: 'George T.A.',
    email: "bestGeorgeo@mail.com",
    password: "a9880ahl2",
    user_id: "adfjer0"
  },
  {
    name: 'Dan Kalty',
    email: "dantheman@mail.com",
    password: "1354jlsdh",
    user_id: "642a040dd008ca1da5ed0863"
  },
  {
    name: 'Harry Potter',
    email: "alohamora@mail.com",
    password: "kajfd08dfl",
    user_id: "642a040dd008ca1da5ed0863"
  },
  {
    name: 'Severus Snape',
    email: "snape@mail.com",
    password: "adf432rt5d",
    user_id: "642ce0019e6ad19131005f62"
  },
  {
    name: 'Albus Dumbledore',
    email: "dumble@mail.com",
    password: "adf90wer876",
    user_id: "642ce0019e6ad19131005f62"
  },
  {
    name: 'Ron Weasley',
    email: "realron@mail.com",
    password: "adf25gdfg",
    user_id: "642ce0019e6ad19131005f62"
  },


];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
