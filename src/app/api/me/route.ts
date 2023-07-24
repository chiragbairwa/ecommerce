import { getDataFromToken } from "../../../../backend/helpers/getDataFromToken"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import User from "../../../../backend/models/user"
import connectMongoDB from "../../../../backend/libs/mongodb"

connectMongoDB();

export async function GET(request: NextRequest){
    try {
        const userID = await getDataFromToken(request)
        const user = await User.findOne({_id : userID}).select("-password")
        
        return NextResponse.json({
            message: "User Found",
            user
        }, {status: 200})

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:400})
    }
}