import { getDataFromToken } from "../../../../backend/helpers/getDataFromToken"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import User from "../../../../backend/models/user"
import connectMongoDB from "../../../../backend/libs/mongodb"

connectMongoDB();

export async function GET(request: NextRequest){
    try {      
        const userID : string = await getDataFromToken(request)
        // Cast userID first
        const user = await User.findById(userID)
        
        return NextResponse.json({
            message: "User Found",
            user
        }, {status: 200})

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:400})
    }
}