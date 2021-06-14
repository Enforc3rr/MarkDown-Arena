const mongoose = require("mongoose");

const mdSchema = new mongoose.Schema({
    uploadedBy: {
        type: String,
        // required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
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
        },
        actualComment : {
            type : String ,
            min : [10]
        } ,
        dateOfAddition : {
            type : Date,
            default: Date.now()
        }
    }],
    dateOfCreation : {
        type : Date ,
        default : Date.now()
    }
});

module.exports = mongoose.model("markdown",mdSchema);