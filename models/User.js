import mongoose from "mongoose";  

const UserSchema = new mongoose.Schema({  
  name: String,  
  email: String,  
  phoneNumber: String,  
  balance: { type: Number, default: 0 }  
});  

export default mongoose.models.User || mongoose.model("User", UserSchema);  
