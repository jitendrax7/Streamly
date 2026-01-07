import express from "express";
import {
  getMovies,
  getMovieById,
  searchMovies,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/search", searchMovies);
router.get("/:id", getMovieById);

export default router;
 