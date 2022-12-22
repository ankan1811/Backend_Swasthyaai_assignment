var  Blog = require('../models/blogModel');


const getallBlogs=async(req,res)=>{
    try{
      const blogs = await Blog.find().populate('user');
    res.json(blogs);
    }
    catch(err)
    {
      return  res.status(400).send(err);
    }
    }
const saveBlog=async(req,res)=>{
  try {
    const newblog = new Blog({
      title: req.body.title,
      content: req.body.content,
      user: req.body.user,
    });
    const savedblog=await newblog.save();
    res.status(201).json(savedblog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

/*const deleteBlog=async(req,res)=>{
    try{
    const id=req.params.blogreviewid;
    await Blog.remove({_id:id});
    res.json({"Status" :"Deleted"});
  
  }
  catch(err)
  {
    return  res.status(400).send(err);
  }
}*/

  module.exports = {
     saveBlog,getallBlogs
  }