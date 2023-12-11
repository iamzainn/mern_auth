
import mongoose from "mongoose";
import bcrypt, { hash } from 'bcrypt';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    
  },
  password: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});
userSchema.methods.chkPassword = async function (password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (error) {
    console.error(error);
    return false;
  }
};


userSchema.pre('save',async function(next){
  
  if(this.isNew || this.isModified('password'))
  {
    
    try{
      const salt = await bcrypt.genSalt(10);
      const hashPassword  = await bcrypt.hash(this.password,salt);
      this.password = hashPassword;
      next();

    }catch(error){
      next(error);
    }
   
  }
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
