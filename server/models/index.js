// import models
const Product = require('./Product');
const Category = require('./Category');
const Client = require('./Client');
const User = require('./User');

Client.belongsTo(User);

User.hasMany(Client, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = {
Client,
User
};