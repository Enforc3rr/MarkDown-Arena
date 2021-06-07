const express = require("express");
const app = express();
const router = require("./Router/router");
const database = require("./Configurations/DatabaseConfig");
const dotenv = require("dotenv");
dotenv.config({
    path : "./Configurations/config.env"
});

app.use(express.json());
app.use("/api/v1",router);

database()
    .then(()=>console.log("Connected To Database"))
    .catch(()=> console.log("Connection To Database Failed"));

const PORT = 8000 || process.env.PORT;
app.listen(PORT , ()=> console.log(`Server Started On PORT ${PORT}`));

