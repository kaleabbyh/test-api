const asyncHandler = require("express-async-handler");
require("dotenv").config();
const Song = require("../models/songModel");

// @desc    add new song
// @route   POST /api/song/addSong
// @access  Public
const addSong = asyncHandler(async (req, res) => {
  console.log("new song added");
  res.send("new song added");
});

// @desc    get all songs
// @route   POST /api/song/getAllSongs
// @access  Public
const getAllSongs = asyncHandler(async (req, res) => {
  console.log("all songs");
  res.send("all songs");
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
