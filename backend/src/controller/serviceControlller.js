import Service from "../model/serviceModel.js";

export async function serve(req,res) {
    console.log(req);
    const{ServiceId,Name,Description,StartingPrice,Duration,Thumbnail}=req.body
    try {
        if(!Name||!Description||!StartingPrice){
            return res.status(400).json({Messsage:"Name,Description and starting price is required"})
        }
        const serviceOption=new Service({
            ServceId,
            Name,
            Description,
            StartingPrice,
            Duration,
            Thumbnail
        })
        await serviceOption.save()
        return res.status(201).send(serviceOption)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ========================================================================
export async function GetAllservice(req,res) {
    try {
        const data =await Service.find()
        if (!data) {
            return res.status(400).send("NOT FOUND")
        }
        return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ==========================================================================================================
export async function GetServiceById(req,res) {
    const{id}=req.params
    try {
        const data=await Service.findById(id)
        if(!data){
            return res.status(404).send("NOT FOUND")
        }
        return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ===============================================================
export async function GetServiceByName(req,res) {
    const{Name}=req.params
    try {
        const data=await Service.findOne({Name:Name})
        if (!data) {
            return res.status(404).send("ALREADY EXISTS")
        }
        return res.status(200).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// =================================================================================
export async function DeleteService(req,res) {
    const{id}=req.params
    try {
        const data=await Service.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).send('ALREADY EXISTS')
        }
            return res.status(200).json({Message:"Sussesfully deleted",data:data})
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}