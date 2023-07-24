import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// type TokenType = {
//     id: String,
//     username: String,
//     email: String
// }

export const getDataFromToken = async(request: NextRequest)=>{
    try {
        const token = request.cookies.get("token")?.value || "";
        const decodedToken : any = await jwt.verify(token, process.env.JWT_SECRET_KEY!)
        
        return decodedToken.id;
    } catch (error: any) {
        console.log(error.message)
    }
}