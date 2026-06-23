import Inquiry from "../model/InquiryModel.js";

export async function contact(req,res) {
    console.log(req);
    const{Name,Email,Phone,SelectTheme,SelectRoomType,Message}=req.body
    try {
        if(!Message)
        {
            return res.status(400).json({Meaasge:"Message is importnat fill it"})
        }
            const inquiryOption=new Inquiry({
                Name,
                Email,
                Phone,
                SelectTheme,
                SelectRoomType,
                Message
            })
            await inquiryOption.save()
            return res.status(201).send("added succesfull")
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ===========================================================================
export async function GetAllInqiury(req,res) {
    try {
        const data =await Inquiry.find()
        if(data.length==0){
            return res.status(400).send("NOT FOUND")
        }
            return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// =============================================================
export async function GetInquiryById(req,res) {
    const{id}=req.params
    try {
        const data=await Inquiry.findById(id)
        if(!data){
            return res.status(400).send("not found")
        }
            return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ===================================================================
export async function DeleteInquiry(req,res) {
    const {id}=req.params
    try {
        const data =await Inquiry.findByIdAndDelete(id)
        if (!data) {
            return res.status(400).send("not found")
        }
            return res.status(201).json({Message:"Succesfully deleted",data:data})
    } catch (error) {
        console.log((error));
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}