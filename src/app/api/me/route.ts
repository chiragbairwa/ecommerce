import { getDataFromToken } from "../../../../backend/helpers/getDataFromToken"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import User from "../../../../backend/models/user"
import connectMongoDB from "../../../../backend/libs/mongodb"
import mongoose from "mongoose"

connectMongoDB();

export async function GET(request: NextRequest){
    try {      
        const userID = await getDataFromToken(request)
                
        if (!mongoose.Types.ObjectId.isValid(userID)) {
            return NextResponse.json({
                message: 'Invalid user ID',
                success: false,
            }, { status: 401 });
        }

        // Cast userID first
        const ObjectId = new mongoose.Types.ObjectId(userID)
        const user = await User.findById(ObjectId)
        
        if (user !== null){
            return NextResponse.json({
                message: "User Found",
                success: true,
                user
            }, {status: 200})
        }
        else {
            return NextResponse.json({
                message: "User Not Found",
                success: false,
            }, {status: 401})
        }
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:400})
    }
}