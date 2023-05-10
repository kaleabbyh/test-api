const mongoose = require("mongoose");

const songSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Song", songSchema);
