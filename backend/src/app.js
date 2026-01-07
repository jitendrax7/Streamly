
import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import adminMovieRoutes from "./routes/adminMovieRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());




app.use("/api/movies", movieRoutes);
app.use("/api/admin", adminMovieRoutes);
app.use("/", (req, res) => {
    res.send("API is running...");
})
export default app; 
  