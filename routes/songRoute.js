const express = require("express");
const router = express.Router();
const {
  addSong,
  getAllSongs,
  editSong,
  deleteSong,
} = require("../controllers/songController");

router
  .post("/addSong", addSong)
  .get("/getAllSongs", getAllSongs)
  .put("/editSong/:_id", editSong)
  .delete("/deleteSong/:_id", deleteSong);

module.exports = router;
