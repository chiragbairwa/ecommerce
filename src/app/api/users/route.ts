import { NextResponse } from "next/server";
import connectMongoDB from "../../../../backend/libs/mongodb";
import User from "../../../../backend/models/user";

connectMongoDB();

export async function POST(request:any) {
    const { cart } = await request.json();
    await User.create({ cart })

    return NextResponse.json({message: "User Created"}, {status: 201})
}

export async function GET(request: any) {
    const id = request.nextUrl.searchParams.get("id")
    const userData = await User.findById(id)

    return NextResponse.json({userData}, {status: 200})
}

export async function DELETE(request:any) {
    const id = request.nextUrl.searchParams.get("id")
    await User.findByIdAndDelete(id)
    return NextResponse.json({message: "User Deleted"}, {status: 200})
}

export async function PATCH(request:any) {
    const id = request.nextUrl.searchParams.get("id")
    
    const { cart } = await request.json()
    await User.findByIdAndUpdate(id, { cart })

    return NextResponse.json({message: "User Updated"}, {status: 200})
}