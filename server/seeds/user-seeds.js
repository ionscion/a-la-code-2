const User = require("../models/User")

const usersData = [
  {
    name: 'Ben Spot',
    email: "benspot@mail.com",
    password: "12lsfuo4",
    user_id: "auth0|642a040dd008ca1da5ed0863"
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

];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
