import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectDatabase } from "./database";
import { appointmentRouter } from "./routers";

const app = express();

configDotenv();
connectDatabase().then(() => {
    console.log("✅ Database connected successfully!");
}).catch((error) => {
    console.error("❌ Failed to connect to the database:", error);
});

const port = 4000;

app.use(express.json());
app.use(cors())

app.use("/appointment", appointmentRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
