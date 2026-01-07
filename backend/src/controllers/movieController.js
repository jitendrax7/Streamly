import mongoose from "mongoose";
import Movie from "../models/Movie.js";

/* ---------- SIMPLE CARD FORMAT ---------- */
const simpleMovie = (movie) => ({
    id: movie._id,
    title: movie.title,
    rating: movie.imdbRating,
    poster: movie.poster,
    description: movie.description,
});

export const getMovies = async (req, res) => {
    try {
        /* ---------- HERO SECTION (DUMMY DATA FOR NOW) ---------- */
        const hero = {
            title: "Stranger Things",
            description:
                '"Stranger Things" is a critically acclaimed American sci-fi horror series set in the 1980s, focusing on the supernatural events in the fictional town of Hawkins, Indiana, following the mysterious disappearance of a young boy.',
            mobileBg:
                "https://tse4.mm.bing.net/th/id/OIP.PSLFA2M3rdMgfmxIPtlZ6gHaO0?pid=ImgDet&w=175&h=350&c=7&dpr=1.3&o=7&rm=3",
            desktopBg:
                "https://wallpapers.com/images/hd/stranger-things-desktop-background-1920x1080.jpg",
        };

        /* ---------- OTHER SECTIONS FROM DB ---------- */
        const trendingDocs = await Movie.find({ isPublished: true })
            .sort({ views: -1 })
            .limit(10);

        const popularDocs = await Movie.find({ isPublished: true })
            .sort({ likes: -1 })
            .limit(10);

        const newReleaseDocs = await Movie.find({ isPublished: true })
            .sort({ createdAt: -1 })
            .limit(10);

        const actionThrillerDocs = await Movie.find({
            isPublished: true,
            genres: { $in: ["Action", "Thriller"] },
        }).limit(10);

        /* ---------- FINAL RESPONSE ---------- */
        return res.status(200).json({
            success: true,
            hero, // 👈 dummy hero data

            trending: trendingDocs.map(simpleMovie),
            popular: popularDocs.map(simpleMovie),
            new_release: newReleaseDocs.map(simpleMovie),
            action_thriller: actionThrillerDocs.map(simpleMovie),
        });
    } catch (error) {
        console.error("Get Movies Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch movies",
        });
    }
};



// GET SINGLE MOVIE
export const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;

        /* ---------- VALIDATE OBJECT ID ---------- */
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid movie ID",
            });
        }

        const movie = await Movie.findById(id);

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found",
            });
        }

        /* -------- FORMAT RESPONSE -------- */
        const formattedMovie = {
            id: movie._id,
            title: movie.title,
            description: movie.description,

            poster: movie.poster,
            bgPoster: movie.bgPoster,

            rating: movie.imdbRating,
            genres: movie.genres,
            languages: movie.languages,

            cast: movie.cast,
            director: movie.director,

            trailer: movie.trailer,
            screenshots: movie.screenshots,

            downloads: movie.downloads,
            releaseYear: movie.releaseYear,
        };

        return res.status(200).json({
            success: true,
            movie: formattedMovie,
        });
    } catch (error) {
        console.error("Get Movie By ID Error:", error);

        return res.status(500).json({
            success: false,
            message: "Invalid movie ID",
        });
    }
};

// SEARCH MOVIES

export const searchMovies = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    const query = q.trim();
    const regexAnywhere = new RegExp(query, "i");
    const regexStarts = new RegExp("^" + query, "i");

    const movies = await Movie.aggregate([
      {
        $match: {
          isPublished: true,
          $or: [
            { title: { $regex: regexAnywhere } },
            { genres: { $regex: regexAnywhere } },
            { category: { $regex: regexAnywhere } },
            { subCategory: { $regex: regexAnywhere } },
          ],
        },
      },

      /* ---------- ADD SEARCH SCORE ---------- */
      {
        $addFields: {
          searchScore: {
            $sum: [
              {
                $cond: [
                  { $eq: [{ $toLower: "$title" }, query.toLowerCase()] },
                  100,
                  0,
                ],
              },
              {
                $cond: [
                  { $regexMatch: { input: "$title", regex: regexStarts } },
                  80,
                  0,
                ],
              },
              {
                $cond: [
                  { $regexMatch: { input: "$title", regex: regexAnywhere } },
                  60,
                  0,
                ],
              },
              {
                $cond: [
                  {
                    $in: [
                      query.toLowerCase(),
                      {
                        $map: {
                          input: "$genres",
                          as: "g",
                          in: { $toLower: "$$g" },
                        },
                      },
                    ],
                  },
                  40,
                  0,
                ],
              },
              {
                $cond: [
                  {
                    $eq: [
                      { $toLower: "$category" },
                      query.toLowerCase(),
                    ],
                  },
                  30,
                  0,
                ],
              },
            ],
          },
        },
      },

      /* ---------- SORT BY RELEVANCE ---------- */
      { $sort: { searchScore: -1, views: -1 } },

      /* ---------- LIMIT ---------- */
      { $limit: 20 },

      /* ---------- CLEAN RESPONSE ---------- */
      {
        $project: {
          _id: 1,
          title: 1,
          poster: 1,
          imdbRating: 1,
          description: 1,
        },
      },
    ]);

    /* ---------- FORMAT FOR FRONTEND ---------- */
    const formatted = movies.map((m) => ({
      id: m._id,
      title: m.title,
      rating: m.imdbRating,
      poster: m.poster,
      description: m.description,
    }));

    return res.status(200).json({
      success: true,
      results: formatted,
    });
  } catch (error) {
    console.error("Search Movies Error:", error);
    return res.status(500).json({
      success: false,
      message: "Search failed",
    });
  }
};
