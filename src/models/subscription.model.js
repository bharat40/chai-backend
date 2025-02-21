import mongoose from "mongoose";

const subscriptonSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId, // one to whom subscriber is subscribing
        ref: "User"
    }
}, { timestamps: true })

export const Subscription = mongoose.model("Subscription", subscriptonSchema);