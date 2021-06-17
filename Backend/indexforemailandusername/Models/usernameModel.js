const  mongoose = require("mongoose");

const username = new mongoose.Schema({
    username : {
        type : String ,
        index : {
            unique : true
        }
    }
});

module.exports = mongoose.model("username",username);

