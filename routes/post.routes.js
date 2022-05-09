const postController = require("../controller/post.controller")
const router = require("express").Router()

const auth = require("../middleware/auth")

router.post("/add",  postController.addPost)
// router.get("/allPosts", auth, postController.allPosts)
router.get("/myPosts/:id", postController.singlePost)
router.patch("/myPosts/:id", auth, postController.editPost)
router.delete("/myPosts/:id", auth, postController.delPost)


router.get("/myPosts", postController.myPosts)

module.exports=router

