import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../backend/libs/mongodb";
import User from "../../../../../backend/models/user";

export async function POST(request:any) {
    
    const { username, email , hash , salt } = await request.json();
    const userData = {
        username : username,
        email : email,
        hash : hash,
        salt : salt,
        profilepic : "",
        cart : "",
        address : ""
    }
    await connectMongoDB();

    console.log(userData)
    const res = await User.create( userData )
    if(res.ok){
        return NextResponse.json({ ok: true })
    }
    else{
        return NextResponse.json({ ok: false })
    }
    // catch(error){
    //     console.log({message: error}, {status: 500})
    // }
}