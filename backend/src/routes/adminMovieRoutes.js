import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { createMovie } from "../controllers/adminMovieController.js";

const router = express.Router();

router.post(
  "/movie",
  upload.fields([
    { name: "poster", maxCount: 1 },      // 🔥 single
    { name: "bgPoster", maxCount: 1 },    // 🔥 single
    { name: "screenshots", maxCount: 10 } // optional multiple
  ]),
  createMovie
);


router.get("/", (req, res) => {
  res.send("Admin Movie Routes are working...");
});

export default router;
