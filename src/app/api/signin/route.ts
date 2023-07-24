import { NextRequest, NextResponse } from "next/server";
import User from "../../../../backend/models/user";
import connectMongoDB from "../../../../backend/libs/mongodb";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(request : NextRequest) {
  
  await connectMongoDB()

  try{
    const reqBody = await request.json()
    const {email, password} = reqBody
    
    // User exist ?
    const user = await User.findOne({email})
    if(!user){
      return NextResponse.json({error: "Email does not exist."}, {status: 400})
    }

    // if password is correct
    const validPass = await bcrypt.compare(password, user.password)
    if(!validPass){
      return NextResponse.json({error: "Invalid Password"},{status:400})
    }
    
    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    // create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {expiresIn: "1d"})
    
    const response = NextResponse.json({message: "Login Successful", success: true}, {status: 200})
    response.cookies.set("token", token, {httpOnly: true})
  
    return response;
  }catch(err: any){
    console.error(err.response)
  }
  
 
}