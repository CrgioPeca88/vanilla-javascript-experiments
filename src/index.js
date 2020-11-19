'use strict';

// Assets
import MediaPlayer from './media-player.js';

const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({ el: video });

button.onclick = () => {
  player.pp();
} 