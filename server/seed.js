import bcrypt from 'bcrypt';
import connectDB from './db/connection.js';
import User from './models/User.js';


const register = async() =>{
    try{
   connectDB();
   const hashPassword = await bcrypt.hash("admin",10);
   const newUser = new User({
    name:"admin",
    email: "kz@gmail.com",
    password: hashPassword,
    address: "admin address",
    role: "admin"
   })

   await newUser.save();
   console.log("admin user created successfully");
    } catch(error) {
console.log(error)
    }
}

register();