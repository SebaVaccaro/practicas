import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    publicData: {
        nickname: {
            type: String,
            unique: true
        },
        age: {
            type: Number
        },
        gender: {
            type: String
        }
    },
    privateData: {
        phonenumber: {
            type: String,
            unique: true
        }
    },
    publications: [{ type: Schema.Types.ObjectId, ref: 'Publication' }],
    sentRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    matches: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ "publicData.nickname": 1 });

export const User = mongoose.model("user", userSchema)