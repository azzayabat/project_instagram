import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { customValidateEmail } from '../utility/validation';

dotenv.config();

const { Schema } = mongoose;

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
});

userSchema.pre('save', function () {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

userSchema.methods.checkPassword = async function (enteredPassword) {
    console.log('pass entered:', enteredPassword);
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.createAccessToken = function () {
    const token = sign({ id: this._id }, 'skjSdfuDaF73j2GSjd923b4k!j.ewr717@$2');
    // console.log('working', token);
    // this access token should have exprire date ==> write it later
    return token;
};
let Users = mongoose.model('user', userSchema);

export default Users;
