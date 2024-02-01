import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
// type TokenType = {
//     id: String,
//     username: String,
//     email: String
// }

export const getDataFromToken = async () => {
	try {
		const cookieStore = cookies();
		const token: string = cookieStore.get('token')?.value!;
		const decodedToken: any = await jwt.verify(
			token,
			process.env.JWT_SECRET_KEY!
		);

		return decodedToken.id;
	} catch (error: any) {
		console.log(error.message);
	}
};
