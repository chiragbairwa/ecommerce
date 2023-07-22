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
        cart: String
    },
    {
        timestamps:true
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;