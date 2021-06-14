const express = require("express");
const app = express();
const mdRouter = require("./Router/mdRouter");
const userRouter = require("./Router/userRouter");
const database = require("./Configurations/databaseConfig");
const dotenv = require("dotenv");
dotenv.config({
    path : "./Configurations/config.env"
});
// Middleware to allow every url to use every method on the end points (basically by-passing cors)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/api/v1/md",mdRouter);
app.use("/api/v1/user",userRouter);

database()
    .then(()=>console.log("Connected To Database"))
    .catch(()=> console.log("Connection To Database Failed"));

const PORT = 8000 || process.env.PORT;
app.listen(PORT , ()=> console.log(`Server Started On PORT ${PORT}`));

