import { musicData, allArtistsArray, allSongsArray } from "./data.js";
import { renderList } from "./songsList.js";
import {
  setAudioDuration,
  togglePlayPause,
  currSongDetails,
} from "./player.js";
const inputField = document.querySelector("#inputField");
const searchContainer = document.querySelector(".searchWrapper");
var songsListContainer = document.querySelector(".songsListContainer");
let songWrappers;
let finalSearchData;
let currListHTML;
let clickedAlbumIndex;
const audioSrcTag = document.querySelector("#song-source");
const audioTag = document.querySelector("#audio");
const progressFill = document.querySelector(".progressFill");
const playPauseIcon = document.querySelector("#playPauseIcon");
var currPlayingSongName = document.querySelector("#currSongName");
var currPlayingSongArtists = document.querySelector("#currArtistName");
var currPlayingSongImg = document.querySelector("#imgTag-curr");