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
    user_id: "642b73e3a91c546d0a29ec3f"
  },
  {
    name: 'George T.A.',
    email: "bestGeorgeo@mail.com",
    password: "a9880ahl2",
    user_id: "642ce0019e6ad19131005f62"
  }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
