import dbConnect from "../../utils/dbConnect";  
import User from "../../models/User";  

export default async function handler(req, res) {  
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });  
  await dbConnect();  

  const { email, amount } = req.body;  
  if (amount <= 0) return res.status(400).json({ message: "Invalid amount." });  

  const user = await User.findOne({ email });  
  if (!user) return res.status(404).json({ message: "User not found." });  

  user.balance += amount;  
  await user.save();  

  res.status(200).json({ success: true, balance: user.balance });  
}