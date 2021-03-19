'use strict';

function AutoPause() {
  this.threshold = 0.50;
  this.handleIntersection = this.handleIntersection.bind(this);
  this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
}

AutoPause.prototype.run = function(player) {
  this.player = player;
  this.runApScroll();
  this.runApTabs();
}

AutoPause.prototype.handleIntersection = function(entries) {
  const entry = entries[0];
  this.focusOk = this.threshold <= entry.intersectionRatio;
  if(this.focusOk) {
    this.player.play();
  } else {
    this.player.pause();
  }
}

AutoPause.prototype.handleVisibilityChange = function() {
  if(document.visibilityState === 'visible' && this.focusOk) {
    this.player.play();
  } else {
    this.player.pause();
  }
}

AutoPause.prototype.runApScroll = function() {
  const observer = new IntersectionObserver(this.handleIntersection, {
    threshold: this.threshold
  });
  observer.observe(this.player.media);
}

AutoPause.prototype.runApTabs = function() {
  document.addEventListener('visibilitychange', this.handleVisibilityChange )
}


export default AutoPause;