import mongoose from 'mongoose';
const { Schema } = mongoose;
const appoinmentSchema=new Schema({
   Name:{
    type:String
   },
   Email:{
    type:String

   },
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   Phone:{
    type:String

   },
   SelectTheme:{
    type:String

   },
   SelectRoomType:{
    type:String

   },
    AppointmentDate :{
        type:String
    },
    TimeSlot:{
        type:String
    },
   Message:{
    type:String
   },
    Status:{
        type:String,
        enum:["Pending","Confirmed","Completed","Cancelled"],
        default:"Pending"
    },
    PaymentMethod:{
        type:String,
        enum:["CARD","UPI"]
    },
    upiId:String,
    cardNumber: String,
    expiry: String,
    cvv: String

},{timestamps:true})
const Appoinment=mongoose.model('Appoinment',appoinmentSchema)
export default Appoinment 