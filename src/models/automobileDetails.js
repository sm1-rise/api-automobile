const {sequelize, DataType, DataTypes} = require("sequelize");
const db = require ("../config/dataBase.js");
const Automobile = require("./automobile.js");

const AutomobileDetails = db.define(
    "AutomobileDetails", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    cor: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    quilometragem: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    combustivel: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    cambio:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    final_placa:{
        type:DataTypes.STRING(1),
        allowNull:false
    },
    automobile_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Automobile,
            key: "id", 
        }
    }
},
{
    tableName: "automobiledetails",
    timestamps: false,
}
);

module.exports = AutomobileDetails;

