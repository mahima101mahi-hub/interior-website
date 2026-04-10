import mongoose from 'mongoose';
const { Schema } = mongoose;
const serviceSchema=new Schema({
    ServceId:{
        type:String
    },
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        reqiured:true
    },
    StartingPrice:{
        type:String,
        required:true
    },
    Duration:{
        type:String,
    },
    Thumbnail:{
        type:String
    }
},{timestamps:true})
const Service=mongoose.model('Service',serviceSchema)
export default Service