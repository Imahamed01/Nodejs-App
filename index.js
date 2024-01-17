import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import { errorhandler } from "./middleware/errorhandler.js";
import connectDB from "./config/dbConnection.js";
const app = express();
dotenv.config();
const port=process.env.PORT
connectDB();
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.use(errorhandler);

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});