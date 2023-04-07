const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "642a040dd008ca1da5ed0863"
    },
  },
  {
    // define the model options
    sequelize, // pass the sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Client", // choose the model name
  }
);

module.exports = Client;
