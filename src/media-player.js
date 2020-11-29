'use strict';

function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlayer();
  this._initPlugins();
} 

MediaPlayer.prototype._initPlayer = function() {
  this.container = document.createElement('div');
  this.container.style.position = 'relative';
  this.media.parentNode.insertBefore(this.container, this.media);
  this.container.appendChild(this.media); 
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
}

MediaPlayer.prototype.play = function() {
  this.media.play();
}

MediaPlayer.prototype.pause = function() {
  this.media.pause();
}

MediaPlayer.prototype.muted = function() {
  this.media.muted = true;
}

MediaPlayer.prototype.unmuted = function() {
  this.media.muted = false;
}

MediaPlayer.prototype.isMuted = function() {
  return this.media.muted;
}

MediaPlayer.prototype.pp = function() {
  if(this.media.paused) { this.media.play() } else { this.media.pause() }
}

export default MediaPlayer;