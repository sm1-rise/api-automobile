const app = require("./src/app");
const dotenv = require("dotenv");
const db = require ("./src/config/dataBase.js");

dotenv.config();

const PORT = process.env.PORT || 3333;

db.hasConection();
app.listen(3000, () =>console.log(`Connected in ${PORT}`));