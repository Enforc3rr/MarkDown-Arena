const usernameDatabase = require("../Models/usernameModel");

exports.addUsername = async (req,res)=>{
    await usernameDatabase.create(req.body);

    return res.status(201).json({
        success : true ,
        message : "username added"
    });
}

exports.checkUsername = async (req,res)=>{
    const username = await usernameDatabase.findOne({ username : req.params.username});

    if(username) return res.status(200).json({message : "Username already exists try different username"});

    return res.status(200).json({message : "Username is Available To Be Used"});
}

exports.deleteUsername = async (req,res)=>{
    await usernameDatabase.deleteOne({username : req.params.username});

    return res.status(200).json({message : "Username deleted"});
}