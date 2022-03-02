let express = require("express");
let apiController = require("../controller/ApiController");

var router=express.Router();

router.route("/").get(apiController.getOne);

module.exports=router;