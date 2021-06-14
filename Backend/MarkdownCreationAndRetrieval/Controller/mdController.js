const mdDatabase = require("../Models/mdModel");


exports.createMd = async (req,res)=>{
    const markDownCode = req.body.markDownCode

    req.body = JSON.parse(req.body.markdowndetails);
    req.body.markDownCode = markDownCode;
    req.body.uploadedBy = req.user.username;

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

exports.searchMdByTitle = async (req,res)=>{
    const postSearchByTitle = await mdDatabase.find({title : {$regex : req.params.keyword , $options : "i"}});

    return res.status(200).json(postSearchByTitle);
}

exports.searchMdByTopic = async (req,res)=>{
    const searchByTopic = await mdDatabase.find({topic : req.params.topic });
    return res.status(200).json(searchByTopic);
}

exports.deleteMd = async (req,res)=> {
    const mdToDelete = await mdDatabase.findById(req.params.id);
    if (mdToDelete.toObject().username === req.user.username) {
        return res.status(200).json({
            success: true,
            message: "Post Has Been Deleted"
        });
    }
    return res.status(400).json({
        success: false,
        message: "Post you're trying to delete isn't present or has already been deleted"
    });
}