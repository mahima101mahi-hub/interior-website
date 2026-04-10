import mongoose from 'mongoose';
const { Schema } = mongoose;
const designSchema=new Schema({
   
    Title:{
        type:String
    },
    Description:{
        type:String
    },
    Category:{
        type:String
    },
    Theme:{
        type:String
    },
    Image:{
        type:String
    },
    BudgetRange:{
        type:String,
        required:true
    }
},{timestamps:true})
const Design=mongoose.model('Design',designSchema)
export default Design