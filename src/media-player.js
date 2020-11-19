'use strict';

function MediaPlayer(config) {
  this.playVideo = false;
  this.media = config.el;
} 

MediaPlayer.prototype.play = function() {
  this.media.play();
}

MediaPlayer.prototype.pause = function() {
  this.media.pause();
}

MediaPlayer.prototype.pp = function() {
  this.playVideo = !this.playVideo;
  if(this.playVideo) { this.media.play() } else { this.media.pause() }
}

export default MediaPlayer;