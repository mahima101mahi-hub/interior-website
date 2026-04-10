import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema=new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        
    },
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    PhoneNumber:{
        type:Number
    },
    // Role:{
    //     type:String,
    //     enum:["Designer","Client","Admin"]
    // },
    Address:{
        type:String
    },
    Password:{
        type:String,
        required:true
    },
},{timestamps:true})
const User=mongoose.model('User',userSchema)
export default User