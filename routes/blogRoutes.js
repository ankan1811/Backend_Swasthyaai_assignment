const express = require("express")
var router = express.Router();
const blogController=require("../controllers/blogControllers")


router.post("/postblog",blogController.saveBlog);
router.get("/getblog",blogController.getallBlogs);

module.exports=router