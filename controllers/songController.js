const asyncHandler = require("express-async-handler");
const Song = require("../models/songModel");

// @desc    add new song
// @route   POST /api/song/addSong
// @access  Public
const addSong = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    res.send("please add song title");
  }
  const song = await Song.create(req.body);
  if (song) {
    res.status(201).json(song);
  } else {
    res.status(400);
    throw new Error("Invalid song data");
  }
});

// @desc    get all songs
// @route   POST /api/song/getAllSongs
// @access  Public
const getAllSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find();
  if (songs) {
    res.status(201).json(songs);
  } else {
    res.status(400);
    throw new Error("no song data");
  }
});

// @desc   edit song
// @route   POST /api/song/editSong/:id
// @access  Public
const editSong = asyncHandler(async (req, res) => {
  console.log("edit song");
  res.send("aedit song");
});

// @desc    delete song
// @route   POST /api/song/deleteSong/:id
// @access  Public
const deleteSong = asyncHandler(async (req, res) => {
  console.log("delete song");
  res.send("delete song");
});

module.exports = {
  addSong,
  getAllSongs,
  editSong,
  deleteSong,
};
