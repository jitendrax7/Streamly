import mongoose from "mongoose";

/* -------------------- DOWNLOAD LINKS -------------------- */
const downloadSchema = new mongoose.Schema(
  {
    quality: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

/* -------------------- MAIN MOVIE SCHEMA -------------------- */
const movieSchema = new mongoose.Schema(
  {
    /* BASIC INFO */
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
      required: true,
    },

    /* CATEGORY */
    category: {
      type: String,
      required: true,
      enum: ["Movie", "Web Series", "Anime", "Documentary", "Short Film"],
      index: true,
    },

    /* SUB-CATEGORY */
    subCategory: {
      type: String,
    },

    /* MEDIA (UPDATED) */

    // 🎯 MAIN POSTER (CARD / LIST VIEW)
    poster: {
      type: String, // Cloudinary URL
      required: true,
    },

    // 🎯 BACKGROUND POSTER (DETAIL / HERO SECTION)
    bgPoster: {
      type: String, // Cloudinary URL
      required: true,
    },

    // OPTIONAL EXTRA IMAGES
    screenshots: [
      {
        type: String,
      },
    ],

    trailer: {
      type: String,
    },

    /* METADATA */
    imdbRating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    genres: [
      {
        type: String,
        index: true,
      },
    ],

    languages: [
      {
        type: String,
      },
    ],

    /* CAST & CREW */
    cast: [
      {
        type: String,
      },
    ],

    director: {
      type: String,
    },

    /* DOWNLOADS */
    downloads: [downloadSchema],

    /* ENGAGEMENT */
    views: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },

    /* ADMIN */
    isPublished: {
      type: Boolean,
      default: true,
    },

    releaseYear: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

/* -------------------- INDEXES -------------------- */
movieSchema.index({
  title: "text",
  description: "text",
  category: 1,
});

export default mongoose.model("Movie", movieSchema);
