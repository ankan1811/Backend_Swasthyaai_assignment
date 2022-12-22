const express = require("express")
var router = express.Router();
const commentController=require("../controllers/commentControllers")


router.get("/getcomment",commentController.getallComments);
router.post("/postcomment",commentController.saveComment);

module.exports=router
