const mdDatabase = require("../Models/mdModel");

exports.createMd = async (req,res)=>{
   await mdDatabase.create(req.body);

   return res.status(201).json({
       success : true ,
       message : "Markdown Created"
   });
}