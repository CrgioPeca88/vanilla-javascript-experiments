'use strict';
// Assets
import MediaPlayer from './media-player.js';
import AutoPlay from './plugins/auto-play.js'

const video = document.querySelector("video");
const ppButton = document.getElementById("pp");
const muteButton = document.getElementById("mute");
const player = new MediaPlayer({ 
    el: video,
    plugins: [
      new AutoPlay()
    ]
  });

ppButton.onclick = () => {
  player.pp();
} 

muteButton.onclick = () => {
  player.muted();
}
