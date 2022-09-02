const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    Name:{type:String,
    required:true
    },
    Age:Number,
    FavouriteFood:{type:[String],
        required:true
    }
})
module.exports=mongoose.model('User',userSchema)