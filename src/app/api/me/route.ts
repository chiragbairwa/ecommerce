import { getDataFromToken } from '@/backend/helpers/getDataFromToken'
import { NextResponse } from 'next/server'
import User from '@/backend/models/user'
import connectMongoDB from '@/backend/libs/mongodb'

connectMongoDB()

export async function GET() {
	try {
		const userID = await getDataFromToken()

		// if (!mongoose.Types.ObjectId.isValid(userID)) {
		//     return NextResponse.json({
		//         message: 'Invalid user ID',
		//         success: false,
		//     }, { status: 401 });
		// }

		// // Cast userID first
		// const ObjectId = new mongoose.Types.ObjectId(userID)
		const user = await User.findById(userID)

		if (!user) {
			return NextResponse.json(
				{
					message: 'User Not Found',
					success: false,
				},
				{ status: 401 }
			)
		}

		return NextResponse.json(
			{
				message: 'User Found',
				success: true,
				user,
			},
			{ status: 200 }
		)
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 })
	}
}
