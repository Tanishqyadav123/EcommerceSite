const express = require("express");
const { Register, Login , GetAuthUser } = require("../controller/userController");
const router = express.Router()
const {Authentication} = require("../controller/AuthController.js")



router.post("/signUp" , Register)
router.post("/login" , Login)
router.post("/getauthuser" ,  Authentication , GetAuthUser)


module.exports = router;