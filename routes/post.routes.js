const postController = require("../controller/post.controller")
const router = require("express").Router()

const auth = require("../middleware/auth")

router.post("/add", auth, postController.addPost)

module.exports=router

