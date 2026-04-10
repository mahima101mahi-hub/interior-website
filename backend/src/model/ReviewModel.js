import mongoose from 'mongoose';
const { Schema } = mongoose;
const reviewSchema=new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    DesignerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Designer'
    },
    ProjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
    },
    Rating:{
        type:String
    },
    Comment:{
        type:String
    }
},{timestamps:true})
const Review=mongoose.model('Review',reviewSchema)
export default Review
