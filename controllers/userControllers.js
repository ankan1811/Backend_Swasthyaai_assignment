
var  User = require('../models/userModel');
var Comment=require("../models/commentModel");
const mongoose=require("mongoose");

const getallUsers=async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
const saveUser=async(req,res)=>{

    try {
        const newuser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        const saveduser=await newuser.save();
        res.json(saveduser);
      } 
      catch (error) {
        res.status(400).json({ message: error.message });
      }
}

const nlevelfriends=async (req, res) => {
  try {
    const friends = await Comment.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(req.params.userId),
        },
      },
      {
        $lookup: {
          from: 'comments',
          localField: 'blog',
          foreignField: 'blog',
          as: 'friends',
        },
      },
      {
        $group: {
          _id: '$friends.user',
          count: { $sum: 1 },
        },
      },
      {
        $match: {
          count: { $gte: req.params.level },
        },
      },
    ]);
    res.json(friends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


  module.exports = {
     saveUser,getallUsers,nlevelfriends
  }
