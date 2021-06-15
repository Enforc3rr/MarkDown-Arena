const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username : {
        type : String ,
        required : true,
        unique : true,
        min : [3],
    },
    email : {
        type : String ,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        required : true
    },
    role : {
        type : String,
        default : "user"
    },
    dateOfJoining : {
        type : Date ,
        default : Date.now()
    },
    postIDsCreatedByUser : [{
        type : String ,
    }],
    commentIDsAddedByUser : [{
        type : String
    }]
});
module.exports = mongoose.model("userModel",user);