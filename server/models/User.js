const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
  {
    // define the model options
    sequelize, // pass the sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User", // choose the model name
  }
);

module.exports = User;
