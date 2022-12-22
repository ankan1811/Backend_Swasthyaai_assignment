const express = require("express")
var router = express.Router();
const userController=require("../controllers/userControllers")


router.get("/getuser",userController.getallUsers);
router.post("/postuser",userController.saveUser);
router.get("/:userId/level/:level",userController.nlevelfriends);

module.exports=router

