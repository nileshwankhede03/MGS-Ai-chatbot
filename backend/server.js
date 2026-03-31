require("dotenv").config();
const app = require("./src/app.js");
const connectToDB = require("./src/db/database.js");

connectToDB();

app.listen(process.env.PORT , ()=>{
    console.log(`server is running on ${process.env.PORT}`);
})