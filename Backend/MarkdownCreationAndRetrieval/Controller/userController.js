const userDatabase = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {userRegistrationValidation} = require("../Configurations/userValidations");

exports.createUser = async (req,res) =>{
    const {error} = userRegistrationValidation(req.body);
    if (error) return res.status(400).json({
        success : false ,
        message : error.details[0].message
    });

    const salt = await bcrypt.genSalt(10);

    req.body.password = await bcrypt.hash(req.body.password , salt);

    await userDatabase.create(req.body);
    return res.status(201).json({
        success : true ,
        message : "User Registered"
    });
}

exports.userLogin = async (req,res)=>{
    const userFound = await userDatabase.findOne({username : req.body.username});
    if(!userFound) return res.status(400).json({
        success : false ,
        message : "username Not Found"
    });
    //Validating Password
    const validatePassword = await bcrypt.compare(req.body.password , userFound.password);
    if(!validatePassword) return res.status(400).json({
        success : false ,
        message : "Wrong Password"
    });
    //Generating Token
    const token = await jwt.sign({
        id : userFound._id,
        role : userFound.role
    },process.env.SECRET_TOKEN);
    //Returning Token
    return res.status(200).json({
        success : true,
        username : userFound.username,
        jwt : token
    });
}

exports.fetchAllUsers = async (req,res)=>{
    const data = await userDatabase.find({});

    return res.status(200).json(data);
}

exports.checkingForUsername = async (req,res)=>{
    const user = await userDatabase.findOne({username:req.params.username});

    console.log(user);

    if(user) return res.status(200).json({message : "Username already exists try different username"});

    return res.status(200).json({message : "Username is Available To Be Used"});
}
