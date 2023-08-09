import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "../../../../backend/libs/mongodb";
import User from "../../../../backend/models/user";
import bcrypt from "bcrypt"

export async function POST(request: NextRequest) {

    await connectMongoDB()

    try{
        const resBody = await request.json()
        const { username, email , password } = resBody

        // Email already exist
        const user = await User.findOne({email : email})
        if(user){
            return NextResponse.json({error: "Email Already Exist"}, {status: 400})
        }
        // Username already exist
        const checkUsername = await User.findOne({username : username})
        if(checkUsername){
            return NextResponse.json({error: "Username Already Exist"}, {status: 400})
        }
        
        // hash pass
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)
        
        // Create new User
        const userData = {
            username : username,
            email : email,
            password : hashedPassword,
            forgotPasswordToken: "",
            forgotPasswordTokenExpiry: "",
            verifyToken : "",
            verifyTokenExpiry : "",
            address : "",
            profilepic : "",
            cart : "[]"
        }

        const newUser = await User.create( userData )

        return NextResponse.json({message : "User Created Succesfully"}, {status : 200})
    }
    catch(error : any) {
        return NextResponse.json({error : error.message}, {status: 500})
    }
}