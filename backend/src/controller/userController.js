import { Schema } from "mongoose";
import User from "../model/UserModel.js";

export async function Register(req,res) {
    console.log(req);
    const{userId,FirstName,LastName,Email,PhoneNumber,Role,Address,Password}=req.body
    try {
        const check=await User.findOne({Email:Email})
        if (check) {
            return res.status(400).send("Already Exist")
        }
        const useroption=new User({
            userId,
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            Role,
            Address,
            Password
        })
        await useroption.save()
        return res.status(201).send("Added Succesfully")
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error")
    }
}
// =========================================================================================
export async function GetAllUser(req,res) {
    try {
        const data=await User.find()
        if(data.length==0){
            return res.status(404).send("NOT FOUND")
        }
        return res.status(200).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// =================================================================================================
export async function GetUSerById(req,res) {
    const {id}=req.params
    try {
        const data=await User.findById(id)
        if(!data)
        {
            return res.status(404).send("NOT FOUND")
        }
        return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNL SERVER ERROR")
        
        
    }
    
}
// ============================================================================================
export async function GetUserByName(req,res) {
    const{FirstName}=req.params
    try {
        const data=await User.findOne({FirstName:FirstName})
        if (!data) {
            return res.status(404).send("NOT FOUND")
        }
            return res.status(201).send(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}
// ========================================================================================================
export async function DeleteUser(req,res) {
    const{id}=req.params
    try {
        const data=await User.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).send("NOT FOUND")
        }
        return res.status(201).send({Message:"Successfully delete",data:data})
    } catch (error) {
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
        
        
    }
}
// ============================================================================================
export async function login(req, res) {
  const { Email, Password } = req.body;

  try {
    if (!Email || !Password) {
      return res.status(400).send("Email and Password required");
    }

    // 1️⃣ CHECK USER
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // 2️⃣ CHECK PASSWORD
    if (user.Password !== Password) {
      return res.status(400).send("Invalid password");
    }

    // 3️⃣ SEND USER DATA (🔥 FIX)
    return res.status(200).json({
      message: "Login Successful",
      user: {
        id:user._id,
        email: user.Email,
        role: user.Role,
      },
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}