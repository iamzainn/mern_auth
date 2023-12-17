import User from "../Models/userModel.js";
import { createToken } from "./JWT/token.js";


const registration = async(req,res,next)=>{
    const {username,email,password} = req.body;
 try{
     const user = await User.findOne({email})
     if(user){
        res.status(400);
        throw new Error('User already exist');
     }
     const newUser =new User({username,email,password})
       await newUser.save(); 
  res.status(201).json({"message":"user registered successfully..","user_id":newUser._id})
 }
 catch(error){
   next(error);
 }
}

const login = async(req,res,next)=>{
    const {email,password} = req.body;
 try{
     const user = await User.findOne({email})
     if(user && await user.chkPassword(password)){
        createToken(res,user._id);
       return res.status(200).json({"id":user._id,"name":user.username,"m":"user login successfully"}); 
     }
      res.status(400);
      throw new Error("provide correct credentials") 
 }
 catch(error){
   next(error);
 }
}
//private
const getProfile = async(req,res,next)=>{
try{
  const user = await User.findOne({ _id: res.userId }).select("-password -__v");
  return res.status(200).json({user})
}
catch(error){
 next(error);
}
}

const updateProfile = async(req,res,next)=>{

  try{
    const user = await User.findOne({ _id: res.userId });
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    await user.save();
    return res.status(200).json({"message":"user update successfully"});
  }
  catch(error){
   next(error);
  }
  }
  const logout = async (_, res) => {
    try {
      // Clear the 'token' cookie
      res.clearCookie('token');
  
      // Optionally, you can also send a response to the client
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      
      console.error(error);
      next(error);
     
    }
  };
  

export {registration,login,getProfile,updateProfile,logout};