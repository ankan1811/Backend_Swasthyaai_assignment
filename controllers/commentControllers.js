
var  Comment = require('../models/commentModel');


const getallComments=async(req,res)=>{
    try {
        const comments = await Comment.find().populate(['user', 'blog']);
        res.json(comments);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
const saveComment=async(req,res)=>{

    try {
        const newcomment = new Comment({
            content: req.body.content,
            user: req.body.user,
            blog: req.body.blog,
        });
        const savedcomment=await newcomment.save();
        res.json(savedcomment);
      } 
      catch (error) {
        res.status(400).json({ message: error.message });
      }
}



  module.exports = {
     saveComment,getallComments
  }
