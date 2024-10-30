import mongoose, { Model, Schema } from "mongoose";

const publication = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {type: String},
    publicData:{
        departamento: {type: String},
        ciudad: {type: String},
        barrio: {type: String},
        rentalType: {
            type: String,
            required: true
        },
        sharedRoom: {
            type: String,
            required: true
        },
        mixed: {
            type: Boolean,
            required: true
        },
        pets: {
            type: Boolean,
            required: true
        }

    },
    requests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    matches: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    publicationState: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Publication = mongoose.model("Publication", publication)












