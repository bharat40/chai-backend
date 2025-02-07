import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log("MongoDB connected !!")
        console.log("host:", connectionInstance.connection.host);
    } catch (error) {
        console.log("Error while connecting with DB: ", error);
        process.exit(1); // exit with failure
    }
}

export default connectDB;