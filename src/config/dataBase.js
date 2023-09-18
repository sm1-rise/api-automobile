const Sequelize = require("sequelize");
const dotenv = require("dotenv");

//Tem que prencher manualmente e também prencher o env. 
const DB_NAME = "automobile"
const DB_USER = "root";
const DB_PASS = "";
const DB_HOST="localhost"

  const db = new Sequelize(DB_NAME, DB_USER, DB_PASS,{
    dialect:"mysql",
    host:DB_HOST,
  });

async function hasConection(){
    try{
        await db.authenticate();
        console.log("DB connect")
    }catch(error){
        console.log("Falha ao acessar o DB");
    }
}
Object.assign(db, {hasConection});

module.exports = db;
