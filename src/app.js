import e from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

const app = e();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true // allows cookies and authentication headers in cross-origin requests 
}));
app.use(e.json({ limit: "16kb" }));  // to parse JSON requests with a limit of 16kb
app.use(e.urlencoded({ extended: true, limit: "16kb" })); // to parse url encoded data with a limit of 16kb
app.use(e.static("public")); // to server static files from the "public" directory
app.use(cookieParser()); // to parse cookies in incoming requests

app.use("/api/v1/users", userRoutes);

export default app;