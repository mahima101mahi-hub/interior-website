import Design from "../model/designmodel.js";

export async function pro(req,res) {
    console.log(req)
    const{ProjectId,Title,Description,Category,Theme,Image,BudgetRange,Location,CompletedDate }=req.body
    try {
      if (!Category) {
        return res.status(400).send("catergory is required")
      }  
      const designOption=new Design({
        ProjectId,
        Title,
        Description,
        Category,
        Theme,
        Image,
        BudgetRange,
        Location,
        CompletedDate
      })
      await designOption.save()
      return res.status(201).send(designOption)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ====================================================================================================
export async function GetAllDesign(req,res) {
        console.log(req);
      try {
        const data=await Design.find()
        if (data.length==0) {
          return res.status(400).send("NOT FOUND")
        }
          return res.status(200).send(data)
      } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
      }        
}
// ====================================================================================================

export async function GetDesignbyId(req,res) {
    const{id}=req.params
    try {
      const data =await Design.findById(id)
      if (!data) {
        return res.status(400).send("NOT EXIXTS")
      }
      return res.status(200).send(data)
    } catch (error) {
      console.log(error);
      return res.status(500).send("ITERNAL SERVER ERROR")
    }
}
// ==================================================================================
export async function DeleteDesign(req,res) {
  const {id}=req.params
  try {
    const data=await Design.findByIdAndDelete(id)
    if (!data) {
      return res.status(400).send("NOT FOUND")
    }
    return res.status(200).send({Message:"Succesfully deleted",data:data})
  } catch (error) {
    console.log(error);
    return res.status(500).send("INTERNAL SERVER ERROR")
  }
}