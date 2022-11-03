import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import curdRoutes from "./routes/curdRoutes.js";


const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Api Run");
});

app.use("/api/v1", curdRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})

