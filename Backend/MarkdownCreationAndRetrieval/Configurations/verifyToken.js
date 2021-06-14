const jwt = require("jsonwebtoken");
const userDatabase = require("../Models/userModel");

const verifyToken = async (req,res,next)=>{
    const requestTokenHeader = req.header("Authorization");
    if(!requestTokenHeader) return res.status(400).json({message : "No Authorization Header Found"});
    if(!requestTokenHeader.startsWith("Bearer ")) return res.status(400).json({message : "Token does not have proper Format"});

    const token = requestTokenHeader.substring(7);
    const jwtDetails = await jwt.verify(token,process.env.SECRET_KEY);
    req.user = await userDatabase.findById(jwtDetails.id);
    next();
}

module.exports = verifyToken;