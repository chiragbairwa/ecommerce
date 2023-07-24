import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
// cart: [{
//     id : Number,
//     title: String,
//     price: String,
//     category: String,
//     description: String,
//     image: String
// }]

const userSchema = new Schema(
    {
        username : {
            type : String,
            required: [true, 'Username is required'],
            unique : true,
            lowercase : true,
            trim : true
        },
        email : {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim : true
        },
        password : {
            type: String,
            required: [true, 'Password is required'],
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: String,
        verifyToken : String,
        verifyTokenExpiry : String,
        address : String,
        profilepic : String,
        cart : String
    },
    {
        timestamps:true
    }
)

userSchema.methods.comparePassword = function(password : string) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;