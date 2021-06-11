const mdDatabase = require("../Models/mdModel");


exports.createMd = async (req,res)=>{
    const markDownCode = req.body.markDownCode

    req.body = JSON.parse(req.body.markdowndetails);
    req.body.markDownCode = markDownCode;

    await mdDatabase.create(req.body);

   return res.status(201).json({
       success : true ,
       message : "Post Created"
   });
}

exports.findMd = async (req,res)=>{

    const data = await mdDatabase.findById(req.params.id);

    return res.status(200).send(data);
}

exports.findAllMds = async (req,res)=>{
    const data = await mdDatabase.find({});
    return res.status(200).json(data);
}