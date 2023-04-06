const User = require("../models/Client")

const clientData = [
  {
    first_name: 'Ricky',
    middle_name: 'Dale',
    last_name: 'Bobby',
    email: "turnleftdrivefast@mail.com",
    phone_number: 3031231234,
    birthday: 02/28/1975,
    is_active: true,
    created_at: '2017-09-12 7:30:26',
    updated_at: '2017-09-15 9:30:27',
    user_id: "642b73e3a91c546d0a29ec3f"
  },
  {
    first_name: 'Eric',
    middle_name: 'Joe',
    last_name: 'Cartman',
    email: "eric@mail.com",
    phone_number: 3031232345,
    birthday: 05/18/1990,
    is_active: true,
    created_at: '2019-11-12 5:30:26',
    updated_at: '2020-03-15 9:52:29',
    user_id: "642a040dd008ca1da5ed0863"
  },
  {
    first_name: 'Cosmo',
    middle_name: 'Michael',
    last_name: 'Kramer',
    email: "cosmo@mail.com",
    phone_number: 3031231100,
    birthday: 09/19/1969,
    is_active: true,
    created_at: '2021-07-04 5:30:26',
    updated_at: '2022-01-09 9:52:29',
    user_id: ""
  },
];

const seedClients = () => User.bulkCreate(clientData);

module.exports = seedClients;