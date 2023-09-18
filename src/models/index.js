const Automobile = require("./automobile");
const AutomobileDetails = require("./automobileDetails");

AutomobileDetails.belongsTo(Automobile,{
    foreignKey:"automobile_id",
});

Automobile.hasOne(AutomobileDetails, {
    foreignKey: "automobile_id",
    },
);

module.exports = {Automobile, AutomobileDetails}

