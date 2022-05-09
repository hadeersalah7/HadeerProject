const postModel = require("../db/models/post.model")
class Post {
static addPost = async(req, res) =>{
    try{
        //res.send(req.body)
        const postData = new postModel({userId: req.user._id, ...req.body})
        await postData.save()

        res.status(200).send({
            apiStatus: true,
            data: postData,
            message: "New Post Added"
        })
    }

    catch(e){
        res.status(500).send({
            apiStatus: false,
            errors: e.message,
            message: "faild to add post"
        })
    }

}

//Show All Posts: 

// static allPosts = async(req, res) => {
//     try{
//         const posts = await postModel.find().sort()
//         res.status(200).send({
//             apiStatus: true,
//             data: posts,
//             message: "Your Posts Info"
//         })
//     }

//     catch(e){
//         res.status(500).send({
//             apiStatus: false,
//             errors: e.message
//         })

//     }
// }

//Show Post:
static singlePost = async(req, res)=>{
    try{
        const post = await postModel.findById(req.params.id)
        res.status(200).send({
            apiStatus: true,
            data: post,
            message: "Post Inserted"
        })

    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            errors: e.message,
            message: "Can't Show Post"
        })
    }
}

//Edit Post: 
static editPost = async(req, res) => {
    try{
        const post = await postModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({
            apiStatus: true,
            data: post,
            message: "Post Updated"
        })
    }

    catch(e) {
        res.status(500).send({
            apiStatus: false,
            errors: e.message,
            message: "Can't Edit Post"
        })
    }
}

//Delete Post: 

static delPost = async(req, res) => {
    try{  const post = await postModel.findByIdAndDelete(req.params.id)
    res.status(200).send({
        apiStatus: true,
        data: post,
        message: "Post Deleted"
    })}
    catch(e){
    res.status(500).send({
        apiStatus: false,
        errors: e.message,
        message: "Can't Delete Post"
    })
}
}

// //Add Text Post
// static addTxt = async(req, res)=>{
//     data = {...req.body, type:"txt"}
//     await addTxt.save()
// } 

// //Add Image Post:
// static addImg = async(req, res)=>{
//     data = {...req.body, type:"img"}
//     await addImg.save()
// }

// //Add File Post:
// static addFile = async(req, res)=>{
//     data = {...req.body, type:"pdf" || "exe"}
//     await addFile.save()
// }




static myPosts = async(req,res)=>{
    try{
        await req.user.populate("userPosts")
        res.status(200).send({data: req.user.userPosts})
    }
    catch(e){
        res.status(500).send({erros:e.message})
    }
}

}

module.exports=Post