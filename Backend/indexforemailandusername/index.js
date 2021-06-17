const express = require("express");
const app = express();
const databaseConfig = require("./Configuration/databaseConfig");
const dotenv = require("dotenv");
dotenv.config({
    path : "./Configuration/configuration.env"
});
const morgan = require("morgan");
const logger = morgan("combined");
const router = require("./Router/router");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers",  "*");
    next();
});
app.use(express.json());
app.use(logger);
app.use("/api/v1/",router);

databaseConfig()
    .then(()=>console.log("Connected To Database"))
    .catch(()=>console.log("Unable To Connect To Database"));


const PORT = 8001 || process.env.PORT2;
app.listen(PORT , ()=>console.log(`Server Started On PORT ${PORT}`));