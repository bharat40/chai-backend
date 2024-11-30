import e from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = e();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(e.json()); // to get json data
app.use(e.urlencoded({ extended: true })); // to get data as a string or array {extended:true} => can accept nested objects
app.use(e.static('public')); // to serve static file
app.use(cookieParser()); // to access user's browser cookies and perform crud operation on it
export default app;