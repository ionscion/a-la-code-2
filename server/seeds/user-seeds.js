const User = require("../models/User")

const usersData = [
  {
    name: 'Ben Spot',
    email: "benspot@mail.com",
    password: "12lsfuo4"
  },
  {
    name: 'Jeff Erby',
    email: "geoff@mail.com",
    password: "ad3r2d"
  },
  {
    name: 'George T.A.',
    email: "bestGeorgeo@mail.com",
    password: "a9880ahl2"
  },

];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
