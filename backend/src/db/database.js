import mongoose from "mongoose";
const connectDB=async () => {
    try {
        const conectionInstnce=await mongoose.connect(process.env.mongo_url)
        console.log(`mongo run on ${conectionInstnce.connection.host}`);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
export default connectDB