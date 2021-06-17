const emailDatabase = require("../Models/emailModel");

exports.addEmail = async (req,res)=>{
    await emailDatabase.create(req.body);

    return res.status(201).json({
        success : true ,
        message : "Email added"
    });
}

exports.checkEmail = async (req,res)=>{
    const email = await emailDatabase.findOne({email : req.params.email});

    if(email) return res.status(200).json({message : "Email already exists try different username"});

    return res.status(200).json({message : "Email is Available To Be Used"});
}

exports.deleteEmail = async (req,res)=>{
    await emailDatabase.deleteOne({email : req.params.email});

    return res.status(200).json({message : "Email deleted"});
}