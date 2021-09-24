import mongoose from 'mongoose'

const { Schema } = mongoose

const customValidateEmail = function (email: string) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: [customValidateEmail, 'invalid email'],
    },

    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
})

let Users = mongoose.model('user', userSchema)
export default Users
