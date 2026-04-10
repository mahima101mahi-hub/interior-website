import mongoose from 'mongoose';
const { Schema } = mongoose;
const inquirySchema=new Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:Number
    },
    SelectTheme:{
        type:String
    },
    SelectRoomType:{
        type:String
    },
    Message:{
        type:String}
    // },
    // Status:{
    //     type:String,
    //     enum:["NEW","RESPONDED"]
    // }
},{timestamps:true})
const Inquiry=mongoose.model('Inquiry',inquirySchema)
export default Inquiry