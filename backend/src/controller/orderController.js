import Order from "../model/orderModel.js";

export async function Buy(req,res) {
    console.log(req);
    const{userId,PackageName,TotalPrice,PaymentStatus,OrderStatus,DeliveryDate}=req.body
    try {
        if (!PackageName) {
            return res.status(400).json({Message:"Package name must enter"})
        }
        const orderOption=new Order({
            userId,
            PackageName,
            TotalPrice,
            PaymentStatus,
            OrderStatus,
            DeliveryDate
        })
        await orderOption.save()
        return res.status(201).send(orderOption)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ===================================================================
export async function GetAllOrder(req,res) {
    try {
        const data=await Order.find()
        if (data.length==0) {
            return res.status(400).send("ALREADY EXISTS")
        }
            return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("iNTERNAL SERVER ERROR")
    }
}
// =======================================================================
export async function GetOrderById(req,res) {
    const {id}=req.params
    try {
        const data=await Order.findById(id)
        if (!data) {
            return res.status(400).send("ALREADY EXISTS")
        }
            return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ========================================================================
export async function DeleteOrder(req,res) {
    const {id}=req.params
    try {
        const data=await Order.findByIdAndDelete(id)
        if (!data) {
            return res.status(400).send("Internal server error")
        }
        return res.status(201).json({Message:"Sucessfully deteled",data:data})
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}