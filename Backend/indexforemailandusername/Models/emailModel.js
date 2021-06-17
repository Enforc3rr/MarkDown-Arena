const  mongoose = require("mongoose");

const email = new mongoose.Schema({
    email : {
        type : String ,
        index : {
            unique : true
        }
    }
});
module.exports = mongoose.model("email",email);

