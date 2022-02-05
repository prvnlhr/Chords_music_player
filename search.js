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



const renderClickedItem = (currList) => {
  currListHTML = currList
    .map((item, index) => {
      return `<div class="songWrapper">
  
        <div class="songNoDiv">
            <p>${index + 1}</p>
        </div>
        <div class="songArtDiv">
        <img id="imgTag-SL" src=${item.songCoverImg} />
        </div>
        <div class="songNameDiv">
            <p>${item.songName}</p>
        </div>
        <div class="songArtistNameDiv">
            <p>${item.artist}</p>
        </div>
        <div class="songDurationDiv">
        <svg class="svgIcon hideSvg" id="equalizer" width="40px" height="28px" viewBox="0 0 10 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g fill="#860d8663">
          <rect id="bar1" transform="translate(0.500000, 6.000000) rotate(180.000000) translate(-0.500000, -6.000000) " x="0" y="5" width="1" height="2px"></rect>
          <rect id="bar2" transform="translate(3.500000, 4.500000) rotate(180.000000) translate(-3.500000, -4.500000) " x="3" y="2" width="1" height="5"></rect>
          <rect id="bar3" transform="translate(6.500000, 3.500000) rotate(180.000000) translate(-6.500000, -3.500000) " x="6" y="0" width="1" height="7"></rect>
        </g>
      </svg>
        </div>
      </div> `;
    })
    .join("");
  songsListContainer.innerHTML = currListHTML;

  songWrappers = document.querySelectorAll(".songWrapper");

  for (let songIndex = 0; songIndex < songWrappers.length; songIndex++) {
    songWrappers[songIndex].addEventListener("click", () => {
      setCurrPlaying(currList[songIndex]);
      console.log(currList[songIndex]);
    });
  }
};
