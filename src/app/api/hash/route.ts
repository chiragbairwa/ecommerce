import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(request:any) {
    const { unHashPass } = await request.json()
    
    let data = { hashPass : "", salt : "" }

    const salt = await bcrypt.genSalt(2)
    data.salt = salt

    const hash = await bcrypt.hash(unHashPass, salt)
    data.hashPass = hash

    return NextResponse.json( data )            
}