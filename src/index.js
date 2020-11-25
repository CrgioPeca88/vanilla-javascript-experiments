'use strict';
// Assets
import MediaPlayer from './media-player.js';
import AutoPlay from './plugins/auto-play.js'
import AutoPause from './plugins/auto-pause.js'

const video = document.querySelector("video");
const ppButton = document.getElementById("pp");
const muteButton = document.getElementById("mute");
const player = new MediaPlayer({ 
    el: video,
    plugins: [
      new AutoPlay(),
      new AutoPause()
    ]
  });

ppButton.onclick = () => {
  player.pp();
} 

muteButton.onclick = () => {
  if(player.isMuted()) { player.unmuted(); } else { player.muted(); }
}

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log("ERROR registrando el service worker: ", error.message);
  });
}