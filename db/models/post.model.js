const mongoose = require("mongoose")


  const postSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    },
    postType:{
        type:String,
        trim:true,
        required:true,
        enum: ['txt', 'img', 'exe', 'pdf', 'video']
      },
      
      content:{
        type: String,
        trim: true,
        required: () => this.postType == "txt"
      },

      image: {
        type: String,
        trim: true,
        required: () => this.postType = "img"
      },

      file: {
        type: String,
        required: () => this.postType == "exe" || "pdf"
      }, 

      vedios: {
        type: String,
        trim: true,
        required: () => this.postType == "vedio"
      }
},
{timestamps:true})

const Post = mongoose.model('Post',postSchema)
module.exports=Post