
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
// app.options("*", cors()); // ✅ fix preflight
app.use(express.json());
app.use("/auth", authRoutes); // ✅ also fix route prefix

app.get("/", (req, res) => {
  res.send("API Running ✅");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));