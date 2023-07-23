import mongoose, { Schema } from "mongoose"

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
            unique : true,
            lowercase : true
        },
        email : {
            type: String,
            required: [true, 'is required field'],
            unique: true,
            lowercase: true
        },
        hash : {
            type: String,
            required: [true, 'is required field'],
            select: false
        },
        salt : {
            type: String,
            required: [true, 'is required field'],
            select: false
        },
        address : String,
        profilepic : String,
        cart : String
    },
    {
        timestamps:true
    }
)
// const userSchema = new Schema(
//     {
//         cart : String
//     },
//     {
//         timestamps:true
//     }
// )
const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;