const { sequelize, DataType, DataTypes } = require("sequelize");
const db = require("../config/dataBase.js");
const AutomobileDetails = require("./automobileDetails"); // Importe o modelo de AutomobileDetails

const Automobile = db.define(
  "Automobile",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    ano: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    placa: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    motor: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    versao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "automobile",
    timestamps: false,
  }
);

module.exports = Automobile;