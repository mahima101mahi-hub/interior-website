import Theme from "../model/ThemeModel.js";

export async function themes(req,res) {
    // console.log(req);
    const{ThemeCategory,Description,StartingPrice}=req.body
    try {
        if (!ThemeCategory) {
            return res.status(400).json({Message:"Theme is required"})
        }
            const themeOption=new Theme({
                ThemeCategory,
                Description,
                StartingPrice
            })
            await themeOption.save()
            return res.status(201).send("Add Successfully")
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ========================================================
export async function GetAllTheme(req,res) {
    
try {
        const data =await Theme.find()
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
export async function GetThemeById(req,res) {
    const{id}=req.params
    try {
        const data=await Theme.findById(id)
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
export async function DeleteTheme(req,res) {
    const {id}=req.params
    try {
        const data =await Theme.findByIdAndDelete(id)
        if (!data) {
            return res.status(400).send("not found")
        }
            return res.status(201).json({Message:"Succesfully deleted",data:data})
    } catch (error) {
        console.log((error));
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}