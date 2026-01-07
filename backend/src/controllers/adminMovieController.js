import Movie from "../models/Movie.js";

/* -------- SAFE JSON PARSER -------- */
const safeParseJSON = (value, defaultValue = []) => {
  try {
    if (!value) return defaultValue;
    if (typeof value === "object") return value;
    return JSON.parse(value);
  } catch {
    return defaultValue;
  }
};

export const createMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      subCategory,
      imdbRating,
      genres,
      languages,
      cast,
      director,
      trailer,
      releaseYear,
      downloads,
    } = req.body;

    /* -------- REQUIRED TEXT CHECK -------- */
    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, description and category are required",
      });
    }

    /* -------- FILES FROM CLOUDINARY -------- */
    const poster = req.files?.poster?.[0]?.path;
    const bgPoster = req.files?.bgPoster?.[0]?.path;
    const screenshots = req.files?.screenshots?.map(f => f.path) || [];

    if (!poster || !bgPoster) {
      return res.status(400).json({
        success: false,
        message: "Poster and background poster are required",
      });
    }

    /* -------- SAFE PARSING -------- */
    const parsedGenres = safeParseJSON(genres);
    const parsedLanguages = safeParseJSON(languages);
    const parsedCast = safeParseJSON(cast);
    const parsedDownloads = safeParseJSON(downloads);

    /* -------- TYPE SAFETY -------- */
    const rating = imdbRating ? Number(imdbRating) : 0;
    const year = releaseYear ? Number(releaseYear) : undefined;

    /* -------- CREATE MOVIE -------- */
    const movie = await Movie.create({
      title: title.trim(),
      description,
      category,
      subCategory,
      poster,
      bgPoster,
      screenshots,
      imdbRating: rating,
      genres: parsedGenres,
      languages: parsedLanguages,
      cast: parsedCast,
      director,
      trailer,
      releaseYear: year,
      downloads: parsedDownloads,
    });

    return res.status(201).json({
      success: true,
      message: "Movie created successfully",
      movie,
    });

  } catch (error) {
    console.error("Create Movie Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
