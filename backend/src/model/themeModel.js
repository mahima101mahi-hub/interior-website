import mongoose from 'mongoose';
const { Schema } = mongoose;
const themeSchema=new Schema({
    ThemeCategory:{
        type:String,
        enum:["TRADITIONAL","MODREN","MINIMALIST","LUXURY","RUSTIC","INDUSTRIAL"]
    },
    Description:{
        type:String
    },
    StartingPrice:{
        type:String
    }
},{timestamps:true})
const Theme=mongoose.model('Theme',themeSchema)
export default Theme