const mongoose = require("mongoose");

const mdSchema = new mongoose.Schema({
    uploadedBy: {
        type: String,
        required: true,
    },
    markDownCode : {
        type : String ,
        required : true
    },
    topic : {
        type : String
    },
    likes : {
        type : Number
    },
    comment : [{
        type : String,
        addedBy : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "User"
        }
    }]
});

module.exports = mongoose.model("markdown",mdSchema);