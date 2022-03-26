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
        enum: ['txt', 'img', 'exe' , 'pdf']
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

  

},
{timestamps:true})

const Post = mongoose.model('Post',postSchema)
module.exports=Post