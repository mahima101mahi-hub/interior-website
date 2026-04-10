import mongoose from 'mongoose';
const { Schema } = mongoose;
const orderSchema=new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    PackageName:{
        type:String
    },
    TotalPrice:{
        type:String
    },
    PaymentStatus:{
        type:String,
        enum:["Pending","Processing","Confirmed"]       
    },
    OrderStatus:{
        type:String,
        enum:["Deliverd","Shipped","Pending","Cancelled"]
    },
    DeliveryDate:{
        type:Date
    }
},{timestamps:true})
const Order=mongoose.model('Order',orderSchema)
export default Order