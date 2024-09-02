import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import asyncHandler from "../middlewares/asyncHandler.js";
import CreateToken from '../utils/CreateToken.js'
const CreateUser = asyncHandler(async (req, res) => {
   const { username, email, password } = req.body;

   if (!username || !email || !password) {
       console.log("Validation failed: missing input fields.");
       return res.status(400).json({ message: 'Please fill all the fields!' });
   }

   const userExists = await User.findOne({ email });

   if (userExists) {
       console.log("User already exists.");
       return res.status(400).json({ message: 'User already exists' });
   }

   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(password, salt);

   const newUser = new User({ username, email, password: hashPassword });

   try {
       await newUser.save();
       CreateToken(res, newUser._id);

       res.status(201).json({
           _id: newUser._id,
           username: newUser.username,
           email: newUser.email,
           isAdmin: newUser.isAdmin,
       });
   } catch (error) {
       res.status(400);
       throw new Error('Invalid user Data');
   }
});

const LogInUser = asyncHandler(async(req,res)=>{
   const {email,password}=req.body

   const ExistingUser = await User.findOne({email})

   if (ExistingUser) {
      const PasswordValid = await bcrypt.compare(password,ExistingUser.password)

      if(PasswordValid){
         CreateToken(res,ExistingUser._id)

         res.status(201).json({
            _id: ExistingUser._id,
            username: ExistingUser.username,
            email: ExistingUser.email,
            isAdmin: ExistingUser.isAdmin,
         });

      } else {
         res.status(401).json({message:"Invalid password"})
      }

   } else {
      res.status(401).json({message:"User Not found"})
   }

});


const LogOutCurrentUser = asyncHandler(async(req,res)=>{
   req.cookie('jwt','',{
      httpOnly: true,  
      expires: new Date(0),  
   })

   res.status(200).json({message:"Log Out Sucessfully"})
})
export { CreateUser,LogInUser,LogOutCurrentUser };

