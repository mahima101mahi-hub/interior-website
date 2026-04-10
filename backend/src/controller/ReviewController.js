import Review from "../model/ReviewModel.js";

export async function rating(req,res) {
    console.log(req);
    const{userId,DesignerId,ProjectId,Rating,Comment}=req.body
    try {
        if (!Rating) {
           return res.status(400).json({Message:"Rating is reqiured"}) 
        }
        const reviewOption=new Review({
            userId,
            DesignerId,
            ProjectId,
            Rating,
            Comment
        })
        await reviewOption.save()
        return res.status(201).send(reviewOption)
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error")
    }
}
// =============================================================
export async function GetAllRevew(req,res) {
    try {
        const data=await Review.find()
        if (data.length==0) {
            return res.status(400).send("NOT FOUND")
        }
            return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// =============================================================
export async function GetReviewById(req,res) {
    const {id}=req.params
    try {
        const data=await Review.findById(id)
        if (!data) {
            return res.status(400).send("NOT FOUND")
        }  
            return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// =============================================================
export async function DeleteReview(req,res) {
    const{id}=req.params
    try {
        const data=await Review.findByIdAndDelete
        if (!data) {
            return res.status(400).send("NOT EXISTS")
        }
            return res.status(201).json({Message:"Succesfully deleted",data:data})
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}